import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Portfolio - Asher Contreras",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body id="body" className={openSans.className}>{children}</body>
      </html>
  );
}
