import './Gallery.css'
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    AOS.init({
        duration: 800,
    });
    return (

        <>
            <h3 className='text-center font-bold text-3xl  mt-28 mb-8 '> Car <span className='text-primary '>Gallery</span></h3>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 justify-between gap-10 mb-8 p-2 sm:ms-20 '>
                <div className="card">
                    <div className="image">
                        <img src="https://staranddaisy.in/wp-content/uploads/2023/03/lfc_1366m_yellow_1.jpg" />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Feugiat Diam<br /></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Product Code: Product 5</p>
                            <p>Price: $200</p>
                            <p>Availability: In Stock</p>
                            <button className='btn btn-outline btn-primary'>buy now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card ">
                    <div className="image">
                        <img src="https://p.globalsources.com/IMAGES/PDT/B1185198114/Electric-Toy-Car.jpg" />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Feugiat Diam</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Product Code: Product 18</p>
                            <p>Price: $200</p>
                            <p>Availability: In Stock</p>
                            <button className='btn btn-outline btn-primary'>buy now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://demoopc.aeipix.com/AX02/mixeat22/shop1/image/cache/catalog/14-328x324.jpg" />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Aenean Sodales<br /></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Product Code: Product 19</p>
                            <p>Price: $250</p>
                            <p>Availability: In Stock</p>
                            <button className='btn btn-outline btn-primary'>buy now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://image.made-in-china.com/202f0j00fyrWtKGIqCgU/2022-Children-prime-S-Electric-Toy-Car-Is-Big-Real-Driving-Experience-2688.jpg" />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Aenean Quis<br /></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Product Code: Product 22</p>
                            <p>Price: $150</p>
                            <p>Availability: In Stock</p>
                            <button className='btn btn-outline btn-primary'>buy now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://motherscare.store/pub/media/catalog/product/cache/8668863832ddbbed1bdc96544dcbfab2/o/i/oiiuyuewr99.jpg" />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Aenean Sodales<br /></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Product Code: Product 10</p>
                            <p>Price: $200</p>
                            <p>Availability: In Stock</p>
                            <button className='btn btn-outline btn-primary'>buy now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://image.made-in-china.com/202f0j00fFuhQcYZsvgU/2022-Children-prime-S-Electric-Toy-Car-Is-Big-Real-Driving-Experience-2688.jpg" />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Aenean Quis<br /></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Product Code: Product 15</p>
                            <p>Price: $300</p>
                            <p>Availability: In Stock</p>
                            <button className='btn btn-outline btn-primary'>buy now <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Gallery;