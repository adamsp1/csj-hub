import type { Metadata } from "next";
import "@/styles/globals.css";
import '@fontsource/bitter/400.css';
import '@fontsource/bitter/700.css';
import '@fontsource/wix-madefor-display/400.css';
import '@fontsource/wix-madefor-display/700.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Critical Social Justice Hub",
  description: "An information hub for critical viewpoints on progressive ideological frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-gray-50 text-gray-900`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
