import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Jost Font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Black.otf",
  variable: "--font-satoshi",
  weight: "700",
  display: "swap",
});

// Metadata for the application
export const metadata: Metadata = {
  title: {
    template: "%s | Liminal",
    default: "Liminal | Luxury Interior Design & Architecture Agency",
  },
  description:
    "Liminal is a premier interior design and architecture agency dedicated to creating stunning, art-focused spaces that inspire.",
};

// RootLayout Component
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${satoshi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
