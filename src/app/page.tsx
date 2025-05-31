import { Footer } from "@/components/Footer";
import { GridLinks } from "@/components/GridLinks";
import { Header } from "@/components/Header";
import { ThemeButton } from "@/components/theme-button";

export default function Home() {
  return (
    <>
      <Header />
      <ThemeButton />
      <GridLinks />
      <Footer />
    </>
  );
}
