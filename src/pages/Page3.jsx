import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-[375px] h-[667px] bg-gray-100 border border-gray-300 rounded-md shadow-md flex flex-col ">
          <div className="container w-[100%] h-[55%] flex justify-between flex-col ">
            <div className="text">
              <h1 className="text-2xl mt-8 ml-5 font-bold text-gray-800 tracking-wide  ">
                Create your <br />
                PopX account
              </h1>
            </div>
            <form onSubmit={handleSubmit} className=" mb-33">
              <div className="mt-4">
                <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold  ">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  className="border-3 pl-4 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3 "
                  placeholder="Marry Doe"
                />
              </div>
              <div className="mt-4">
                <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold ">
                  Phone number
                </label>
                <input
                  type="text"
                  required
                  className="border-3 pl-4 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3 "
                  placeholder="Marry Doe"
                />
              </div>
              <div className="mt-4">
                <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold ">
                  Email Address
                </label>
                <input
                  type="text"
                  required
                  className="border-3 pl-4 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3 "
                  placeholder="Marry Doe"
                />
              </div>
              <div className="mt-4">
                <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold ">
                  Password
                </label>
                <input
                  type="text"
                  required
                  className="border-3 pl-4 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3 "
                  placeholder="Marry Doe"
                />
              </div>
              <div className="mt-4">
                <label className="absolute ml-6 bg-gray-100 px-2 text-[#6C25FF] font-semibold ">
                  Company name
                </label>
                <input
                  type="text"
                  required
                  className="border-3 pl-4 font-semibold border-gray-300 rounded py-2 mt-3 w-88 ml-3 "
                  placeholder="Marry Doe"
                />
              </div>
              <div>
                <div className="all px-3 mt-4">
                  <div className="text ">
                    <h1 className=" font-semibold text-gray-700 ">
                      Are you an Agency?
                    </h1>
                  </div>
                  <div className="flex flex-row space-x-6 mt-2  ">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        required
                        name="accountType"
                        value="yes"
                        className="w-4 h-4 text-purple-600 accent-purple-600"
                      />
                      <label className="text-gray-700">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        required
                        name="accountType"
                        value="no"
                        className="w-4 h-4 text-purple-600 accent-purple-600"
                      />
                      <label className="text-gray-700">No</label>
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <button
                      type="submit"
                      className="w-full rounded bg-[#6C25FF] text-white font-bold tracking-wider h-[40px] mt-12"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;

