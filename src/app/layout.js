import localFont from "next/font/local";
import { Dela_Gothic_One, Press_Start_2P } from 'next/font/google'
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Component/Nav/NavBar";
import Footer from "./Component/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const DelaGothic = Dela_Gothic_One({
  subsets: ['latin'],
  variable: "--font-dela-Go",
  weight: "400",
});

const kaplamo = Press_Start_2P({
  subsets: ['latin'],
  variable: "--font-kablammo",
  weight: "400",
});

export const metadata = {
  title: "Swiss",
  description: "CO.FOR CONTRACTING & TRADING",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kaplamo.variable}`} suppressHydrationWarning={true} >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
