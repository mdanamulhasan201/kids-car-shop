import logo from '../../../assets/logo3.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-100 text-base-content">
                <div>
                   <img className='h-20 w-20 rounded-full' src={logo} alt="" />
                    <p className='font-bold text-2xl text-primary'>Carville</p>
                </div>
                <div className="font-bold ">
                    <span className="footer-title">Category</span>
                    <a className="link link-hover">Sports Carg</a>
                    <a className="link link-hover">Race Car</a>
                    <a className="link link-hover">Ride On Truck</a>
                    <a className="link link-hover">Land Rovert</a>
                    <a className="link link-hover">Toyota</a>
                </div>
                <div className="font-bold ">
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="font-bold ">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>



            </footer>

            <div className="footer footer-center p-4 bg-slate-100 text-base-content">
                <p>Copyright © 2023 - All right reserved by ANAMUL HASAN</p>
            </div>

        </div>

    );
};

export default Footer;