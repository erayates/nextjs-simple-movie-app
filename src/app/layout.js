import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import "@/styles/reset.css";

import { Inter } from "@next/font/google";

const interFontFamily = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}