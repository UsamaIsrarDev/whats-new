import { memo } from "react";

const user = {
  name: "Usama Israr Khan",
  imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imgSize: 90,
};

const Profile = () => {
  return (
    <div className="Profile">
      <h1>{user.name}</h1>

      <img
        src={user.imgUrl}
        alt={"Profile of " + user.name}
        className="rounded-full"
        style={{
          width: user.imgSize,
          height: user.imgSize,
        }}
      />
    </div>
  );
};

export default memo(Profile);
