import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar/Navbar";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--workSans" });

export const metadata: Metadata = {
  title: {
		template: `%s | ${process.env.APP_NAME}`,
		default: `${process.env.APP_NAME}`
	},
	description: `${process.env.APP_DESCRIPTION}`,
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
				className={cn("font-workSans min-h-screen bg-background antialiased", workSans.variable)}
        >
          <Navbar/>
          <main>
          {children}
          </main>
          </body>
    </html>
  );
}
