import "./SearchBar.css";

const Messages = () => {
  return (
    <>
      <div className="hidden sm:block m-5 bg-myGray outShadowSidebar rounded-2xl py-5 sm:w-full">
        <div className="text-white flex items-center justify-around max-w-xs m-auto">
          <span className="picShadow rounded-full w-7">{"<-"}</span>
          <div className="flex flex-col items-center">
            <div className="rounded-xl h-20 w-20 picShadow bg-[url('https://img.freepik.com/free-photo/beauty-fashion-portrait-young-blond-woman-model-with-natural-makeup-perfect-skin-posing-touching-her-face_158538-8756.jpg')] bg-cover bg-center"></div>
            <p>Sarah Sanders</p>
          </div>
          <div className="picShadow rounded-full w-7 text-center">
            <span>O</span>
          </div>
        </div>
        <div className="p-10 text-white text-sm m-auto ">
          <div className="my-4 w-full ">
            <p className="picShadow rounded-3xl p-2 rounded-tl max-w-sm">
              Hello, Can you come as soon as possible?
            </p>
          </div>
          <div className="flex  justify-end my-2">
            <p className="picShadow  max-w-sm rounded-3xl rounded-tr p-2 bg-green-700">
              Hi, I will meet you in few seconds
            </p>
          </div>
          <div className="flex justify-end my-2 ml-20">
            <p className="picShadow  rounded-3xl rounded-tr p-2 bg-green-700 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              expedita dolorem
            </p>
          </div>
          <div className="my-4">
            <p className="picShadow  rounded-3xl p-2 rounded-tl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              expedita dolorem
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
