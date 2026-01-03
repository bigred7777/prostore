"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { FileExclamationPointIcon } from "lucide-react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FileExclamationPointIcon color="red" size={48} strokeWidth={2} />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">An Error Occurred</h1>
        <p className="text-destructive">Cannot continue, an error happend!</p>
        <Button
          variant="outline"
          className="mt-4 ml-2 hover:cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Error;
