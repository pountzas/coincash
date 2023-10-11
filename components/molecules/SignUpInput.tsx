import Input from "../atoms/Input";

function SignUpInput() {
  return <div className="self-auto sm:self-center pl-3 pr-2 py-2 bg-white rounded-lg shadow justify-start items-center gap-2 inline-flex max-w-[400px]">
  <div className="grow shrink basis-0 text-zinc-400 text-base font-normal">
    <Input placeholder="Type your email here" />
  </div>
  <div className="px-6 py-3 bg-zinc-400 rounded justify-center items-center gap-2 flex">
    <div className="text-white text-base font-semibold">Sing up</div>
  </div>
</div>;
}

export default SignUpInput;
