"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Transfer from "@/utils/useweb3";
function Giveaway() {
  const [days, setDays]: any = useState();
  const [hours, setHours]: any = useState();
  const [minutes, setMinutes]: any = useState();
  const [seconds, setSeconds]: any = useState();
  const [claim, setClaim]: any = useState(false);
  const [address, setAddress]: any = useState("");
  const [mag, setMsg]: any = useState("");
  const [transactionInProgress, setTransactionInProgress]: any =
    useState(false);
  useEffect(() => {
    // Provide the date string in a format recognized by JavaScript
    const target = new Date("2024-04-30T23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function addLeadingZero(value: any) {
    const nonNegativeValue = Math.max(0, value);

    const paddedValue =
      nonNegativeValue < 10 ? `0${nonNegativeValue}` : nonNegativeValue;

    return paddedValue;
  }

  const handleChange = (e: any) => {
    const add = e.target.value;
    setAddress(add);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (days <= 0 && hours <= 0 && minutes <= 0) {
      return;
    }

    setTransactionInProgress(true);

    const transaction = await Transfer(address);
    setTransactionInProgress(false);

    console.log("====================================");
    console.log(transaction);
    console.log("====================================");

    if (transaction == 1) {
      setMsg("Transaction Successful!");
    } else if (transaction == -1) {
      setMsg("Invalid Address!");
    } else if (transaction == 0) {
      setMsg("Transaction failed!");
    }

    setAddress("");
  };

  return (
    <div>
      <div className="bg-[#080808] h-screen">
        <Header></Header>

        <div className="flex items-center justify-center  mt-10">
          <div className="w-[50vw] bg-white bg-opacity-30 h-80 rounded-xl flex flex-col gap-5 items-center justify-center">
            <p className="text-xl text-slate-50">Giveaway</p>

            <div className="flex gap-4 ">
              <div className="item flex flex-col items-center justify-center border border-white rounded-3xl p-6">
                <p className="text-white">{days}</p>

                <p className="text-xs text-slate-300">Days</p>
              </div>
              <div className="item flex flex-col items-center justify-center border border-white rounded-3xl p-6">
                <p className="text-white">{hours}</p>

                <p className="text-xs text-slate-300">Hours</p>
              </div>
              <div className="item flex flex-col items-center justify-center border border-white rounded-3xl p-6">
                <p className="text-white">{minutes}</p>

                <p className="text-xs text-slate-300">Minutes</p>
              </div>
              <div className="item flex flex-col items-center justify-center border border-white rounded-3xl p-6">
                <p className="text-white">{seconds}</p>

                <p className="text-xs text-slate-300">Seconds</p>
              </div>
            </div>

            <form className="w-2/3 flex  gap-3" onSubmit={handleSubmit}>
              <div className="flex-1">
                <label className="block mb-2 text-white text-sm font-medium ">
                  Address
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Address"
                  required
                  onChange={handleChange}
                  value={address}
                />
              </div>
              <button
                type="submit"
                className="text-white h-11 self-end bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Claim
              </button>
            </form>

            {transactionInProgress && (
              <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

            <p>{mag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Giveaway;
