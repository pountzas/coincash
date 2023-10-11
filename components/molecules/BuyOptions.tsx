import BillsIcon from "@/public/icons/BillsIcon";
import GroceriesIcon from "@/public/icons/GroceriesIcon";
import TicketsIcon from "@/public/icons/TicketsIcon";

import BuyCard from "./BuyCard";

function BuyOptions() {
  return (
    <div className="flex space-x-7 object-contain overflow-x-scroll scrollbar-track-[#84B5FF] scrollbar-thumb-[#0066FF] scrollbar w-[312px] md:w-full mb-12 lg:mb-[136px] gap-[100px] md:scrollbar-hide scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-h-1">
      <BuyCard blueText="book" itemName="tickets" icon={<TicketsIcon />} />
      <BuyCard blueText="buy" itemName="groceries" icon={<GroceriesIcon />} />
      <BuyCard blueText="pay" itemName="your bills" icon={<BillsIcon />} />
    </div>
  );
}

export default BuyOptions;
