import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";




const AddToy = () => {

    const { user } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://kids-car-shop-server.vercel.app/postCar', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess('Added Your Car', result)
            })
            .catch((error) => {
                setError('Try agin Later...', error)
            })
        // console.log(data);
    }
    return (
        <div className="flex justify-center  md:my-20">

            <div className="row">
                <h2 className="font-bold text-3xl mb-5 text-center">Add <span className="text-primary">Car</span></h2>
                <div className="bg-slate-100 shadow-lg md:p-28 p-5">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="md:flex">
                            <div className="flex items-center md:mr-14">
                                <p className="font-bold text-xl md:mr-7">Car name:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("carName", { required: true })}
                                    placeholder="Car Name"


                                />
                            </div>

                            <div className="flex items-center">
                                <p className="font-bold text-xl">Toy URL:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("image", { required: true })}
                                    placeholder="Image URL"
                                    type="url"



                                />
                            </div>

                        </div>

                        <div className="md:flex">

                            <div className="flex items-center md:mr-7">
                                <p className="font-bold text-xl">Seller Name:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("userName", { required: true })}
                                    placeholder="UserName"
                                    value={user?.displayName}

                                />
                            </div>



                            <div className="flex items-center">
                                <p className="font-bold text-xl">Seller Email:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    value={user?.email}
                                    readOnly
                                    {...register("postedBy", { required: true })}
                                    placeholder="your email"
                                    type="email"

                                />
                            </div>
                        </div>


                        <div className="md:flex">

                            <div className="flex items-center mr-8">
                                <p className="font-bold text-xl md:mr-16">Price:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    defaultValue={"$"}

                                />
                            </div>



                            <div className="flex items-center">
                                <p className="font-bold text-xl md:mr-7">Quantity:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("quantity", { required: true })}
                                    placeholder="Quantity"
                                    type="number"

                                />

                            </div>

                        </div>


                        <div className="md:flex">
                            <div className="text-center flex items-center">
                                <p className="font-bold text-xl md:mr-7">Location:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 md:mr-24 bg-slate-50"
                                    {...register("location", { required: true })}
                                    placeholder="Location"


                                />
                            </div>



                            <div className="flex items-center ">
                                <p className="font-bold text-xl md:mr-5">Date:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("added", { required: true })}
                                    placeholder="time"
                                    type="date"

                                />
                            </div>

                        </div>


                        <div className="flex items-center md:mr-14 ">
                            <p className="font-bold text-xl md:mr-9">Category:</p>
                            <select className="border-solid md:w-[550px]  border-2 p-4 m-2 bg-slate-50" {...register("category", { required: true })}>
                                <option value="sports Car">Sports Car</option>
                                <option value="Race Car">Race Car</option>
                                <option value="RideOn Truck">Ride On Truck</option>
                                <option value="Toys Truck ">Toys Truck</option>
                                <option value="Land Rover">Land Rover</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Tractor">Tractor</option>


                            </select>

                        </div>

                        <div className="text-center flex items-center">
                            <p className="font-bold text-xl md:mr-14">Details:</p>
                            <input
                                className="border-solid border-2 p-4 m-2 md:h-20 md:w-[550px] bg-slate-50"
                                {...register("description", { required: true })}
                                placeholder="Description"


                            />
                        </div>
                        <input className="btn btn-primary btn-block flex mx-auto mt-10" value="Car Added" type="submit" />

                        <p className="text-green-500 font-bold mt-5">{success}</p>
                        <p className="text-red-700 font-bold mt-5">{error}</p>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default AddToy;