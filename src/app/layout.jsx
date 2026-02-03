import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/footer/Footer";

export default function RootLayout({ children }) {

  return (
    <html lang="pt">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}