import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <ThreeDots
        visible={true}
        height="70"
        width="70"
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperClass=""
        wrapperStyle={{}}
      />
    </div>
  );
}

export default Loader;
