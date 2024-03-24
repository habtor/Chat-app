import useGetGroups from "../../../hooks/useGetGroups";
import Group from "./Group";

const Conversations = () => {
  const { loading, groups } = useGetGroups();

  return (
    <div className="py-2 pr-2 flex flex-col overflow-auto">
      {groups.map((group, idx) => (
        <Group
          key={group._id}
          group={group}
          lastIdx={idx === groups.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
