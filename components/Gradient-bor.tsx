"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="mt-5">
      <BackgroundGradient className="rounded-[22px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-w-full bg-black text-white">
        {children}
      </BackgroundGradient>
    </div>
  );
}
