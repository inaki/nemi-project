"use client";
import Header from "./header";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { pathBackground } from "../utils/styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const url = `${pathname}`;

    const html = document.documentElement;
  }, [pathname]);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `${pathBackground(pathname)}`,
      }}
    >
      <Header />
      {children}
    </div>
  );
}
