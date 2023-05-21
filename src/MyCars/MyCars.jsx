import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const MyCars = () => {
    const { user } = useContext(AuthContext)
 
    const [mycar, setMyCar] = useState([])

    const [resets, SetRest] = useState(mycar)




    useEffect(() => {
        fetch(`http://localhost:5000/myCars/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCar(data)
            })
    }, [user])

    // delete 
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/deleteCar/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            const remaining = resets.filter(reset => reset._id !== id);
                            SetRest(remaining)


                        }

                    })

            }
        })

    }


    return (
        <div className="overflow-x-auto w-full mt-10">
            <h2 className="text-center font-bold my-5 text-3xl">My <span className="text-primary">Cars</span></h2>
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
                                <td>

                            <Link to={`/updateCar/${car._id}`}><button className="btn  btn-primary btn-xs"> <span className='mr-1'>Edit </span> <FaArrowRight> </FaArrowRight> </button></Link>


                                </td>
                                <td>
                                    {" "}
                                    <button onClick={() => handleDelete(car._id)} className="btn  btn-secondary btn-xs"><span className='mr-1'>Delete </span> <FaArrowRight> </FaArrowRight></button>

                                </td>


                            </tr>
                        ))

                    }

                </tbody>

            </table>


        </div >
    );
};

export default MyCars;