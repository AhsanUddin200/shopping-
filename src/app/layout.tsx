"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAuthPage = pathname === "/SignIn" || pathname === "/signup"; 
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {!isAuthPage && (
              <>
                <Header />
                <HeaderMain />
                <Navbar />
              </>
            )}
            {children}
            {!isAuthPage && <Footer />}
          </>
        )}
      </body>
    </html>
  );
}
