import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project-Web",
  description: "Mi proyecto web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#694848]`}>
{/*         <Navbar />
 */}        {children}
      </body>
    </html>
  );
}
