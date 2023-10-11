import BuyHeader from "../molecules/BuyHeader";
import BuyOptions from "../molecules/BuyOptions";
import BuyPhotoSection from "../molecules/BuyPhotoSection";

function BuySection() {
  return (
    <div className="pb-[100px] pt-[178px] flex-col justify-center items-center  inline-flex">
      <BuyHeader />
      <BuyOptions />
      <BuyPhotoSection />
    </div>
  );
}

export default BuySection;
