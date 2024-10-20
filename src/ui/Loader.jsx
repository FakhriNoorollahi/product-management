import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader({ color }) {
  return (
    <div className="loader">
      <ThreeDots
        visible={true}
        height="70"
        width="70"
        color={color || "#ffffff"}
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}

export default Loader;
