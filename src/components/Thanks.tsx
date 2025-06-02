import { Link } from "react-router-dom";

const Thanks = () => {
    return ( 
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="md:text-4xl text-3xl font-bold mb-5">Thank You for Choosing Us</h2>
            <p className="mb-5">We Will Contact You Soon</p>
            <p>
            <Link to='/' className="p-2 bg-black rounded-xl text-white" >Click Here</Link> to go back home
            </p>
        </div>
     );
}
 
export default Thanks;