import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
// import UpdateData from "../pages/UpdateData/UpdateData";
import Swal from "sweetalert2";
import UpdateData from "../pages/UpdateData/UpdateData";



const MyCars = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [mycar, setMyCar] = useState([])
    // const { _id } = mycar
    const [resets, SetRest] = useState(mycar)

    // const result = useLoaderData()
    // console.log(result )




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



    const handleUpdateCar = (data) => {
        fetch(`http://localhost:5000/updateCar/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="overflow-x-auto w-full mt-10">
            <h2 className="text-center font-bold my-5 text-3xl">My <span className="text-[#570DF8]">Cars</span></h2>
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

                                    {/* <Link to={`updateCar/${car._id}`}><button className="btn  btn-primary btn-xs">Edit</button></Link> */}
                                    <label htmlFor="my-modal-5" className="btn btn-primary btn-xs">Edit</label>
                                    <UpdateData
                                        key={car._id}
                                        car={car}
                                        handleUpdateCar={handleUpdateCar}
                                    ></UpdateData>


                                </td>
                                <td>
                                    {" "}
                                    <button onClick={() => handleDelete(car._id)} className="btn  btn-secondary btn-xs">Delete</button>

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