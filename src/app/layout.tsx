import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/provider/Provider";
import { Toaster } from "sonner";
import Navbar from "@/shared/Navbar/Navbar";
import ScrollToTop from "@/shared/ScrollToTop";
import { poppins } from "@/utility/font";
import Footer from "@/shared/Footer/Footer";
import Whatsapp from "@/shared/Whatsapp/Whatsapp";

export const metadata: Metadata = {
  title: "Luxury Escapes Nepal | Luxury Tours & Travel in Nepal, Bhutan & Tibet",
  description: "Experience luxury travel in Nepal, Bhutan & Tibet. Discover exclusive hotels, private tours, and bespoke itineraries designed for ultimate comfort and elegance.",
  keywords: "Luxury travel Nepal, luxury tours Nepal, luxury escapes Nepal, 5-star hotels Nepal, private tours Nepal, high-end travel Bhutan, luxury vacation Tibet",
  openGraph: {
    title: "Luxury Escapes Nepal | Premium Travel Experiences in the Himalayas",
    description: "Indulge in world-class luxury travel experiences in Nepal, Bhutan, and Tibet. Stay in exclusive resorts and explore curated itineraries tailored for elite travelers.",
    type: "website",
    url: "https://nepalluxuryescapes.com",
    images: [
      {
        url: "https://nepalluxuryescapes.com/ab2.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Escapes Nepal - Premium Travel Experiences",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary/5">
      <body className={poppins.className}>
        <div className="bg-primary/5">
          <div className="mx-auto max-w-[2000px]">
            <Provider>
              <Navbar />
              <Whatsapp/>
              <Toaster richColors/>
              <main className={`${poppins.className}`}>
                {children}
                <ScrollToTop />
              </main>
              <Footer/>
            </Provider>
          </div>
        </div>
      </body>
    </html>
  );
}