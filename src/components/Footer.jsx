const Footer = () => {
    return (
        <footer id="footer" className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between py-5">
                <img src="/white-logo.png" alt="TINAD logo"/>

                <div className="flex items-center gap-4">
                    <a href="#" className="border-b-2 border-b-black hover:border-b-[#694D29]">Privacy policy</a>
                    <a href="#" className="border-b-2 border-b-black hover:border-b-[#694D29]">Terms of service</a>
                    <a href="#" className="border-b-2 border-b-black hover:border-b-[#694D29]">Contact us</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer