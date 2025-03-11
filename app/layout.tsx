import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
<<<<<<< HEAD
=======
import localFont from 'next/font/local'
>>>>>>> 23d4454 (done Authentication with clerk)

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const raleway = localFont({src:'./fonts/Raleway.woff2',
  variable : '--font-raleway',
  weight: "100 900",

})

export const metadata: Metadata = {
  title: "Zylera ecommerce",
  description: "An ecommerce app for education purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
<<<<<<< HEAD
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
=======
          className={`${raleway.variable} antialiased`}
>>>>>>> 23d4454 (done Authentication with clerk)
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
