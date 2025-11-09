import MainLayoutProvider from "@/components/layouts/main";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutProvider>{children}</MainLayoutProvider>;
}
