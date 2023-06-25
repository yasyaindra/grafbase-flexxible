import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./global.css";

export const metadata = {
  title: "Flexxible",
  description: "Showcase Of Any Masterpieces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
