import "./SearchBar.css";

const Profile = () => {
  return (
    <>
      <div className="text-white font-bold text-2xl flex items-center justify-center  m-5">
        <div className="rounded-full h-20 w-20 picShadow bg-[url('https://www.spring.org.uk/images/wide-face.jpg')] bg-cover bg-center"></div>
        <div className="ml-5">Chats</div>
      </div>
      <div className="h-px w-10/12 bg-gray-600 m-auto mb-5"></div>
    </>
  );
};

export default Profile;
