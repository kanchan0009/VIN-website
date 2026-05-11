import type { Metadata } from "next";
import { Montserrat, Lora, Plus_Jakarta_Sans, Inter, Quando } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

const quando = Quando({
  subsets: ["latin"],
  variable: "--font-quando",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Volunteers Initiative Nepal (VIN)",
  description:
    "A non-profit NGO empowering marginalised communities across Nepal through education, health, environment, and disaster resilience programs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quando.variable} ${montserrat.variable} ${lora.variable} ${plusJakartaSans.variable} ${inter.variable} ${montserrat.className}`}>
      <body>
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}

