import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="border-t border-white/10 mt-20">
            <div className="px-6 sm:px-6 py-8 sm:py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="flex-4 flex flex-col items-center md:items-start gap-4">
                        <img src="/gold-logo.png" alt="TINAD logo" className="h-16 w-auto"/>
                        <p className="text-white/70 text-sm text-center md:text-left max-w-xs">
                            A modern music record label showcasing exceptional artists and releases.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1 flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-yellow font-semibold text-lg">Quick Links</h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/artists" className="text-white/70 hover:text-yellow transition-colors">Artists</Link>
                            <Link to="/blogs" className="text-white/70 hover:text-yellow transition-colors">Blog</Link>
                            <Link to="/careers" className="text-white/70 hover:text-yellow transition-colors">Careers</Link>
                            <Link to="/contact" className="text-white/70 hover:text-yellow transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Legal & Social */}
                    <div className="flex-1 flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-yellow font-semibold text-lg">Legal</h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/privacy-policy" className="text-white/70 hover:text-yellow transition-colors">Privacy Policy</Link>
                            <Link to="/terms-of-service" className="text-white/70 hover:text-yellow transition-colors">Terms of Service</Link>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-4 mt-2">
                            <a href="https://instagram.com/wearetinad" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow transition-colors" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
                    <p>© {currentYear} Tinad. All rights reserved.</p>
                    <p className="text-center sm:text-right">
                        Made with <span className="text-yellow">♥</span> for music lovers
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer