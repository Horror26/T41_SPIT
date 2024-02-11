import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [type, setType] = useState(true);
  const [address, setAddress] = useState("");
  const [landsize, setLandsize] = useState(0);
  const [location, setLocation] = useState("");
  const [assests, setAssests] = useState(0);
  const [phone, setPhone] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const { email, name } = await JSON.parse(localStorage.getItem("id"));
      if (type) {
        await axios.post(
          "http://localhost:8000/api/farmer/add",
          {
            email,
            name,
            address,
            landsize,
            location,
            assests,
            phone,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate("/");
      } else {
        await axios.post(
          "http://localhost:8000/api/lender/add",
          {
            email,
            name,
            min,
            max,
            phone,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-green-500 to-green-300 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Crop Capital
          </h1>
          <p className="text-white mt-1">
            Empowering Farmers, One Loan at a Time
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        {type ? (
          <>
            <form className="bg-white">
              <h1 className="text-gray-800 font-semibold text-2xl mb-5">
                Welcome!
              </h1>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  viewBox="0 0 100 100"
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"></path>
                  </g>
                </svg>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 100 100"
                >
                  <rect x="0" y="0" width="100" height="100" fill="#e0e0e0" />
                  <rect x="10" y="10" width="80" height="80" fill="#000" />
                </svg>
                <input
                  value={landsize}
                  onChange={(e) => setLandsize(e.target.value)}
                  className="pl-2 outline-none border-none"
                  type="number"
                  name="landsize"
                  id="landsize"
                  placeholder="Landsize"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-600"
                >
                  <path
                    fill="#000000"
                    d="M12 2c-4.418 0-8 3.582-8 8s8 14 8 14 8-10 8-14-3.582-8-8-8zm0 11.5c-.688 0-1.25-.562-1.25-1.25s.562-1.25 1.25-1.25 1.25.562 1.25 1.25-.562 1.25-1.25 1.25zm0-6c-.688 0-1.25-.562-1.25-1.25s.562-1.25 1.25-1.25 1.25.562 1.25 1.25-.562 1.25-1.25 1.25z"
                  />
                </svg>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  className=" w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex items-center border-2 mt-4 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
                <input
                  value={assests}
                  onChange={(e) => setAssests(e.target.value)}
                  className="pl-2 outline-none border-none"
                  type="number"
                  name="assest"
                  id="assest"
                  placeholder="Assest"
                />
              </div>
              <button
                onClick={register}
                className="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Register
              </button>
              <button
                onClick={() => setType(false)}
                className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
              >
                Register as lender
              </button>
            </form>
          </>
        ) : (
          <>
            <form className="bg-white">
              <h1 className="text-gray-800 font-semibold text-2xl mb-5">
                Welcome!
              </h1>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  className=" w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex items-center mt-4 gap-5">
                <input
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  className="pl-2 outline-none border-2 py-2 px-3 rounded-2xl"
                  type="number"
                  name="min"
                  id="min"
                  placeholder="Min Amount"
                />
                <input
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                  className="pl-2 outline-none border-2 py-2 px-3 rounded-2xl"
                  type="number"
                  name="max"
                  id="max"
                  placeholder="Max Amount"
                />
              </div>
              <button
                onClick={register}
                className="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Register
              </button>
              <button
                onClick={() => setType(true)}
                className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
              >
                Register as farmer
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;