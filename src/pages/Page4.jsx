const Page4 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[375px] h-[667px] bg-gray-100 border border-gray-300 rounded-md shadow-md flex flex-col">
        <div className="bg-white">
          <h1 className="px-3 py-6 border-none text-[18px] font-semibold text-gray-700">
          Account Settings
        </h1>
        </div>

        {/* Profile image and icon */}
        <div className="mx-3 mt-6 flex items-center ">
          <img src="/img1.jpg" className="w-16 h-16 rounded-full" alt="Profile" />

          <div className="bg-[#6C25FF] w-5 h-5 absolute ml-13 mt-6 rounded-full flex items-center justify-center cursor-pointer">
            <i className="ri-camera-line text-white text-sm"></i>
          </div>
        </div>
         
         <div className="absolute mt-25 ml-25  " >
             <h1 className="font-bold text-gray-800 " >Marry Doe</h1>
             <h2 className="text-[14px] font-semibold text-gray-500 " >Marry@Gmail.Com</h2>
         </div>
        {/* Text content */}
        <div className="px-3 border-b-2 border-dotted border-gray-300 py-5 text-sm text-gray-600">
          <p className="font-semibold pl-2 " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis suscipit
            dolores voluptatum temporibus itaque quia quod eligendi voluptas cupiditate. Quis,
            aliquid corrupti?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;

