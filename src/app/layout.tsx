import type { Metadata } from "next";
import { Cormorant_Infant } from "next/font/google";
import "./globals.css";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Muhammad Afif Portfolio Website",
  description: "Muhammad Afif Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantInfant.className} antialiased`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
