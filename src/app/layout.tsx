import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Wrapper from "./components/Wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "NENFPHAS - Network for Nigerian Female PHD Holders in Arts & Sciences",
  description:
    "Empowering Nigerian Women in Academia for National Development. Join our network of accomplished female PhD holders making a difference in arts and sciences.",
  keywords:
    "Nigerian women, PhD holders, academia, arts, sciences, networking, empowerment, education",
  authors: [{ name: "NENFPHAS" }],
  openGraph: {
    title: "NENFPHAS - Network for Nigerian Female PHD Holders",
    description: "Empowering Nigerian Women in Academia for National Development",
    type: "website",
  },
  icons: {
    icon: "/images/favIcon.svg",
    apple: "/images/favIcon.svg",
    shortcut: "/images/favIcon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
