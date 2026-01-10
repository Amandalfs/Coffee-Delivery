import { Catalog } from "@/components/Catalog/Catalog";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
   <div className="flex flex-col gap-2 mx-40 pb-160 w-auto">
    <Header />
    <Hero />
    <Catalog />
   </div>
  );
}
