import "../App.css";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../config/fbConfig";
import { useState } from "react";


function Home() {
  const arrival = "";
  const depature = "";
  const guestNo = 0;

  const guestDetail = { AD: arrival, DD: depature, GN: guestNo };

  const guestCollectionRef = collection(db, "guestDetail");

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }


  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "guestNo":
        guestDetail.GN = e.target.valueAsNumber;
        // guestDetail.GN = isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber;
        break;
      case "arrival":
        guestDetail.AD = e.target.value;
        break;
      case "depature":
        guestDetail.DD = e.target.value;
        break;
      default:
        console.log("error");
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(guestDetail);
    await addDoc(guestCollectionRef, guestDetail);
  };

  return (
    <div className="App">
      <div className="font-inter border-b-4 border-#edeae7 flex flex-row justify-between items-center p-5">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Lenry Hotels Logo" className="w-10 h-8" />
          <h1 className="text-lg font-bold">Lenry Hotels</h1>
        </div>

        <div className="w-10 md:hidden inline" onClick={toggleNav}>
          {navOpen ? <img src="/images/close.svg" alt="navIconClose" /> : <img src="/images/burger-menu.svg" alt="navIcon" />}
          <ul className={`h-50 w-40 bg-white ${navOpen ? "absolute" : "hidden"} top-14 right-6 rounded-xl`}>
            <li className="p-3 border-b-2">
            <a className="" href="#">
            Home
          </a>
          </li>

          <li className="p-3 border-b-2">
          <a className="" href="#AboutUs">
            About
          </a>
          </li>

          <li className="p-3 border-b-2">
          <a className="" href="#">
            Contact
          </a>
          </li>
          </ul>
        </div>
        <div className="hidden md:inline">
          <a className="pr-5" href="#">
            Home
          </a>
          <a className="pr-5" href="#AboutUs">
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
            href="#booking"
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
          <h1 className="md:text-4xl text-3xl text-left mb-5">OUR ROOMS</h1>
          <div className="md:grid md:grid-cols-3 md:gap-2 flex flex-col gap-2">
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
              <div className="row-start-2">
                <img
                  src="/images/room6.jpg"
                  alt="Lenry Hotel Royal Suite"
                  className="h-full"
                />
              </div>
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
                  src="/images/room4.jpg"
                  alt="Lenry Hotel Ambassidorial Suite"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 w-full" id="booking">
          <h1 className="md:text-4xl text-3xl text-left mb-5">BOOKING</h1>
          <form
            action=""
            className="flex md:flex-row flex-col justify-between items-center w-full"
          >
            <div className="w-full mb-5 flex items-start flex-col">
            <label htmlFor="arrival" className="font-bold">Arrival Date</label>
            <input
              type="date"
              onChange={handleChange}
              name="arrival"
              className="cursor:pointer p-3 w-full"
            />
            </div>

            <div className="w-full mb-5 flex items-start flex-col">
            <label htmlFor="depature" className="font-bold">Depature Date</label>
            <input
              type="date"
              onChange={handleChange}
              name="depature"
              className="cursor:pointer p-3 w-full"
            />
            </div>

            <div className="w-full mb-5 flex items-start flex-col">
            <label htmlFor="guestNo" className="font-bold">Number of Guests</label>
            <input
              type="number"
              onChange={handleChange}
              name="guestNo"
              className="cursor:pointer p-3 w-full"
            />
            </div>

            <button
              className="bg-black rounded-xl text-sm text-white  p-3 w-full mb-5"
              type="submit"
              onClick={handleSubmit}
            >
              Apply
            </button>
          </form>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-2 md:h-screen flex flex-col w-full my-5">
          <div className="bg-gray-200 p-4 flex flex-col justify-between items-center">
            <span className="text-left">
              <h1 className="md:text-4xl text-3xl pb-8" id="AboutUs">About Us</h1>
              <div>
                <p><span>Lenry Hotels &#38; Suites</span> provides a comfortable hotel experience and it's all about the right mix! Located at an acceptable distance from the Express road, very accessible to all travellers and shielded from the hustle and bustle of Kabba central, we offer our corporate clients and walk in guests a perfect blend of relaxation, comfort, and alot of traditional delicacies.</p>

                <p>Located in a remote and safe environment, it is just a 10-minute drive to the City Centre and only 5-minutes away from Obajana road.</p>

                <p>Our hotel is designed for your comfort and convenience. Your security is our primary concern and you'll find our customer care second to none.</p>

                <p>Our hotel has taken important steps to live up to Kogi's future model in the hospitality sector.

                  We are passionate about serving you and look forward to having you.</p>

                <p>Welcome to Lenry Hotels &#38; Suites, serving you with a touch of class.</p>
              </div>
            </span>

          </div>
          <div className="bg-gray-200">
            <img
              src="/images/dinning.jpg"
              alt="Lenry Hotel Ambassidorial Suite"
              className="h-full"
            />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
