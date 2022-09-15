import React from "react";
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="transition ease-in-out delay-150 top-0 left-0 fixed justify-center items-center flex h-screen w-screen">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default Loading;
