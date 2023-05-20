import { Link } from "react-router-dom";

const TabComponent = ({ toy }) => {
    // console.log(toy)
    const { carName,  quantity,  image, location,  price, _id } = toy
    return (



        <div>
         
            <div className="px-5  flex justify-center items-center">
                <div className="container flex  justify-center">
                    <div className="max-w-sm  py-10">
                        <div className="bg-slate-100  relative shadow-lg hover:shadow-2xl">
                            <img className="rounded-t-lg w-[900px] h-80 " src={image} alt="" />
                            <div className="py-6 px-8 rounded-lg bg-slate-100">
                                <h1 className="text-gray-700  font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Car Name: <span className="text-primary">{carName}</span></h1>
                                <p className="text-gray-700 tracking-wide  hover:text-gray-900 hover:cursor-pointer"><span className="font-bold">Price:</span> {price}</p>

                                <p className="text-gray-700 tracking-wide  hover:text-gray-900 hover:cursor-pointer"><span className="font-bold">Available: </span>{quantity}</p>

                                <p className="text-gray-700 tracking-wide  hover:text-gray-900 hover:cursor-pointer"><span className="font-bold">Location: </span>{location}</p>
                                <Link to={`/category/${_id}`}>
                                    <button className="btn btn-primary btn-block mt-5 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">View Details</button>

                                </Link>
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

export default TabComponent;