import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="container"
      >
       
    <div>
      <div className="row">
        <div className="col-2 border border-primary">LOGO HERE</div>
        <div className="col border border-info">
        <Link href="/">Home</Link> &nbsp;

          <Link href="/contact">
            Contact
          </Link>
          &nbsp;
          <Link href="/about">About</Link> &nbsp;
          <Link href="/about/college">About-college</Link> &nbsp;
          <Link href="/about/university">About-uni</Link> &nbsp;
        </div>
      </div>
      <div className="row">
        <div className="col-3 border border-primary">SIDEBAR</div>
        <div className="col">{children}</div>
      </div>
    </div>


      </body>
    </html>
  );
}
