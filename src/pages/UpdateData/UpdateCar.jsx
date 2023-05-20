import {  useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateCar = () => {

    const { id } = useParams()
    console.log(id)
    const { user } = useContext(AuthContext);



    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/updateCar/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)


                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Saved!', '', 'success')
                        }
                        else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }

                    })
                    .catch((error)=>{
                        console.error("Error", error)
                    })

            }
        })

    }


    return (
        <div className="flex justify-center  md:my-20">

            <div className="row">
            <h2 className="font-bold text-3xl mb-5 text-center">Update <span className="text-primary">Car</span></h2>
                <div className="bg-slate-100 shadow-lg md:p-20 p-5">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="md:flex">
                            <div className="flex items-center md:mr-14">
                                <p className="font-bold text-xl md:mr-7">Car name:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("carName", { required: false })}
                                    placeholder="Car Name"
                                    value={id?.carName}


                                />
                            </div>

                            <div className="flex items-center">
                                <p className="font-bold text-xl">Toy URL:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("image", { required: false })}
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
                                    {...register("userName", { required: false })}
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
                                    {...register("postedBy", { required: false })}
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
                                    {...register("price", { required: false })}
                                    placeholder="Price"
                                    defaultValue="$5000"

                                />
                            </div>



                            <div className="flex items-center">
                                <p className="font-bold text-xl md:mr-7">Quantity:</p>
                                <input
                                    className="border-solid border-2 p-4 m-2 bg-slate-50"
                                    {...register("quantity", { required: false })}
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
                                    {...register("location", { required: false })}
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
                                {...register("description", { required: false })}
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

export default UpdateCar;