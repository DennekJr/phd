import Header from "./Header";
import Footer from "./Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
