import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webeo - Diseñamos tu Web a Medida",
  description: "En Webeo diseñamos tu página web a medida, rápido y a buen precio. ¡Contáctanos! 😊",
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
