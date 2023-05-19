import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyCars = () => {
    const { user } = useContext(AuthContext)
    const [mycar, setMyCar] = useState([])
    const { carName, userName, category, description, image, postedBy, price, quantity, added, _id, location } = mycar;


    useEffect(() => {
        fetch(`http://localhost:5000/myCars/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCar(data)
            })
    }, [user])

    return (
        <div className="overflow-x-auto w-full mt-10">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>#</th>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mycar.map((car, index) => (
                            <tr key={car._id}>
                                <td>{index + 1}</td>
                                <td className="mask mask-squircle w-28 h-28"><img src={car.image} alt="" /></td>
                                <td>{car.carName}</td>
                                <td>{car.category}</td>
                                <td>{car.price}</td>
                                <td>{car.quantity}</td>
                                <td><button className="btn  btn-primary btn-xs">Edit</button></td>
                                <td>
                                    <button className="btn  btn-secondary btn-xs">Delete</button>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyCars;