import BillsIcon from "@/public/icons/BillsIcon";
import GroceriesIcon from "@/public/icons/GroceriesIcon";
import TicketsIcon from "@/public/icons/TicketsIcon";

import BuyCard from "../molecules/BuyCard";
import BuyPhotoCard from "../molecules/BuyPhotoCard";

function BuySection() {
  return (
    <div className="pb-[100px] pt-[178px] flex-col justify-center items-center  inline-flex">
      {/* buy header */}
      <div className=" h-[184px] pb-[136px] flex-col justify-start items-start gap-4 flex px-8">
        <div className="self-stretch text-center text-[#1C1B1F] text-[32px] md:text-[48px] font-bold">
          Buy anything you ever imagine
        </div>
        <div className="self-stretch text-center text-[#1C1B1F] text-base md:text-[20px] font-normal">
          The easiest way to use your cryptocurrencies for everyday purchases.
        </div>
      </div>

      {/* buy slider options */}

      <div className="flex space-x-7 object-contain overflow-x-scroll scrollbar-track-[#84B5FF] scrollbar-thumb-[#0066FF] scrollbar w-[312px] md:w-full mb-12 lg:mb-[136px] gap-[150px] md:scrollbar-hide scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-h-1">
        <BuyCard blueText="book" itemName="tickets" icon={<TicketsIcon />} />
        <BuyCard blueText="buy" itemName="groceries" icon={<GroceriesIcon />} />
        <BuyCard blueText="pay" itemName="your bills" icon={<BillsIcon />} />
      </div>

      {/* buy photos */}

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
    </div>
  );
}

export default BuySection;
