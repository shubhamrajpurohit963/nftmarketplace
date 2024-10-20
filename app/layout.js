import "./globals.css";
import NavBar from "@/components/navbar";
import { Work_Sans, Space_Mono } from "@next/font/google";
import Footer from "@/components/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "NFT Marketplace",
  description: "NFT Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} ${workSans.className} helevtica`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
