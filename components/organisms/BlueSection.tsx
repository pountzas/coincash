import BlueFooter from "../molecules/BlueFooter";
import BlueHero from "../molecules/BlueHero";
import BlueMockupDesign from "../molecules/BlueMockupDesign";

function BlueSection() {
  return (
    <div className="w-full h-[580px] lg:h-[800px] pt-4 lg:pt-[187px] bg-gradient-to-t from-[#0066FF33]/20 to-white flex-col justify-start items-center inline-flex lg:relative overflow-hidden">
      <BlueHero />
      <BlueMockupDesign />
      <BlueFooter />
    </div>
  );
}

export default BlueSection;
