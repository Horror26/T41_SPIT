import "./transaction.css";
import logo from "../assets/logof.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Transaction = () => {
  const [data, setData] = useState({
    amount: "",
    payee: "",
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    return setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(localStorage.getItem("id"));
      console.log(data)
      await axios
        .put(`http://localhost:8000/api/transactions/createTransactions`, {
          headers: {
            Accept: "application/json",
          },
          body: {
            id: data._id,
            ...data,
          },
        })
        .then(() => navigate("../dashboard"))
        .catch((error) => {
          throw Error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="transaction-form">
      <form
        onSubmit={handlesubmit}
        className="border-gray-400 border py-10 px-5 rounded-lg"
      >
        <img src={logo} alt="logo" />
        <h1>
          Pay with <span>CropCapital</span>
        </h1>
        <div className="relative z-0 w-[60vw] md:w-[20vw] mb-6 group">
          <input
            type="number"
            name="amount"
            onChange={handlechange}
            value={data.amount}
            className="block py-2.5 px-0 w-full  text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
            placeholder=" "
            required
          />
          <label
            for="amount"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 dark:text-black -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ₹ Amount
          </label>
        </div>
        <div className="relative z-0 w-[60vw]  md:w-[20vw] mb-6 group">
          <input
            type="text"
            name="payee"
            value={data.payee}
            onChange={handlechange}
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            for="payee"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Payee
          </label>
        </div>
        <h4 className="payment-warning">Ensure the details are correct</h4>
        <div className="">
          <button
            type="submit"
            className="text-black w-[100%] rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none  focus:ring-purple-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
          >
            pay securely
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
