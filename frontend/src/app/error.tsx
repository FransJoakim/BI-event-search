"use client";

import Button from "@mui/material/Button";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="h-screen w-screen">
      <div className="flex h-2/3 items-center justify-center">
        <div className="child:w-fit flex flex-col items-center">
          <h2>Wæææ! Noe gikk galt!</h2>
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Prøv igjen
          </Button>
        </div>
      </div>
    </div>
  );
}
