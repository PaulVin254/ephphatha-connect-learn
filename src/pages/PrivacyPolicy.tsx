import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg my-10">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          <br />
          <strong>Company:</strong> Ephphatha Sign Language School, Nairobi,
          Kenya
          <br />
          <strong>Website:</strong> ephphathakenya.co.ke
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p>
              Ephphatha Sign Language School ("we", "our", "us") respects your
              privacy and is committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, process, and protect
              your information when you interact with our website, marketing
              campaigns, and integrated communications platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We collect personal data primarily through explicit consent via
              Facebook Lead Ads Instant Forms. The specific data points we
              collect include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">
              The personal information we gather is used strictly for the
              following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Delivering detailed sign language course information and
                educational materials.
              </li>
              <li>
                Processing student registrations for upcoming class enrollment
                tracks.
              </li>
              <li>Managing day-to-day student communications.</li>
              <li>
                Sending transactional messaging, reminders, and updates
                regarding enrollment deadlines.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. System Infrastructure & Data Handling
            </h2>
            <p>
              Your data is routed securely through our self-hosted automation
              infrastructure (<strong>n8n</strong>) and safely stored in a
              private, encrypted database (<strong>Supabase</strong>). For
              seamless communication, inbound and outbound messaging interacts
              with the <strong>Meta WhatsApp Business Cloud API</strong> and{" "}
              <strong>Chatwoot</strong> live chat infrastructure. We do not sell
              your personal data to third parties.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              5. Meta Platform Compliance
            </h2>
            <p className="text-blue-800">
              Operating under strict Meta Developer Policies, this application
              explicitly utilizes Meta permissions including{" "}
              <code className="bg-white px-1 py-0.5 rounded text-sm">
                leads_retrieval
              </code>
              ,
              <code className="bg-white px-1 py-0.5 rounded text-sm ml-1">
                pages_show_list
              </code>
              ,{" "}
              <code className="bg-white px-1 py-0.5 rounded text-sm ml-1">
                pages_read_engagement
              </code>
              , and
              <code className="bg-white px-1 py-0.5 rounded text-sm ml-1">
                whatsapp_business_messaging
              </code>
              . These permissions are used exclusively to retrieve lead data
              specifically submitted to our pages and to facilitate direct,
              opted-in messaging between you and our school.
            </p>
          </section>

          <section className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-md">
            <h2 className="text-xl font-semibold text-red-900 mb-2">
              6. Data Deletion Requests
            </h2>
            <p className="text-red-800 mb-2">
              You have the right to request the complete modification or erasure
              of your personal data from all our systems. To request a total
              removal of your personal data:
            </p>
            <p className="font-medium text-red-900 mt-2">
              Send an email to:{" "}
              <a href="mailto:paul@ephphathakenya.co.ke" className="underline">
                paul@ephphathakenya.co.ke
              </a>
            </p>
            <p className="text-sm text-red-700 mt-2 font-semibold">
              * Guaranteed processing: All data deletion requests will be fully
              processed and confirmed within 48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. WhatsApp Communications & Opt-Out
            </h2>
            <p>
              By submitting your phone number, you consent to receive
              communication via WhatsApp. If at any point you wish to halt all
              marketing, registration reminders, or transactional notifications,
              you can{" "}
              <strong>
                instantly opt out by replying with the exact keyword{" "}
                <span className="font-bold underline">STOP</span>
              </strong>
              to any WhatsApp message you receive from us. This will
              automatically terminate our automated messaging to your number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Governing Law (Kenya Data Protection Act, 2019)
            </h2>
            <p>
              All personal data collected, stored, and processed by Ephphatha
              Sign Language School is handled in strict compliance with the
              guidelines pioneered by the{" "}
              <strong>Office of the Data Protection Commissioner (ODPC)</strong>{" "}
              under the <strong>Kenya Data Protection Act of 2019</strong>. We
              are committed to the principles of data minimization, purpose
              limitation, transparency, and the rights of the data subject as
              enshrined in Kenyan law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, our data
              processing practices, or wish to exercise your data subject
              rights, please contact our Data Controller at:
              <br />
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:paul@ephphathakenya.co.ke"
                className="text-blue-600 hover:underline"
              >
                paul@ephphathakenya.co.ke
              </a>
              <br />
              <strong>Location:</strong> Nairobi, Kenya.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
