import { Antic_Didone, Poppins } from "next/font/google";

export const antic = Antic_Didone({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
})

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});