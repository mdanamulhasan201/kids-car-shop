import { Link } from "react-router-dom";

const TabComponent = ({ toy }) => {
    // console.log(toy)
    const { image, carName, price, _id } = toy
    return (
     
            <div className="card w-96 bg-red-700 shadow-2xl ">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{carName}</h2>
                <p>{price}</p>
                <div className="card-actions">
                   <Link to={`/category/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
       
    );
};

export default TabComponent;