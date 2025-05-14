import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juntai",
  description: "Um sistema para estudos em grupo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex w-ful min-h-screen gap-10 flex-col items-center">
          <header className="w-full h-[60px] items-center justify-between flex flex-row border-b-[2px] border-b-border">
            <div className="flex flex-row items-center justify-between w-2/3 mx-auto">
              <h1 className="text-2xl text-green-900">Juntai</h1>
              <div className="flex flex-row items-center justify-center gap-4">
                <Link href={'/'}>Inicio</Link>
                <Link href={'/create'}>Criar grupo</Link>
              </div>
            </div>
          </header>
          {children}
          <footer className="bottom-0 w-full h-[60px] items-center justify-center flex flex-row border-t-[2px] border-t-border">
            <p>Esta página foi criada na ECOP 2025</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
