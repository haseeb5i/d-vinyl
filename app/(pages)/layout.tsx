import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap">
      <RevealObserver />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
