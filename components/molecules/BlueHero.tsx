function BlueHero() {
  return (
    <div className="px-6 xl:px-[164px] self-stretch h-[312px] flex-col justify-center items-start gap-6 flex lg:mt-12">
      <div className="self-stretch">
        <span className="text-zinc-900 text-[32px] lg:text-[48px] font-bold">
          You can buy anything
          <br />
          with{" "}
        </span>
        <span className="text-[#0066FF] text-[32px] lg:text-[48px] font-bold">
          COINCASH
        </span>
      </div>
      <div className="self-stretch text-zinc-900 text-base xl:text-xl font-normal max-w-[480px]">
        The easiest way to use your cryptocurrencies for everyday purchases.
      </div>
      <div className="px-6 py-3 bg-[#0066FF] rounded justify-center items-center gap-2 inline-flex mb-16">
        <div className="lg:hidden text-white text-base font-semibold ">
          Get the app
        </div>
        <div className="hidden lg:inline-flex text-white text-xl font-semibold">
          Download now for free
        </div>
      </div>
    </div>
  );
}

export default BlueHero;
