"use client";
import React from "react";
import Navbar from "../navbar";
import PopupWrapper from "../popup";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      {children}
      <PopupWrapper />
    </div>
  );
}
