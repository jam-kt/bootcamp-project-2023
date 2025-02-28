import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James' Personal Website",
  description: "A personal website built during the Hack4Impact bootcamp.",
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}