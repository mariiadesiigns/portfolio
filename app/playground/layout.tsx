import { HomeNavigation } from "@/components/homepage/navigation";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNavigation />
      {children}
    </>
  );
}
