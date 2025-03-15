import Container from "@/components/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Collection of Information
          </h2>
          <p>
            We collect information from you when you create an account, place an
            order, subscribe to our newsletter, respond to a survey or fill out
            a form. We also collect information about your visit to our website,
            such as your IP address, browser type, and operating system.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the
            following ways:
          </p>
          <ul className="list-disc pl-6">
            <li>
              To personalize your experience (your information helps us to better
              respond to your individual needs)
            </li>
            <li>
              To improve our website (we continually strive to improve our
              website offerings based on the information and feedback we receive
              from you)
            </li>
            <li>
              To improve customer service (your information helps us to more
              effectively respond to your customer service requests and support
              needs)
            </li>
            <li>
              To process transactions (your information, whether public or private,
              will not be sold, exchanged, transferred, or given to any other
              company for any reason whatsoever, without your consent, other than
              for the express purpose of delivering the purchased product or
              service requested)
            </li>
            <li>
              To administer a contest, promotion, survey or other site feature
            </li>
            <li>
              To send periodic emails (the email address you provide for order
              processing, will only be used to send you information and updates
              pertaining to your order)
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Protection of Information</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you place an order or enter,
            submit, or access your personal information.
          </p>
          <p>
            We offer the use of a secure server. All supplied sensitive/credit
            information is transmitted via Secure Socket Layer (SSL) technology
            and then encrypted into our Payment gateway providers database only
            to be accessible by those authorized with special access rights to
            such systems, and are required to keep the information confidential.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
          <p>
            Yes, we use cookies. Cookies are small files that a site or its
            service provider transfers to your computer's hard drive through your
            Web browser (if you allow) that enables the site's or service
            provider's systems to recognize your browser and capture and remember
            certain information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Online Privacy Policy Only
          </h2>
          <p>
            This online privacy policy applies only to information collected
            through our website and not to information collected offline.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPage;
