import type { Metadata } from "next";
import { Encode_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Wrapper from "./components/Wrapper";

const encodesans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "NNFPHAS - Network for Nigerian Female PHD Holders in Arts & Sciences",
  description:
    "Empowering Nigerian Women in Academia for National Development. Join our network of accomplished female PhD holders making a difference in arts and sciences.",
  keywords:
    "Nigerian women, PhD holders, academia, arts, sciences, networking, empowerment, education",
  authors: [{ name: "NNFPHAS" }],
  openGraph: {
    title: "NNFPHAS - Network for Nigerian Female PHD Holders",
    description:
      "Empowering Nigerian Women in Academia for National Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${encodesans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
