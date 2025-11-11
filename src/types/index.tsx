export interface Container {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ContainerCardProps {
  container: Container;
  index: number;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export interface ContainerGridProps {
  containers: Container[];
}