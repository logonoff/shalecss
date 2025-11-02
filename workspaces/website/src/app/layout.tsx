import type { Metadata } from "next";
import { Html } from "@shalecss/react";
import { Ubuntu } from "next/font/google";
import "@shalecss/core/dist/shale.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "shalecss",
  description: "a psudeo-skeuomorphic css+react framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="en" className={ubuntu.className} theme="dark">
      <body>
        {children}
      </body>
    </Html>
  );
}
