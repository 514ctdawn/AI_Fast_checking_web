import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "VeriGuard AI by RightPick Technology – Universal AI Fact‑Checking for Seniors",
  description:
    "VeriGuard AI is a cross-platform misinformation-fighting solution engineered by RightPick Technology Limited to protect seniors and families from fake news, health myths, and scams across social apps."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}

