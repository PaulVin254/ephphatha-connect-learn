import React from "react";

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg my-10">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Data Deletion Instructions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Company:</strong> Ephphatha Sign Language School, Nairobi,
          Kenya
          <br />
          <strong>Website:</strong> ephphathakenya.co.ke
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p className="text-lg">
              According to the Facebook Platform rules and the Kenya Data
              Protection Act (2019), we have to provide a clear and explicit
              data deletion instructions URL. If you want to delete your
              activities and data associated with Ephphatha Sign Language
              School, you can request the removal of your data by following
              these steps:
            </p>
          </section>

          <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-md">
            <h2 className="text-xl font-semibold text-red-900 mb-4">
              How to Request Data Deletion
            </h2>

            <ol className="list-decimal pl-5 space-y-4 text-red-800">
              <li>
                <strong>Send an Email:</strong> Draft an email addressed to our
                Data Controller at:
                <div className="mt-2 font-medium">
                  <a
                    href="mailto:paul@ephphathakenya.co.ke"
                    className="underline text-red-900"
                  >
                    paul@ephphathakenya.co.ke
                  </a>
                </div>
              </li>
              <li>
                <strong>Subject Line:</strong> Use the subject line{" "}
                <strong>"Data Deletion Request"</strong>.
              </li>
              <li>
                <strong>Include Your Details:</strong> In the body of the email,
                please include the Full Name, Email Address, and Phone Number
                that you originally provided through our Facebook Lead Ads
                Instant Forms or via WhatsApp, so we can accurately locate your
                records in our systems.
              </li>
              <li>
                <strong>Processing & Confirmation:</strong> Once we receive your
                request, our team will permanently delete your personal
                information from all our databases (including our Supabase
                backend and n8n automation instances). We guarantee that your
                data will be completely erased. You will receive an email
                confirmation of the deletion <strong>within 48 hours</strong>.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What happens after deletion?
            </h2>
            <p>
              Once your data is deleted, we will immediately cease all
              communications, including course details, reminders, and WhatsApp
              messaging. Any subsequent interactions with us will be treated as
              a new inquiry, and you will need to provide your consent anew.
            </p>
            <p className="mt-4">
              If you have any further questions about our data handling, please
              review our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
