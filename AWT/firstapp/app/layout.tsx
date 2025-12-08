import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
      </head>
      <body
        className="container-fluid"
      >
        <nav className="navbar navbar-expand-lg bg-body-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Product-1</a></li>
                    <li><a className="dropdown-item" href="#">Product-2</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Product-3</a></li>
                  </ul>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <div className="col">
          {children}
        </div>
        <footer>
        <div className="text-center p-3 bg-body-dark">
          © 2025 Copyright: 
          <span className="blockquote"> abc.com</span>
        </div>

        </footer>
      </body>
    </html>
  );
}
