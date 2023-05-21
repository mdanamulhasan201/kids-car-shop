import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Cars = ({ car }) => {
    const { carName, userName, category, description, image, postedBy, price, quantity, added, _id, location } = car;
    // console.log(_id)

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Image</th>

                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-28 h-28">
                                        <img src={image} />
                                    </div>
                                </div>
                                <div className="md:w-20">
                                    <div className="text-sm font-bold">Sell by: {userName}</div>
                                    <div className="text-sm opacity-50">Location: {location}</div>
                                    <div className="text-sm opacity-50">{added}</div>
                                </div>
                            </div>
                        </td>
                        <td >
                            {carName}
                            <br />
                            <span className="badge badge-ghost badge-sm">Made By Bangladesh</span>
                        </td>

                        <td>{category}</td>



                        <td className="">{price}</td>


                        <td className="">{quantity} </td>
                        <th>
                            <Link to={`/viewDetails/${_id}`}> <button className="btn  btn-primary btn-xs"> <span className='mr-1'>View Details</span> <FaArrowRight> </FaArrowRight> </button></Link>

                        </th>
                    </tr>

                </tbody>

            </table>
        </div>
    );
};

export default Cars;