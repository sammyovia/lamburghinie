import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lamburghinie",
  description: "Hospitality Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<Navigation/>
{children}
</body>
    </html>
  );
}
