import { IoArrowBackOutline } from "react-icons/io5";
import UpdateGroupForm from "../sidebar/groups/UpdateGroupForm";
import useGroup from "../../zustand/useGroup";
function GroupNav() {
  const { selectedGroup, setSelectedGroup } = useGroup();

  const heandleHide = () => {
    setSelectedGroup(null);
  };

  const members = selectedGroup?.participants;
  let shownMembers = 0;
  const memberElements = [];

  for (let i = 0; i < 4; i++) {
    const member = members[i];
    shownMembers++;
    if (shownMembers <= members.length) {
      memberElements.push(
        <div key={member._id} className="avatar border-0">
          <div className="w-10">
            <img src={member.profilePic} alt="" />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex  items-center">
      <div className="p-5">
        <IoArrowBackOutline
          className="cursor-pointer h-full w-full hover:text-blue-500 text-xl"
          onClick={() => heandleHide()}
        />
      </div>
      <div className="flex flex-col items-center  px-4 py-2 mb-2 m-auto">
        <img
          className="h-12 w-12 rounded-full"
          src={selectedGroup.image}
          alt=""
        />
        <span className="text-gray-900 font-bold">{selectedGroup.name}</span>
        <div className="avatar-group -space-x-3 rtl:space-x-reverse w-full">
          {memberElements}
          {memberElements.length < 4 ? (
            ""
          ) : (
            <div className="avatar placeholder   border-1">
              <div className="w-8 bg-neutral text-neutral-content cursor-pointer hover:bg-green-300 transition-all duration-200">
                <span className="">+{members.length - shownMembers}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <UpdateGroupForm />
      </div>
    </div>
  );
}

export default GroupNav;
