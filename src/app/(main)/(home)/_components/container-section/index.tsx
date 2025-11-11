import { SectionHeader } from "./_components/section-header";
import { ContainerGrid } from "./_components/container-grid";
import { CONTAINERS } from "@/data/container";

export function ContainerShowcase() {
  return (
    <section
      className="py-8 md:py-16 2xl:py-24 px-4 bg-white"
      aria-labelledby="container-showcase-title"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Container Types & Specifications"
          subtitle="Explore our comprehensive range of shipping containers designed for various cargo and logistics needs"
        />
        <ContainerGrid containers={CONTAINERS} />
      </div>
    </section>
  );
}
