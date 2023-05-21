import { useEffect, useState } from "react";
import TabComponent from "../../TabComponent/TabComponent";
import Subscripe from "../Subscripe/Subscripe";

const Category = () => {
    const [toys, setToy] = useState([])
    const [activeTab, setActiveTab] = useState('Toyota');
    // console.log(toys)

    useEffect(() => {

        fetch(`http://localhost:5000/allCar/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setToy(result.slice(0, 3))

            })
    }, [activeTab])




    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (


        <div>
            <h2 className="text-3xl font-bold mt-20 mb-10 text-center">Car <span className="text-primary">Category</span></h2>
            <div className=" text-center  bg-slate-100">
                <div className="text-center m-auto">
                    <div className="gap-5 ">
                        <div
                            onClick={() => handleTabClick("Toyota")}
                            className={`tab tab-lg tab-lifted  ${activeTab == "Toyota" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Toyota
                        </div>
                        <div
                            onClick={() => handleTabClick("Race Car")}
                            className={`tab tab-lg tab-lifted  ${activeTab == "Race Car" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Race Car
                        </div>
                        <div
                            onClick={() => handleTabClick("Land Rover")}
                            className={`tab tab-lg tab-lifted  ${activeTab == "Land Rover" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Land Rover
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-5  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-5 gap-5">
                {toys?.map((toy) => (
                    <TabComponent toy={toy} key={toy._id}>

                    </TabComponent>
                ))}
            </div>

            <Subscripe></Subscripe>
        </div>

    );
};

export default Category;