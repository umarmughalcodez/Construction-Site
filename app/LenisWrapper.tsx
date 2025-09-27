"use client";
import React from "react";
import useLenis from "@/hooks/lenis";

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return <>{children}</>;
};

export default LenisWrapper;
