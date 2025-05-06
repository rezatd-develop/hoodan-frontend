import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "Hoodan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="enamad" content="48183196" />
      </head>
      <body>{children}</body>
    </html>
  );
}
