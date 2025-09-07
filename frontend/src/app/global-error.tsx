"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <head>
        <title>Feilsituasjon</title>
      </head>
      <body>
        <div className="global-error-container">
          <h1>Au da! Her har noe gått virkelig galt.</h1>
          <p>
            Velg om du vil få panikk, gå tilbake til start eller prøv igjen,
            feilen er uansett logget. Lykke til!
          </p>
          <div className="error-actions">
            <button onClick={() => reset()}>Prøv igjen</button>
            <button onClick={() => (window.location.href = "/")}>
              Gå til forsiden
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
