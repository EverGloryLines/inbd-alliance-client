import { Footer } from "@/components/shared/footer";
import { Navigation } from "@/components/shared/navigation";
import { Toaster } from "@/components/ui/sonner";

const MainLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* <HeaderTop /> */}
      <Navigation />
      {/* <TaglineSlider /> */}
      <div className="w-full">{children}</div>
      <Toaster />
      <Footer />
    </main>
  );
};

export default MainLayoutProvider;
