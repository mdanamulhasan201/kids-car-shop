import { useEffect, useState } from "react";
import TabComponent from "../../TabComponent/TabComponent";
import Marquee from "react-fast-marquee";
import brand1 from '../../../assets/brand1.png'
import brand2 from '../../../assets/brand2.png'

import brand4 from '../../../assets/brand4.png'
import brand5 from '../../../assets/brand5.png'
import brand6 from '../../../assets/brand6.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Category = () => {

    AOS.init({
        duration: 800,
    });

    const [toys, setToy] = useState([])
    const [activeTab, setActiveTab] = useState('Toyota');
    // console.log(toys)

    useEffect(() => {

        fetch(`https://kids-car-shop-server.vercel.app/allCar/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setToy(result.slice(0, 3))

            })
    }, [activeTab])




    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (


        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center">
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
            <div data-aos="zoom-in" className=" mt-5  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-5 gap-5">
                {toys?.map((toy) => (
                    <TabComponent toy={toy} key={toy._id}>

                    </TabComponent>
                ))}
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center" className=" my-32">
                <Marquee pauseOnHover gradient autoFill speed={30}>
                    <img className="w-28 mr-20" src={brand1} alt="" />
                    <img className="w-20 mr-20" src={brand2} alt="" />

                    <img className="w-32 mr-20" src={brand4} alt="" />
                    <img className="w-28 mr-20" src={brand5} alt="" />
                    <img className="w-28 mr-20" src={brand6} alt="" />

                </Marquee>
            </div>

        </div>

    );
};

export default Category;