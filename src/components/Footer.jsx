import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer" className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between py-5 gap-4 sm:gap-0">
                <img src="/white-logo.png" alt="TINAD logo" className="h-10 w-10 md:h-12 md:w-12 sm:h-auto"/>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm sm:text-base">
                    <Link to="/privacy-policy" className="border-b-2 border-b-black hover:border-b-[#694D29] transition-colors">Privacy policy</Link>
                    <Link to="/terms-of-service" className="border-b-2 border-b-black hover:border-b-[#694D29] transition-colors">Terms of service</Link>
                    <Link to="/contact" className="border-b-2 border-b-black hover:border-b-[#694D29] transition-colors">Contact us</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer