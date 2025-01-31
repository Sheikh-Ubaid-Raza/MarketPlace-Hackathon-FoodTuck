// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import CartProvider from "@/components/Provider"; // Import the CartProvider
import { ToastContainer } from "react-toastify"; // Toast for notifications

// Local Fonts
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

// Metadata for the app
export const metadata: Metadata = {
  title: "foodtuck",
  description: "Fast Food Items here",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Context Provider wrapping the app */}
        <CartProvider>
          <div className="min-w-[320px] max-w-[1920px] mx-auto text-white">
            {children} {/* Main content */}
            <Footer /> {/* Footer */}
            <ToastContainer /> {/* Toast notifications */}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
