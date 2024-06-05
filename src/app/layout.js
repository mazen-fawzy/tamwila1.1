import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "../../componants/Footer";
import Footerb from "../../componants/Footerb";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "tamwila"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        <Footerb/>
        
      </body>
    </html>
  );
}
