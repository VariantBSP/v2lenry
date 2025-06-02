import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../config/fbConfig";

interface guestDetail  {
    AD: string;
    DD: string;
    GN: number | string;
}

const ListPage = () => {
      const [guestDetails, setGuestDetails] = useState<{}[]>();
    
      const guestCollectionRef = collection(db, "guestDetail");
    
      const getDetails = async () => {
        const data = await getDocs(guestCollectionRef);
        const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setGuestDetails(newData);
      };
    
      useEffect(() => {
        getDetails();
      });

      const page = (<ul>
            {guestDetails?.map((guest) => {
                let guestD : guestDetail | any = guest;
                return (
                    <li key={guestD.id}>
                        <span className="font-bold"> Arrival: </span> {guestD.AD}  
                        <span className="font-bold">| Depature: </span> {guestD.DD} 
                        <span className="font-bold">| No. of Guests: </span> {guestD.GN}
                    </li>
                );
            })}
        </ul>)

      const loading = (
        <h1 className="md:text-4xl text-3xl font-bold">
            Loading...
        </h1>
      )
    

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        {guestDetails ? page : loading}
    </div>
    );
};

export default ListPage;