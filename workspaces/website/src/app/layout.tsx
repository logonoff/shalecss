import { ThemeProvider } from "@/components/ThemeProvider";
import { Header, HeaderText, HeaderTitle, Html, MenuBarButton, Nav, SkipToContent } from "@shalecss/react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import { PageFooter } from "@/components/PageFooter";
import { ThemeMenu } from "@/components/ThemeMenu";
import "@shalecss/core/dist/shale.css";
import { PageHeader } from "@/components/PageHeader";
import { ViewTransition } from "react";

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
      <Html lang="en" className={ubuntu.className} theme="dark" webkitScrollbar>
        <body className="shale-v1-body">
          <SkipToContent href="#maincontent">Skip to Content</SkipToContent>

          <PageHeader />
          <ViewTransition name="page">
            {children}
          </ViewTransition>
          <PageFooter />
        </body>
      </Html>
    </ThemeProvider>
  );
}
