import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[375px] h-[667px] bg-gray-100 border border-gray-300 rounded-md shadow-md flex flex-col ">
        <div className="container w-[100%] h-[55%] flex justify-between flex-col ">
          <div className="text">
            <h1 className="text-2xl mt-8 ml-5 font-bold text-gray-800 tracking-wide">
              Signin to your <br />PopX account
            </h1>
            <h3 className="ml-5 mt-3 text-[16px] font-bold text-gray-400">
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </h3>
          </div>
          <form action="#">
            <div>
              <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold">
                Email Address
              </label>
              <input
                type="text"
                className="border-3 pl-3 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3"
                placeholder="Enter email address"
              />
            </div>
            <div className="mt-2">
              <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold">
                Password
              </label>
              <input
                type="text"
                className="border-3 pl-3 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3"
                placeholder="Enter password"
              />
            </div>
            <div className="mt-2">
              <button
                type="button" // <--- Added this line
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="border-3 pl-3 border-none text-white text-[18px] font-bold bg-[#6C25FB] rounded py-3 mt-3 w-88 ml-3"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page2;
