import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RMS Magnific | White Star Line",
  description: "Reserve sua viagem a bordo do RMS Magnific.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}