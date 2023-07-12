import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Subscripe = () => {
    AOS.init({
        duration: 800, 
    });
    return (
        <div className="hero my-32 " data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom"  style={{ backgroundImage: `url("https://i.ibb.co/cNKrmW9/slide.jpg")` }}>
            <div  className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md"  data-aos="zoom-in" data-aos-duration="4000">
                    <h1 className="mb-2 text-4xl text-white font-bold">Subscribe To Our Emails</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text my-3 text-white text-md font-bold">Be the First to know about new collections and exclusive offers. </span>
                        </label>
                        <div className="grid gird-cols-1 md:grid-cols-2 ">
                            <div className="">
                                <label className="input-group">
                                    <span className="text-primary font-bold">Email</span>
                                    <input type="text" placeholder="Email Address" className="input input-bordered " />
                                </label>
                            </div>
                            <div className="">
                                <button className="btn btn-primary sm:ms-20 " type="submit"><span className='mr-1'>Subscribe</span><FaArrowRight> </FaArrowRight> </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscripe;