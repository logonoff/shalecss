import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Html, SkipToContent } from "@shalecss/react";
import { Ubuntu } from "next/font/google";

import "@shalecss/core/dist/shale.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    <ThemeProvider>
      <Html lang="en" className={ubuntu.className} theme="dark">
        <body className="shale-v1-body">
          <SkipToContent href="#maincontent">Skip to Content</SkipToContent>
          {children}
        </body>
      </Html>
    </ThemeProvider>
  );
}
