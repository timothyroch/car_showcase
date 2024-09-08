import { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { ClerkProvider } from "@clerk/nextjs";
import SideNav from "./(routes)/dashboard/_components/SideNav";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className="relative">
      <div className=''>
      <SideNav />
        {children}
      </div>
        </body>
    </html>
    </ClerkProvider>

  );
}