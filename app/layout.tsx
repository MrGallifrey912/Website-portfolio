import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./button-styles.css";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
import Education from "./components/eduWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMFJ",
  description: "Modified by Andrew Jones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navigation />       
        {children}
        <Footer />
      </body>
    </html>
  );
}
