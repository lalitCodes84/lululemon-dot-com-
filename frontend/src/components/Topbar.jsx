import React from "react";

function Topbar() {
  return (
    <div>
      <p className="text-[13px] text-center m-3">
        Get 15% off regular-priced items.{" "}
        <a href="/signup" className="underline font-medium">
          Sign-up
        </a>
      </p>
    </div>
  );
}

export default Topbar;
