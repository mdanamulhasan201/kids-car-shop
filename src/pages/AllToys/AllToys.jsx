import { useEffect, useState } from "react";
import Cars from "./Cars";


const AllToys = () => {

    const [cars, setCars] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allCar')
            .then(res => res.json())
            .then(result => {
                setCars(result)
            })
    }, [])

    return (
        <div>
            <h3 className="font-bold text-center text-3xl my-10"> All Toys </h3>
            {
                cars.map((car) => ( 
                <Cars car={car} key={car._id}>
                
                </Cars>
                
                ))
            }
        </div>
    );
};

export default AllToys;