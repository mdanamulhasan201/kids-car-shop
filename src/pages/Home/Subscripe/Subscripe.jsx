
const Subscripe = () => {
    return (
        <div className="hero my-20 " style={{ backgroundImage: `url("https://i.ibb.co/cNKrmW9/slide.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
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
                                <button className="btn btn-primary sm:ms-20 " type="submit">Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscripe;