function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="w-full h-full bg-transparent focus:outline-none"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
