import type { Metadata } from "next";
import { Baloo_2, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["700", "800"], 
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
  display: 'swap',
});
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
        <div className="flex flex-col gap-2 mx-40 mb-160 w-auto">
          <Header />
          <div className="w-full h-28" />
          {children}
        </div>
      </body>
    </html>
  );
}
