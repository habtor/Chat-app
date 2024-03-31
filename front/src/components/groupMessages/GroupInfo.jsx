import useGroup from "../../zustand/useGroup";
import { IoArrowBackOutline } from "react-icons/io5";
import useGroupInfo from "../../zustand/useGroupInfo";

function GroupInfo() {
  const { selectedGroup } = useGroup();
  const { setShowGroupInfo } = useGroupInfo();

  return (
    <div
      className={`flex flex-col items-center justify-center absolute xl:relative left-0 top-0 z-10 w-full h-full  `}
    >
      <div className="w-full p-6 rounded-2xl sm:rounded-tl-none sm:rounded-bl-none shadow-md bg-gray-400 xl:bg-white bg-clip-padding backdrop-filter text-slate-100 backdrop-blur-lg bg-opacity-90 h-full xl:bg-opacity-50">
        <div className="text-black">
          <div className="absolute top-16">
            <IoArrowBackOutline
              className="cursor-pointer h-6 w-6 hover:text-blue-500 text-xl xl:hidden"
              onClick={() => setShowGroupInfo(false)}
            />
          </div>
          <div
            className={`flex items-center rounded-full h-24 w-24 bg-cover bg-center m-auto`}
            style={{ backgroundImage: `url(${selectedGroup?.image})` }}
          ></div>
          <p className="text-c text-center max-w-72 m-auto my-5 font-bold">
            {selectedGroup?.name}
          </p>
          <p className="text-c text-center max-w-72 m-auto my-5">
            {selectedGroup?.description}
          </p>
        </div>
        <div className="divider bg-slate-500 mb-3 py-0 h-[2px] rounded-full opacity-40" />
        <div>
          <h1 className="text-xl text-slate-800 font-medium mb-2">Members</h1>
          {selectedGroup?.participants.map((participant) => (
            <div
              key={participant._id}
              className="flex items-center my-3 justify-between "
            >
              <div className="flex items-center">
                <img
                  src={participant.profilePic}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-3 text-sm font-semibold text-slate-800">
                  {participant.firstname} {participant.lastname}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupInfo;
