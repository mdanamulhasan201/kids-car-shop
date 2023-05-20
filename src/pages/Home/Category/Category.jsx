import { useEffect, useState } from "react";
import TabComponent from "../../TabComponent/TabComponent";

const Category = () => {
    const [toys, setToy] = useState([])
    const [activeTab, setActiveTab] = useState('Feugiatdiam');
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
            <h2 className="text-3xl font-bold mt-20 mb-10 text-center">Car <span className="text-primary">Details</span></h2>
            <div className=" text-center  bg-slate-100">
                <div className="text-center m-auto">
                    <div className="gap-5 ">
                        <div
                            onClick={() => handleTabClick("Feugiatdiam")}
                            className={`tab tab-lg tab-lifted  ${activeTab == "Feugiatdiam" ? " bg-primary text-white" : ""
                                }`}
                        >
                            FEUGIAT DIAM
                        </div>
                        <div
                            onClick={() => handleTabClick("AeneanSodales")}
                            className={`tab tab-lg tab-lifted  ${activeTab == "AeneanSodales" ? " bg-primary text-white" : ""
                                }`}
                        >
                            AENEAN SODALES
                        </div>
                        <div
                            onClick={() => handleTabClick("AenenQuis")}
                            className={`tab tab-lg tab-lifted  ${activeTab == "AenenQuis" ? " bg-primary text-white" : ""
                                }`}
                        >
                            AENEAN QUIS
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
        </div>

    );
};

export default Category;