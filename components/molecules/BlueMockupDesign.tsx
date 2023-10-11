function BlueMockupDesign() {
  return (
    <div className="relative pt-4 mt-8 md:mt-0 lg:pt-0 w-full flex flex-col items-center lg:absolute lg:bottom-[440px] lg:-right-[23%] xl:-right-[26.5%] ">
      <div className="flex flex-col items-center">
        <div className="absolute z-10 top-[42px] w-[323px] h-[322px] lg:w-[587px] lg:h-[587px] bg-[#0147AE] rounded-full" />
        <div className="absolute w-[377px] h-[377px] lg:w-[687px] lg:h-[687px] bg-[#0066FF] rounded-full" />
        <img
          className="absolute -top-[44px] lg:-top-[230px] z-20 pt-4 w-[125px] h-[244px] lg:w-[337px] lg:h-[655px]"
          src="./images/iphoneMockup.png"
        />
      </div>
    </div>
  );
}

export default BlueMockupDesign;
