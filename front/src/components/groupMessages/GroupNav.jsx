import { IoArrowBackOutline } from "react-icons/io5";
import UpdateGroupForm from "../sidebar/groups/UpdateGroupForm";
import useGroup from "../../zustand/useGroup";

import GroupInfo from "./GroupInfo";
import useGroupInfo from "../../zustand/useGroupInfo";

function GroupNav() {
  const { selectedGroup, setSelectedGroup } = useGroup();

  const { showGroupInfo, setShowGroupInfo } = useGroupInfo();

  const heandleHide = () => {
    setSelectedGroup(null);
  };

  const handelShowGroupInfo = () => {
    setShowGroupInfo(true);
  };

  const members = selectedGroup?.participants;

  let shownMembers = 0;
  const memberPics = [];

  for (let i = 0; i < 4; i++) {
    const member = members[i];
    shownMembers++;
    if (shownMembers <= members.length) {
      memberPics.push(
        <div key={member._id} className="avatar border-0">
          <div className="w-9">
            <img src={member.profilePic} alt="" />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex items-center">
      <div className="ml-5">
        <IoArrowBackOutline
          className="cursor-pointer h-full w-full hover:text-blue-500 text-xl"
          onClick={() => heandleHide()}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center px-4 py-2 mb-2 m-auto md:m-0">
        <img
          className="h-14 w-14 rounded-full cursor-pointer hover:border-4 border-slate-500 transition-all duration-200 ease-in-out"
          src={selectedGroup.image}
          alt=""
          onClick={() => handelShowGroupInfo()}
        />
        <p className="text-gray-900 ml-5 md:mr-10 text-sm my-2 font-bold pr-6 md:pr-0 ">
          {selectedGroup.name}
        </p>
        <div className="avatar-group  -space-x-3 rtl:space-x-reverse w-full">
          {memberPics}
          {memberPics.length < 4 ? (
            ""
          ) : (
            <div className="avatar placeholder border-0">
              <div className="w-9 bg-white cursor-default transition-all duration-200 bg-opacity-100 text-black">
                <span>+{members.length - shownMembers}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="md:right-0">
        <UpdateGroupForm />
      </div>
      <div className="md:right-0">{showGroupInfo ? <GroupInfo /> : ""}</div>
    </div>
  );
}

export default GroupNav;
