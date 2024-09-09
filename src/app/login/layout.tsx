import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "Desafio Next.JS 2024.2",
  description: "Desafio Next.JS, Typescript, Tailinwd, Prisma, semestre 2024.2 para todos os membros da Code JR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= "bg-roxo-escuro">
        <Header />
        {children}
      </body>
    </html>
  );
}
