import React, { useContext } from "react";
import UserCard from "../components/UserCard";
import Navbar from "../components/Navbar";
import { productContext } from "../context/Context";

function UserPage() {
  const { data, user } = useContext(productContext);
  console.log(user);
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap  justify-center">
        usercard
        {user.map((item, index) => {
          return <UserCard key={index} user={item} />;
        })}
      </div>
    </div>
  );
}

export default UserPage;
