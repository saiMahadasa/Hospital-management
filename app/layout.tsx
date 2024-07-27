import type { Metadata } from "next";
import { ThemeProvider } from "../components/ui/theme-provider"
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {cn} from './lib/utils';

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight : ['300' , '400' , '500' , '600' , '700'],
  variable : '--font-sans'
 });

export const metadata: Metadata = {
  title: "CarePlus",
  description: "A HealthCare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className={cn('min-h-screen font-sans bg-dark-300 antialiased' , fontSans.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
