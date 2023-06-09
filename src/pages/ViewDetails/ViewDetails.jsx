import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData()

    const { carName, userName, quantity, description, image, location, postedBy, price } = details

    console.log(details)

    return (

        <div>
            <h2 className="text-3xl font-bold mt-5 text-center">Car <span className="text-primary">Details</span></h2>
            <div className="px-5  flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="max-w-lg py-10">
                        <div className="bg-slate-100 relative shadow-lg hover:shadow-2xl">
                            <img className="rounded-t-lg w-[900px] " src={image} alt="" />
                            <div className="py-6 px-8 rounded-lg bg-slate-100">
                                <h1 className="text-gray-700  font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Car Name: <span className="text-primary">{carName}</span></h1>
                                <hr />
                                <p className="text-gray-700 tracking-wide hover:text-gray-900 hover:cursor-pointer"> {description}</p>
                                <hr />
                                <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer"> <span className="font-bold">Seller Name:</span> {userName}</h1>
                                <hr />
                                <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer"> <span className="font-bold">Seller Email: </span> {postedBy} </h1>
                                <hr />
                                <p className="text-gray-700 tracking-wide  hover:text-gray-900 hover:cursor-pointer"><span className="font-bold">Price:</span> {price}</p>
                                <hr />
                                <p className="text-gray-700 tracking-wide  hover:text-gray-900 hover:cursor-pointer"><span className="font-bold">Available: </span>{quantity}</p>
                                <hr />
                                <p className="text-gray-700 tracking-wide  hover:text-gray-900 hover:cursor-pointer"><span className="font-bold">Location: </span>{location}</p>
                                <hr />

                                {/* <Link to='/allToy' className=""><button className="btn">back</button></Link> */}
                                <button className="btn btn-primary btn-block mt-5 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"> <span className='mr-2'>Buy Now</span> <FaArrowRight> </FaArrowRight> </button>

                            </div>
                            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                                <span className="text-md btn btn-primary btn-xs">25%off</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;