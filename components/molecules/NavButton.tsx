import React from "react";

function NavButton({
  title = "Get the app",
  href
}: {
  title: string;
  href?: string;
}) {
  return (
    <div className="px-6 py-3 bg-blue-600 rounded justify-center items-center gap-2 flex">
      <div className="text-white text-xl font-semibold whitespace-nowrap">
        {title}
      </div>
    </div>
  );
}

export default NavButton;
