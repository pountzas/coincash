import { ReactNode } from "react";

type BuyCardProps = {
  blueText: string;
  itemName: string;
  icon: ReactNode;
};

function BuyCard({ blueText, itemName, icon }: BuyCardProps) {
  return (
    <div className="grow shrink basis-0 flex-col justify-start items-center gap-9 inline-flex py-6 lg:py-0">
      <div className="w-20 h-20 px-[5px] pt-[5px] pb-[7.50px] justify-center items-center inline-flex">
        {icon}
      </div>
      <div className="self-stretch text-center">
        <span className="text-[#1C1B1F] lg:text-2xl font-normal">
          You can <br />
        </span>
        <span className="text-[#0066FF] lg:text-2xl font-normal">
          {blueText}
        </span>
        <span className="text-[#1C1B1F] lg:text-2xl font-normal">
          {" "}
          {itemName}
        </span>
      </div>
    </div>
  );
}

export default BuyCard;
