import type { Metadata } from "next";
import "../../assets/css/globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const ubuntu = localFont({
  src: "../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  );
}
