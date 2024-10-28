import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/provider/Provider";
import { Poppins } from 'next/font/google';
import Navbar from "@/shared/Navbar/Navbar";
import ScrollToTop from "@/shared/ScrollToTop";
import Head from "next/head";
import { poppins } from "@/utility/font";

export const metadata: Metadata = {
  title: "Luxury Escapes Nepal",
  description: "Luxury Escapes Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary/5">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Luxury Escapes Nepal" />
        <title>Luxury Escapes Nepal</title>
      </Head>
      <body className={poppins.className}>
        <div className="bg-primary/5">
          <div className="mx-auto max-w-[1800px]">
            <Provider>
              <Navbar />
              <main className={`${poppins.className}`}>
                {children}
                <ScrollToTop />
              </main>
            </Provider>
          </div>
        </div>
      </body>
    </html>
  );
}