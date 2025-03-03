import "./globals.css";
import { DM_Serif_Display, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import common from "@components/common";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const satoshiVariable = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable.woff2",
      weight: "500",
    },
  ],
  variable: "--font-satoshi-variable",
});

export const metadata = {
  title: "LyteMaster",
  description: "World class range of lighting solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen h-full flex flex-col ${dmSerifDisplay.variable} ${bebasNeue.variable} ${satoshiVariable.variable} antialiased font-satoshiVariable overscroll-none scroll-smooth bg-[#F7F2EA]`}
      >
        <common.Nav />
        <main className="z-1 w-full flex-1 flex flex-col scroll-smooth">
          {children}
        </main>
        <common.Footer />
      </body>
    </html>
  );
}
