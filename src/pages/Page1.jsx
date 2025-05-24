import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[375px] h-[667px] bg-gray-100 border border-gray-300 rounded-md shadow-md flex flex-col justify-end p-6">
        <div className="mb-10">
          <h1 className="text-[25px] font-bold text-gray-700 tracking-wide">
            Welcome to PopX
          </h1>
          <h3 className="text-[17px] text-gray-400 font-semibold mt-2 leading-snug">
            Lorem ipsum dolor, sit amet <br />
            consectetur adipisicing elit.
          </h3>

          <div className="flex flex-col mt-6">
            <button
              onClick={() => navigate('/create-account')}
              className="w-full rounded bg-[#6C25FF] text-white font-bold tracking-wider h-[40px] mb-3"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full rounded bg-[#CEBAFB] text-gray-800 font-bold h-[40px] tracking-wide"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
