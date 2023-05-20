import img from '../../../assets/bg.jpg'
import img2 from '../../../assets/bg2.jpg'
import img3 from '../../../assets/img-3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[800px]">
            {/* <div id="slide1" className="carousel-item relative w-full ">
                <img src={img} className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <p>dhjdshfdsfh</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}

            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://demoopc.aeipix.com/AX02/mixeat22/shop2/image/cache/catalog/blog-4-1042x712.jpg")` }}>
                <div className="hero-overlay  bg-opacity-20"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-md bg-black text-white  shadow-2xl rounded-2xl p-5">
                        <h1 className="mb-5 text-5xl font-bold ">Electric <span className='text-primary'>Car Shop</span></h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;