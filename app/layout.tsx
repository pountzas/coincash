import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const poppins = Poppins({
  subsets: ["latin-ext"],
  display: "fallback",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "CoinCash",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="flex-col items-center justify-center min-h-screen max-w-[1440px] m-auto"
    >
      <body
        className={
          poppins.className && "flex-col items-center justify-center w-full "
        }
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
