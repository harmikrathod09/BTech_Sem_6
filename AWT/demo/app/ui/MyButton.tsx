"use client";

import { useRouter } from "next/navigation";

export default function MyButton() {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          console.log("Hello world");
          router.push("/contact");
        }}
        className="btn btn-primary"
      >
        Click
      </button>
    </>
  );
}
