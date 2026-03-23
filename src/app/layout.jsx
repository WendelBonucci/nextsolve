import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/footer/Footer";

export const metadata = {
  title: "NextSolve - Software Company",
  description: "Transformamos ideias em Realidade atráves da tecnologia.",
  icon: {
    Icon: '/logo.png'
  }
};

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