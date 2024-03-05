"use client";

import abi from "../../../lib/abi";
import { useCompletion } from "ai/react";
import { Info } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useLoading } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LogoBnb from "@/components/logo/logo-bnb";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAccount, useBalance, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { decrypt } from "@/lib/utils";
import { parseEther } from "viem";

export default function PromptCompletion({ tokenId, prompt }) {
  const router = useRouter();
  const { address } = useAccount();
  const { data: dataBalance } = useBalance({ address: address });
  const [inputs, setInputs] = useState([]);
  const [balance, setBalance] = useState(0);
  const [inputValues, setInputValues] = useState({});
  const setLoading = useLoading((state) => state.setMsg);
  const { completion, complete } = useCompletion({
    body: {
      inputValues: inputValues,
    },
  });

  const { data: hash, error: errorWriteContract, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (errorWriteContract) {
      toast.error(errorWriteContract?.shortMessage || errorWriteContract?.message || "Failed to write contract");
    }
  }, [errorWriteContract]);

  useEffect(() => {
    const letsCompete = async () => {
      await complete(prompt?.prompt);
    }

    if (isConfirming) {
      return setLoading("Processing...");
    }

    if (isConfirmed) {
      setLoading(false);
      letsCompete();
    }
  }, [isConfirming, isConfirmed, router]);

  useEffect(() => {
    if (dataBalance?.value) {
      setBalance(parseInt(dataBalance.value.toString()) / (1 * 10 ** dataBalance.decimals));
    }
  }, [dataBalance]);

  useEffect(() => {
    if (prompt?.prompt) {
      const promptText = decrypt(prompt.prompt.data);
      const textInBrackets = promptText.match(/\[(.*?)\]/g)?.map((teks) => teks.replace(/\[|\]/g, "").trim());
      if (textInBrackets !== undefined && textInBrackets.length > 0) {
        setInputs(textInBrackets);
      } else {
        setInputs([]);
      }
    }
  }, [prompt]);

  const handleInputFieldChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleTryPrompt = useCallback(
    async (c) => {
      const cost = parseFloat(prompt?.price_to_use || 0);

      if (balance >= cost) {
        setLoading("Loading...");
        try {
          setBalance((prev) => prev - cost);
          setLoading(false);

          writeContract({
            abi,
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            functionName: "tryPrompt",
            args: [`${tokenId}`],
            value: parseEther(`${cost}`),
          });

          setLoading("Loading...");
        } catch (error) {
          console.log(error);
          toast.error("Failed to handle your request");
          setLoading(false);
        }
      } else {
        toast.dismiss();
        toast.error("Your balance is insufficient to make this transaction");
      }
    },
    [complete, balance, prompt, setLoading, tokenId]
  );

  return (
    <>
      {inputs != null && inputs != undefined && inputs.length > 0 && (
        <div className="space-y-4 my-4">
          {inputs.map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <Label>{i}</Label>
              <input
                placeholder="...."
                type="text"
                className="flex h-10 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                name={`${i}`}
                value={inputValues[`${i}`] || ""}
                onChange={handleInputFieldChange}
              />
            </div>
          ))}
        </div>
      )}

      {/* <Alert variant="destructive" className="mb-4">
        <Info className="h-4 w-4" />
        <AlertDescription>You will be charged a fee of {prompt?.price_to_use} BNB. The results will be available immediately.</AlertDescription>
      </Alert> */}

      <Button className="gap-2 w-full" variant="primary" size="lg" onClick={() => handleTryPrompt(prompt?.prompt)}>
        <span>Try Now</span>
        <p className={`flex items-center gap-1`}>
          <LogoBnb className="w-4 h-4" />
          <span>{prompt?.price_to_use}</span>
        </p>
      </Button>

      <div className="whitespace-pre-wrap my-6 border border-primary bg-lime text-primary p-3 rounded max-h-[calc(100vh_-_25rem)] overflow-y-auto">
        <p className="font-bold uppercase mb-3">Result:</p>
        {completion || `-`}
      </div>
    </>
  );
}
