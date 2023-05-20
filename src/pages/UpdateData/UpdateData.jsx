import { useForm } from "react-hook-form";

const UpdateData = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { handleUpdateCar } = props;
    
    console.log(props.car)


    // console.log(props.car.displayName)

    // console.log(handleUpdateCar)
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal"   {...props}>

                <div className="modal-box w-11/12 max-w-5xl "  >



                    <div className="flex justify-center  md:mt-20">

                        <div className="row">
                            <div className=" ">
                                <h2 className="font-bold text-3xl mb-5 text-center">Add Toy</h2>
                                <form onSubmit={handleSubmit(handleUpdateCar)}>

                                    <div className="md:flex">
                                        <div className="flex items-center md:mr-14">
                                            <p className="font-bold text-xl md:mr-7">Car name:</p>
                                            <input
                                                className="border-solid border-2 p-4 m-2 bg-slate-50"
                                                {...register("carName", { required: true })}
                                                placeholder="Car Name"
                                                defaultValue={props?.car?.carName}



                                            />
                                        </div>

                                        <div className="flex items-center">
                                            <p className="font-bold text-xl">Toy URL:</p>
                                            <input
                                                className="border-solid border-2 p-4 m-2 bg-slate-50"
                                                {...register("image", { required: true })}
                                                placeholder="Image URL"
                                                type="url"
                                                defaultValue={props?.car?.image}



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
                                                defaultValue={props?.car?.userName}

                                            />
                                        </div>



                                        <div className="flex items-center">
                                            <p className="font-bold text-xl">Seller Email:</p>
                                            <input
                                                className="border-solid border-2 p-4 m-2 bg-slate-50"
                                                defaultValue={props?.car?.postedBy}
                                                readOnly
                                                {...register("postedBy", { required: true })}
                                                placeholder="your email"


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

                                    <input
                                        className="border-solid border-2 p-4 m-2 bg-slate-50 hidden"
                                        {...register("_id")}
                                        value={props?.car?._id}

                                    ></input>

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
                                            <option value="Feugiatdiam">FEUGIAT DIAM</option>
                                            <option value="AeneanSodales">AENEAN SODALES</option>
                                            <option value="AenenQuis">AENEAN QUIS</option>
                                            <option value="AeneanSodales">AENEAN SODALES</option>
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
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateData;