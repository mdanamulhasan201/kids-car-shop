import { Link } from 'react-router-dom';
import SpeicialOffer from '../SpeicalOffer/SpeicialOffer';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://demoopc.aeipix.com/AX02/mixeat22/shop2/image/cache/catalog/blog-4-1042x712.jpg")` }}>
                <div className="hero-overlay  bg-opacity-20"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-md bg-black text-white shadow-2xl rounded-2xl p-5">
                        <h1 className="mb-5 text-5xl font-bold ">Electric <span className='text-primary'>Car Shop</span></h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/allToy'> <button className="btn btn-primary">Shop Now</button></Link>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  border-solid border-2 my-12 items-center  p-5'>
                <div className='text-center '>
                    <h2 className='font-bold'>FREE WORLDWIDE SHOPPING</h2>
                    <p className='text-gray-400'>All Order Over $100</p>
                </div>

                <div className='text-center'>
                    <h2 className='font-bold'>MONEY BACK GUARANTEE </h2>
                    <p className='text-gray-400'>If You Are Unable</p>
                </div>

              


                <div className='text-center'>
                    <h1 className='font-bold'>24/7 ONLINE SUPPORT</h1>
                    <p className='text-gray-400'>Call Us Anytime You Want</p>
                </div>
                <div className='text-center'>
                    <h2 className='font-bold'>WIN $50 ON SHOP</h2>
                    <Link to='/allToy'><p className='text-gray-400'>enter now</p></Link>
                </div>
            </div>

            <div>
                <h2 className='text-center font-bold my-10 mt-20 text-3xl'>Special <span className='text-primary'>Offer</span></h2>
            <SpeicialOffer></SpeicialOffer>
            </div>
        </div>
    );
};

export default Banner;