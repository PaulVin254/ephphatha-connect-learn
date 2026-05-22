import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg my-10">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website and engaging with our services, including
              submitting your details via Facebook Lead Ads, you agree to be
              bound by these Terms of Service. If you do not agree with any part
              of these terms, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Service Description
            </h2>
            <p>
              Ephphatha Sign Language School provides sign language educational
              content, course enrollments, and related communications. Our
              services are facilitated dynamically through digital forms and
              direct messaging capabilities, aimed at guiding students through
              the registration process and delivering class details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Communications & WhatsApp Messaging
            </h2>
            <p>
              When you opt-in and provide your phone number, you explicitly
              agree to receive transactional and marketing communications via
              the Meta WhatsApp Business Cloud API. These messages cover course
              details, school announcements, and registration reminders.
            </p>
            <p className="mt-4 p-4 bg-gray-100 rounded-md border-l-4 border-gray-400">
              <strong>Opt-Out Policy:</strong> You may instantaneously revoke
              this consent at any time. Simply reply with the keyword{" "}
              <strong>"STOP"</strong>
              to any WhatsApp message from us, and our automated systems
              (powered by n8n and Chatwoot) will immediately halt further
              notifications to your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. User Data & Account Termination
            </h2>
            <p>
              We prioritize your right to privacy as stipulated by our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              . You may terminate your engagement with us by initiating a{" "}
              <strong>Data Deletion Request</strong>.
            </p>
            <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
              <strong>Data Deletion Mechanism:</strong> Send an email to{" "}
              <a
                href="mailto:paul@ephphathakenya.co.ke"
                className="underline font-medium"
              >
                paul@ephphathakenya.co.ke
              </a>{" "}
              requesting the removal of your data. We guarantee the secure and
              permanent deletion of your records from our databases (Supabase)
              within 48 hours.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Meta App Integration Rules
            </h2>
            <p>
              Our automated systems operate in strict accordance with the Meta
              Developer Policies. Interactivity generated from Facebook and
              Instagram is retrieved using approved API configurations. By using
              our forms, you acknowledge our use of these platforms to
              facilitate your application securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the Republic of Kenya. All matters relating to
              user data and electronic interactions fall under the jurisdiction
              of the <strong>Kenya Data Protection Act of 2019</strong> and the
              regulations set forth by the ODPC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Contact Information
            </h2>
            <p>
              For grievances, legal notices, or queries regarding these terms,
              contact us at:
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
              <strong>Address:</strong> Ephphath Kenya, Nairobi, Kenya.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
