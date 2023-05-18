import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";


const AddToy = () => {
    const { user } = useContext(AuthContext);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="md:h-[100vh] flex justify-center  md:mt-20">

            <div className="row">
                <div className="bg-slate-100 shadow-lg md:p-28 p-5">
                    <h2 className="font-bold text-3xl mb-5 text-center">Add Toy</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="md:flex">
                            <div className="flex items-center md:mr-14">
                                <p className="font-bold text-xl md:mr-7">Car name:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("salary", { required: true })}
                                    placeholder="Car Name"
                                    defaultValue="AENEAN QUIS"
                                />
                            </div>

                            <div className="flex items-center">
                                <p className="font-bold text-xl">Toy URL:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("image")}
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
                                    {...register("title")}
                                    placeholder="title"
                                    value={user?.displayName}
                                />
                            </div>



                            <div className="flex items-center">
                                <p className="font-bold text-xl">Seller Email:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    value={user?.email}
                                    {...register("postedBy")}
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
                                    placeholder="price"
                                    defaultValue="$5000"
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

                            <div className="flex items-center md:mr-14">
                                <p className="font-bold text-xl md:mr-5">Select Car:</p>
                                <select className="border-solid border-2 p-4 m-2 bg-slate-50" {...register("category")}>
                                    <option value="Engineering">FEUGIAT DIAM</option>
                                    <option value="Editor">AENEAN SODALES</option>
                                    <option value="writer">AENEAN QUIS</option>
                                    <option value="Developer">AENEAN SODALES</option>
                                </select>
                            </div>


                            <div className="flex items-center md:mr-14">
                                <p className="font-bold text-xl md:mr-5">Select Car:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("deadline")}
                                    placeholder="deadline"
                                    type="date"
                                />
                            </div>

                        </div>

                        <div className="text-center flex items-center">
                            <p className="font-bold text-xl md:mr-14">Details:</p>
                            <input
                                className="border-solid border-2 p-4 m-2 md:h-20 md:w-[550px] bg-slate-50"
                                {...register("description")}
                                placeholder="Description"
                                
                            />
                        </div>
                        <input className="btn btn-primary btn-block flex mx-auto mt-10" value="Car Added" type="submit" />
                    </form>
                </div>
            </div>
        </div>



    );
};

export default AddToy;