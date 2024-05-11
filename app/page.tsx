"use client";
import { Navbar } from "@/reuseComponents/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <footer className="flex h-20 w-full items-center px-4">
        <p className="mx-auto">Tsunami Beyond 2024</p>
      </footer>
    </>
  );
}
