import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ExactNavbarAligned from "@/components/navbar";
import Footer from "@/components/fotter";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shraddha Tech Solutions",
  description: "Empowering Your Digital Journey with Innovative Tech Solutions",
  icons: {
    icon: "/icon.png",          // Browser tab
           // iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ExactNavbarAligned />
        {children}
        <Footer />
      </body>
    </html>
  );
}
