import { useEffect, useState } from "react";
import Cars from "./Cars";
// import { useLoaderData } from "react-router-dom";


const AllToys = () => {

    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('')
   



    useEffect(() => {
        fetch('http://localhost:5000/allCar')
            .then(res => res.json())
            .then(result => {
                (result)
                setCars(result.slice(0, 20))
            })
    }, [])

    const handleSearch = () => {

        fetch(`http://localhost:5000/carSearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })

    }

    return (
        <div className="">
            <h3 className="font-bold text-center text-3xl my-10"> All <span className="text-primary"> Cars</span> </h3>
            <div className="form-control text-center mb-10">
                <div className="input-group justify-center">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-primary btn-square ">
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