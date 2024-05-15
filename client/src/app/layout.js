import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VisualAlgo",
  description:
    "A visual learning tool for computer science algorithms and data sturctures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar /> {children}
      </body>
    </html>
  );
}
