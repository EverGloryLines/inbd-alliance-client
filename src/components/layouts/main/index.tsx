import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner";

const MainLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* <HeaderTop /> */}
      <Navbar />
      {/* <TaglineSlider /> */}
      <div className="w-full">{children}</div>
      <Toaster />
      <Footer />
    </main>
  );
};

export default MainLayoutProvider;
