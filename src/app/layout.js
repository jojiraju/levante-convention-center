import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

export const metadata = {
  title: "Levante | Premium Convention Center",
  description: "Excellence in Every Event. Discover the most prestigious venue in Kerala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
