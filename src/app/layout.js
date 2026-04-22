import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-paragraph",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bitox - Business Consulting & Finance",
  description:
    "Bitox is a global business consulting and finance firm helping companies achieve measurable growth and long-term strategic success.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
