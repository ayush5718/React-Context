import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/Context";
import Navbar from "../components/Navbar";

function UserDetails() {
  const navigate = useNavigate();
  // react router dom gives us this fetures to get the id by useParamas() hook
  const { id } = useParams();
  const { data, user } = useContext(productContext);

  // filtering the user based on their id's
  const filteredUser = user.filter((item) => item.id == id);

  // function to handle the Go Back button
  const handleNavigate = () => {
    navigate(-1);
  };
  // const

  return (
    <>
      <Navbar />
      <div className="bg-red-400 p-4 text-center text-white mt-10 rounded">
        UserDetails
      </div>
      <hr />
      <div className="bg-red-500 text-white p-4 m-4">
        Name: {filteredUser[0].name.firstname} {filteredUser[0].name.lastname}{" "}
        <hr />
        Email: {filteredUser[0].email}
        <hr />
        Address: {filteredUser[0]?.address?.city}
      </div>

      <button
        onClick={handleNavigate}
        className="px-2 py-1 bg-blue-400 text-white m-4"
      >
        {" "}
        Go back
      </button>
    </>
  );
}

export default UserDetails;
