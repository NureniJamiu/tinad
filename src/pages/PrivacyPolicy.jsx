import Banner from "@/components/Banner";

const PrivacyPolicy = () => {
    return (
        <section className="space-y-5">
            <Banner
                image="/contact-frame.png"
                text="Privacy Policy"
                description="How we collect, use, and protect your information"
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
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Introduction</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Welcome to TINAD. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Information We Collect</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                We may collect the following types of information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg">
                                <li>Personal identification information (name, email address)</li>
                                <li>Usage data (pages visited, time spent on site)</li>
                                <li>Device information (browser type, IP address)</li>
                                <li>Communication preferences and feedback</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">How We Use Your Information</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                We use the collected information for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg">
                                <li>Providing and improving our services</li>
                                <li>Responding to your inquiries and requests</li>
                                <li>Sending promotional materials and updates (with your consent)</li>
                                <li>Analyzing website usage and performance</li>
                                <li>Complying with legal obligations</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Data Protection</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                We implement appropriate security measures to protect your personal information from unauthorized access,
                                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Cookies</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Our website may use cookies to enhance user experience. You can choose to disable cookies through your
                                browser settings, though this may affect website functionality.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Third-Party Services</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                We may use third-party services for analytics and marketing purposes. These services have their own
                                privacy policies, and we encourage you to review them.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Your Rights</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Lodge a complaint with a supervisory authority</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Changes to This Policy</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any changes by posting
                                the new policy on this page with an updated revision date.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#694D29]">Contact Us</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;
