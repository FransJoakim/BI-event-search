"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const Notfound = () => {
  const router = useRouter();

  return (
    <div className="flex h-[85vh] w-screen items-center justify-center">
      <div className="">
        <div className="font-dark text-5xl font-bold">404</div>
        <p className="text-2xl leading-normal font-light md:text-3xl">
          Beklager, denne siden eksisterer ikke.
        </p>
        <Button onClick={() => router.push("/")}>Gå til forsiden</Button>
      </div>
    </div>
  );
};

export default Notfound;
