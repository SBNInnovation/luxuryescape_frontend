import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/provider/Provider";
import { Poppins } from 'next/font/google';
import Navbar from "@/shared/Navbar/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
    <html lang="en" className="bg-[#F9F5F6]">
      <body
        className={`${poppins.className} antialiased bg-[#F9F5F6] max-w-screen-2xl`}
      >
        <Provider>
          <Navbar/>
          <main className="pt-20">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
