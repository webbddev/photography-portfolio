import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import CursorProvider from "../context/CursorContext";
import Cursor from "../components/Cursor";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cristian Mihai Photography",
  description: "Photography Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${playfairDisplay.variable} antialiased`}>
        <CursorProvider>
          <Header />
          {children}
          <Cursor />
        </CursorProvider>
      </body>
    </html>
  );
}
