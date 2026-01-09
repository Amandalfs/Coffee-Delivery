import type { Metadata } from "next";
import { Baloo_2, Roboto } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const roboto = Roboto({
    variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Coffee Delivery",
  description: "Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${baloo2.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
