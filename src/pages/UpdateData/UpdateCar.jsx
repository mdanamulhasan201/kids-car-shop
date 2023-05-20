import { useLoaderData } from "react-router-dom";

const UpdateCar = () => {
    const result = useLoaderData()
    console.log(result)
    return (
        <div>
            <h3>This is update </h3>
        </div>
    );
};

export default UpdateCar;