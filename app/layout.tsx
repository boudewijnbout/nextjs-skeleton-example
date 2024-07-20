import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS skeleton example",
  description: "Skeleton loading using React Suspense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
