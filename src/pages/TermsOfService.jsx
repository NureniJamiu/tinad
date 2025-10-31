import Banner from "@/components/Banner";

const TermsOfService = () => {
    return (
        <section className="space-y-5">
            <Banner 
                image="/contact-frame.png" 
                text="Terms of Service" 
                description="Please read these terms carefully before using our services" 
                className="bg-black"
            />

            <div className="bg-neutral-200 mt-10 sm:mt-20 lg:mt-32 mb-5">
                <div className="max-w-5xl mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                    <div className="space-y-8 text-black">
                        <div>
                            <p className="text-sm sm:text-base text-gray-600 mb-8">
                                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Agreement to Terms</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                By accessing or using the TINAD website, you agree to be bound by these Terms of Service and all 
                                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                                from using this site.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Use License</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Permission is granted to temporarily access the materials on TINAD's website for personal, 
                                non-commercial viewing only. This is the grant of a license, not a transfer of title, and under 
                                this license you may not:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for commercial purposes</li>
                                <li>Attempt to reverse engineer any software on the website</li>
                                <li>Remove any copyright or proprietary notations</li>
                                <li>Transfer the materials to another person or mirror on another server</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Intellectual Property</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                All content on this website, including but not limited to text, graphics, logos, music, videos, 
                                and software, is the property of TINAD or its content suppliers and is protected by international 
                                copyright laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">User Conduct</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg">
                                <li>Use the website in any way that violates applicable laws or regulations</li>
                                <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                                <li>Impersonate or attempt to impersonate TINAD, its employees, or other users</li>
                                <li>Introduce viruses, trojans, or other malicious material</li>
                                <li>Collect or track personal information of others without consent</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Submissions</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Any materials, information, or ideas you submit to TINAD through this website may be used by us 
                                without restriction or compensation. By submitting content, you grant us a worldwide, royalty-free, 
                                perpetual license to use, reproduce, and distribute such content.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Disclaimer</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                The materials on TINAD's website are provided on an 'as is' basis. TINAD makes no warranties, 
                                expressed or implied, and hereby disclaims all other warranties including, without limitation, 
                                implied warranties of merchantability, fitness for a particular purpose, or non-infringement of 
                                intellectual property.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Limitations of Liability</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                In no event shall TINAD or its suppliers be liable for any damages (including, without limitation, 
                                damages for loss of data or profit, or due to business interruption) arising out of the use or 
                                inability to use the materials on TINAD's website.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Links to Third-Party Sites</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Our website may contain links to third-party websites. TINAD has no control over and assumes no 
                                responsibility for the content, privacy policies, or practices of any third-party sites.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Modifications</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                TINAD may revise these terms of service at any time without notice. By using this website, you 
                                agree to be bound by the current version of these Terms of Service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Governing Law</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                These terms shall be governed by and construed in accordance with the laws of the United Kingdom 
                                and Nigeria, without regard to conflict of law provisions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Contact Information</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <p className="text-base sm:text-lg font-semibold">
                                contact@tinadworld.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
