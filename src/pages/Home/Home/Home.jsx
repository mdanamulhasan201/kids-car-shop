import TabComponent from "../../TabComponent/TabComponent";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className="">
         <Banner></Banner>
         <Gallery></Gallery>
         <TabComponent></TabComponent>
        </div>
    );
};

export default Home;