import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

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
    <html lang="en">
      <body>
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
