import BuyPhotoCard from "./BuyPhotoCard";

function BuyPhotoSection() {
  return (
    <div className="space-y-12 md:space-y-[60px]  lg:space-y-[136px]">
      <BuyPhotoCard
        description="The easiest way to use your cryptocurrencies for everyday purchases."
        src="./images/payPhoto540_1.png"
        title="Shop anywhere"
      />
      <BuyPhotoCard
        description="The easiest way to use your cryptocurrencies for everyday purchases."
        src="./images/payPhoto540_2.png"
        title="Zero fees"
        mirror={true}
      />
    </div>
  );
}

export default BuyPhotoSection;
