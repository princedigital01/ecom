import {AuthProvider} from "./providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



const poppins = localFont({
  src: [
    {
      path: "./font/poppins/poppins-black.ttf",
      weight: '900',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-ExtraBold.ttf",
      weight: '800',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-bold.ttf",
      weight: '700',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-Semibold.ttf",
      weight: '600',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-Medium.ttf",
      weight: '500',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-Regular.ttf",
      weight: '400',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-Thin.ttf",
      weight: '300',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-Light.ttf",
      weight: '200',
      style: 'normal'
    },
    {
      path: "./font/poppins/poppins-ExtraLight.ttf",
      weight: '100',
      style: 'normal'
    },
  ],
  variable:'--font-poppins'
})

const Montserrat = localFont({
  src: [
    {
      path: "./font/Montserrat/Montserrat-black.ttf",
      weight: '900',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-ExtraBold.ttf",
      weight: '800',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-bold.ttf",
      weight: '700',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-Semibold.ttf",
      weight: '600',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-Medium.ttf",
      weight: '500',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-Regular.ttf",
      weight: '400',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-Thin.ttf",
      weight: '300',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-Light.ttf",
      weight: '200',
      style: 'normal'
    },
    {
      path: "./font/Montserrat/Montserrat-ExtraLight.ttf",
      weight: '100',
      style: 'normal'
    },
  ],
  variable:'--font-Montserrat'
})


export const metadata: Metadata = {
  title: "Abby",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session, // ✅ Accept session prop
}: Readonly<{
  children: React.ReactNode;
  session?: any; // Add session type
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased bg-bg`} data-bs-theme="dark">
      
        <AuthProvider session={session}> {/* ✅ Pass session */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

