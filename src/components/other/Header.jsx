import React, { useState, useEffect } from "react";

const Header = ({ data, handleLogout }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (data) {
      setUsername(data.firstname);
    } else {
      setUsername("Admin");
    }
  }, [data]);

  return (
    <div className='flex items-center justify-between text-xl p-6 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'>
      <div>
        <h1 className='font-bold text-3xl mt-1'>Hello, {username}</h1>
        <h1 className='font-bold text-3xl mt-1'>Welcome back!</h1>
      </div>
      <button onClick={handleLogout} className='bg-white text-red-600 px-6 py-2 text-lg font-semibold rounded-full hover:bg-red-100 transition duration-300 ease-in-out shadow-md'>
        Logout
      </button>
    </div>
  );
};

export default Header;
