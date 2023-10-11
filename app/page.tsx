import BlueSection from "@/components/organisms/BlueSection";
import BuySection from "@/components/organisms/BuySection";

export default function Home() {
  return (
    <main className="flex min-h-[400px] flex-col items-center ">
      <BlueSection />
      <BuySection />
    </main>
  );
}
