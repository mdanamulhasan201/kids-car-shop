import { useEffect, useState } from "react";
import Cars from "./Cars";


const AllToys = () => {

    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('')



    useEffect(() => {
        fetch('http://localhost:5000/allCar')
            .then(res => res.json())
            .then(result => {
                setCars(result)
            })
    }, [])

    return (
        <div>
            <h3 className="font-bold text-center text-3xl my-10"> All Cars </h3>
            <div className="form-control text-center mb-10">
                <div className="input-group justify-center">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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