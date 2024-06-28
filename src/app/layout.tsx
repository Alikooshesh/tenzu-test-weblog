import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import LayoutController from "@/components/layoutController";
import ReduxWrapper from "@/components/reduxWrapper";

const montserral = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "a simple blog with nextjs",
  robots: "noindex nofollow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserral.className}>
        <ReduxWrapper>
          <LayoutController>
            <>
              {children}
            </>
          </LayoutController>
        </ReduxWrapper>
      </body>
    </html>
  );
}
