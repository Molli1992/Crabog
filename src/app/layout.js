import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Toast from "@/components/toast/toast";

export const metadata = {
  title: "Crabog",
  description: "Cangueiro Ruiz Abogados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Toast />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Layout
