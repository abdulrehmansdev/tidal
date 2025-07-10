import React from "react";

export default function Page() {
    return (

        <section className="container">
            
            <h1 id="terms-and-conditions" className="header-text">Privacy & Cookie Policy</h1>
            <div className="bordered-box bg-white">

                <h1 className="text-3xl font-bold mb-6">Privacy & GDPR Policy</h1>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p>Your privacy is important to Emergency Dentists LTD ("Emergency Dentists", "the Company", "we",
                    "our", or "us"). This Privacy Policy explains how we collect, use, and protect your personal
                    information when you use our appointment booking service. We are based in the United Kingdom, and UK
                    laws govern our data practices.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Purpose</h2>
                <p>This Privacy Policy informs users about:</p>
                <ul>
                    <li>Personal data we collect and hold</li>
                    <li>How we collect and use it</li>
                    <li>Data security practices</li>
                    <li>Who accesses your data</li>
                    <li>Your rights</li>
                    <li>How to contact us</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
                <p>By using our website or providing information, you consent to our data practices. We'll post any
                    policy changes on this page. You may withdraw consent by contacting
                    info@emergency-dentists.co.uk.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Basis for Processing</h2>
                <p>We process data based on:</p>
                <ul>
                    <li>Your explicit consent</li>
                    <li>Contractual necessity</li>
                    <li>Legitimate interests</li>
                    <li>Legal obligations</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Data We Collect</h2>
                <h3 className="text-xl font-semibold mt-8 mb-4">Information You Provide</h3>
                <ul>
                    <li>Account details: username, password, profile picture</li>
                    <li>Contact details: email, phone number</li>
                    <li>Location: physical address, billing address</li>
                    <li>Financial information: payment details, tax numbers</li>
                    <li>Personal details: name, title, date of birth</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Information Collected During Use</h3>
                <ul>
                    <li>Interaction records</li>
                    <li>GPS coordinates (with permission)</li>
                    <li>Communication details</li>
                    <li>Metadata: IP address, device information</li>
                    <li>User actions on our website</li>
                    <li>Search preferences (location, radius, dates)</li>
                    <li>Selected appointment details</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Information Stored Locally on Your Device</h3>
                <p>Our website stores certain information locally on your device using localStorage to enhance your user
                    experience and facilitate appointment bookings. This data is stored on your device only and is not
                    transmitted to our servers unless you complete a booking process. The information we store
                    includes:</p>

                <h4 className="text-lg font-semibold mt-6 mb-3">User Information</h4>
                <ul>
                    <li>Personal details (name, title, date of birth, contact information)</li>
                    <li>Address information (street address, city, postal code)</li>
                    <li>Guardian information (if applicable for minors)</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-3">Search Preferences</h4>
                <ul>
                    <li>Search location details (postal town, county, postcode, coordinates)</li>
                    <li>Search filters (radius, dates, days of week)</li>
                    <li>Search results for available appointments</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-3">Appointment Information</h4>
                <ul>
                    <li>Selected appointment time slots</li>
                    <li>Provider information</li>
                    <li>Service details</li>
                    <li>Appointment confirmation details</li>
                    <li>Calendar event information for booked appointments</li>
                </ul>

                <h4 className="text-lg font-semibold mt-6 mb-3">Technical Information</h4>
                <ul>
                    <li>User ID (to maintain your session)</li>
                    <li>Accessibility support settings</li>
                    <li>Completed order information</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Why We Store Information Locally</h2>
                <p>We store information locally on your device for the following purposes:</p>
                <ul>
                    <li>To remember your search preferences and avoid you having to re-enter information</li>
                    <li>To allow you to quickly book appointments without re-entering your personal details</li>
                    <li>To provide personalized search results based on your location and preferences</li>
                    <li>To create calendar events for your confirmed appointments</li>
                    <li>To improve site accessibility based on your device requirements</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Local Storage Retention</h2>
                <p>We store your information in localStorage for a maximum of 30 days from your last interaction with
                    our site. After this period, the data will expire and be removed automatically.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Information</h2>
                <p>We collect children's data only with parental/guardian consent. Parents/guardians must provide their
                    details to create accounts for children.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Data</h2>
                <ul>
                    <li>Provide website services</li>
                    <li>Manage accounts and support</li>
                    <li>Communicate about relevant services</li>
                    <li>Develop content based on interests</li>
                    <li>Send promotional messages (with opt-out option)</li>
                    <li>Resolve disputes</li>
                    <li>Measure consumer interest</li>
                    <li>Provide updates</li>
                    <li>Customize experiences</li>
                    <li>Detect fraud</li>
                    <li>Enforce Terms of Use</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Data with Third Parties</h2>
                <p>We share data with:</p>
                <ul>
                    <li>Payment processors</li>
                    <li>Marketing platforms (with consent)</li>
                    <li>Analytics providers</li>
                    <li>IT service providers</li>
                </ul>

                <p>We never sell your personal data. To opt out of sharing, contact info@emergency-dentists.co.uk.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights Under GDPR</h2>
                <p>Under UK GDPR, you have the following rights:</p>
                <ul>
                    <li>Access your data</li>
                    <li>Request corrections</li>
                    <li>Request deletion</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                    <li>Withdraw consent</li>
                </ul>

                <p>For locally stored data specifically:</p>
                <ul>
                    <li><strong>Right to Access</strong>: You can access your personal data stored in localStorage
                        through your browser settings
                    </li>
                    <li><strong>Right to Erasure</strong>: You can clear your data at any time using the "Clear My Data"
                        button on our site
                    </li>
                    <li><strong>Right to Restrict Processing</strong>: You can prevent localStorage by adjusting your
                        browser settings
                    </li>
                    <li><strong>Right to Data Portability</strong>: You can export your data through your browser
                        developer tools
                    </li>
                </ul>

                <p>Contact info@emergency-dentists.co.uk to exercise these rights.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">How to Clear Your Local Data</h2>
                <p>You can clear all locally stored data in two ways:</p>
                <ol>
                    <li>Using the "Clear My Data" button located in your account settings on our website</li>
                    <li>Through your browser settings (typically found under Privacy or Security settings)</li>
                </ol>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
                <p>We keep your data only as long as necessary for service provision or legal requirements. Consent
                    withdrawal doesn't affect prior processing. For localStorage data specifically, we retain it for a
                    maximum of 30 days.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                <p>We implement appropriate security measures to protect against unauthorized access or data breaches.
                    We limit internal access and have procedures for handling potential breaches.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Complaints</h2>
                <p>You may complain to the Information Commissioner's Office (ICO):</p>
                <ul>
                    <li>Phone: 0303 123 1113</li>
                    <li>Website: https://ico.org.uk/concerns/</li>
                    <li>Email: icocasework@ico.org.uk</li>
                    <li>Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9
                        5AF
                    </li>
                </ul>

                <p>Please contact us first with any concerns.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                    Emergency Dentists LTD<br/>
                    United Kingdom<br/>
                    Email: info@emergency-dentists.co.uk
                </p>

                <div>
                    <p>Last Updated: 06/04/2025</p>
                </div>

            </div>
        </section>


    );
}