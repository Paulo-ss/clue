import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.className} antialiased`}>{children}</body>
    </html>
  );
}
