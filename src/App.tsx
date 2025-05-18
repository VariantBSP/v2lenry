import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="font-inter border-b-4 border-#edeae7 flex flex-row justify-between p-5">
        <h1 className="text-lg font-bold">Lenry Hotels</h1>
        <div className="">
          <a className="pr-5" href="#">
            Home
          </a>
          <a className="pr-5" href="#">
            About
          </a>
          <a className="" href="#">
            Contact
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:px-48 px-5">
        <h1 className="font-semibold md:text-6xl text-3xl text-left p-10 tracking-widest">
          WELCOME TO
          <p className="font-semibold md:pl-20 pl-8 tracking-widest">
            LENRY HOTEL
          </p>
          <p className="font-semibold md:pl-28 pl-10 tracking-widest">
            & SUITES
          </p>
        </h1>
        <div className="flex flex-row items-start md:pl-28 pl-0">
          <span className="md:flex-2 flex-1 justify-start text-left">
            Welcome to our Cozy Haven, your home away from home
          </span>
          <a
            href=""
            className="md:flex-1 flex-2 bg-black rounded-xl ml-8 text-sm text-white px-3 py-1 cursor-pointer"
          >
            Book Now
          </a>
        </div>

        <img
          src="/images/front.jpg"
          alt="Lenry Hotels and Suite"
          className="my-5 w-full"
        />

        <div className="flex flex-col w-full my-5">
          <h1 className="text-4xl text-left mb-5">OUR ROOMS</h1>
          <div className="md:grid md:grid-cols-3 md:gap-2 flex flex-col">
            <div className="col-start-1">
              <img
                src="/images/room1.jpg"
                alt="Lenry Hotel Deluxe Suite"
                className="h-full"
              />
            </div>
            <div className="col-start-2 grid grid-rows-2 gap-2">
              <div className="row-start-1">
                <img
                  src="/images/room2.jpg"
                  alt="Lenry Hotel Royal Suite"
                  className="h-full"
                />
              </div>
              <div className="row-start-2"></div>
            </div>
            <div className="col-start-3 grid grid-rows-2 gap-2">
              <div className="row-start-1 bg-gray-200 flex flex-col justify-around items-center p-3">
                <p className="text-left text-sm">
                  The hotel offers different room categories that are suitable
                  for both business travellers and vacationers.
                </p>
                <a
                  href=""
                  className="bg-black rounded-xl text-sm text-white px-3 py-1 cursor-pointer"
                >
                  Book Now
                </a>
              </div>
              <div className="row-start-2">
                <img
                  src="/images/room1.jpg"
                  alt="Lenry Hotel Ambassidorial Suite"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-2 md:h-screen flex flex-col w-full my-5">
          <div className="bg-gray-200 p-4 flex flex-col justify-between items-center">
            <span className="text-left">
              <h1 className="text-4xl pb-8">RESTAURANT AT THE HOTEL</h1>
              <p>
                Our chefs prepare some of the tastiest and most nutrious meals.
                We invite you to come and enjoy!
              </p>
            </span>
            <a
              href=""
              className="bg-black rounded-xl text-sm text-white px-3 py-1 cursor-pointer"
            >
              Food Options
            </a>
          </div>
          <div className="bg-gray-200">
            <img
              src="/images/dinning.jpg"
              alt="Lenry Hotel Ambassidorial Suite"
              className="h-full"
            />
          </div>
        </div>

        <div className="my-5 w-full">
          <h1 className="text-4xl text-left mb-5">BOOKING</h1>
          <div>
            <form action="" className="flex md:flex-row flex-col justify-between">
              <input type="date"  className="mb-5" />
              <input type="date" className="mb-5" />
              <input type="number" placeholder="Number of Guests" className="mb-5" />
              <button className="bg-black rounded-xl text-sm text-white px-3 py-1 mb-5">
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
