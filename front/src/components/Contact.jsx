import { useState } from "react";
import "./SearchBar.css";

const Contact = () => {
  const [shadow, setShadow] = useState("outShadow");
  const handleOnClick = () => {
    setShadow("inShadoww");
  };
  return (
    <>
      <div
        className={`flex items-center justify-between mt-4 ${shadow} rounded-md p-2 m-3 cursor-pointer `}
        onClick={() => handleOnClick()}
      >
        <div className="flex items-center">
          <div className="rounded-full h-14 w-14 picShadow bg-[url('https://images.healthshots.com/healthshots/en/uploads/2022/05/20141914/face-fat.jpg')] bg-cover bg-center"></div>
          <div className="text-white ml-4">
            <p>Sarah Diaz</p>
            <p className="text-xs overflow-hidden w-36 h-4">
              Can you call me back?
            </p>
          </div>
        </div>
        <div className="text-xs text-red-400">
          <p>13:54</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
