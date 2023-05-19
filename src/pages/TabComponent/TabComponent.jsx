
const TabComponent = ({ toy }) => {
    // console.log(toy)
    const { image, carName, price } = toy
    return (
     
            <div className="card w-96 bg-red-700 shadow-2xl ">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{carName}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
       
    );
};

export default TabComponent;