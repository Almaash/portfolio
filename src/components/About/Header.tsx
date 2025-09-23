
const Header = () => {
  return (
    <div className="bg-[#F1F1F1] border border-b border-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start p-10">
        {/* Left side */}
        <h1 className="text-6xl max-sm:text-8xl md:text-9xl font-extrabold tracking-tighter uppercase font-mono pb-10 pt-10 md:pt-33 text-black/85">
          About
        </h1>

        {/* Right side */}
        <div className="flex flex-col md:items-end pt-5 md:pt-36 space-y-2">
          {/* <h1 className="text-sm md:text-xs">(t3)</h1> */}
          {/* <SpinningTextCustomTransition /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
