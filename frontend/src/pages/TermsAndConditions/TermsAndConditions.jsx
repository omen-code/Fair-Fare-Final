import React from "react";
import "./tc.css";

const Tc = () => {
  return (
    <div>
      <header>
        <div className="head">
          <a href="home.html">FairFare</a>
        </div>
      </header>
      <div className="content">
        <h1>Terms and Conditions</h1>
        <hr />
        <p>
          <strong>Effective Date: [Insert Date]</strong>
        </p>

        <p>
          These Terms and Conditions ("Terms") govern your use of the FairFare
          platform, which provides comparison services for third-party
          ride-hailing providers, including but not limited to Ola, Uber, and
          Rapido. By accessing or using the FairFare app or website, you agree
          to be bound by these Terms. If you do not agree to these Terms, you
          must not use the Service.
        </p>

        <h2>1. Scope of Services</h2>
        <p>
          FairFare is a comparison platform that allows users to view Estimated
          Time of Arrival (ETA), pricing, and other relevant information from
          third-party cab services. FairFare does not provide transportation
          services directly. All transportation services are provided by
          independent third-party providers, such as Ola, Uber, and Rapido.
        </p>

        <h2>2. User Registration</h2>
        <p>
          To use FairFare, you may be required to create an account. You agree
          to provide accurate, current, and complete information during the
          registration process and to update such information to keep it
          accurate. You are responsible for maintaining the confidentiality of
          your account credentials and for all activities that occur under your
          account.
        </p>

        <h2>3. Use of Third-Party Services</h2>
        <p>
          When you use FairFare to book a ride, the actual transportation
          service is provided by a third-party provider (e.g., Ola, Uber,
          Rapido). You agree to comply with the terms and policies of these
          third-party providers. FairFare is not responsible for the actions,
          omissions, or policies of third-party providers, including but not
          limited to vehicle availability, ride quality, driver behavior, or
          pricing disputes.
        </p>

        <h2>4. Fares and Payments</h2>
        <p>
          Fare estimates provided on the FairFare platform are based on
          information supplied by third-party providers. Actual fares may vary
          due to factors such as traffic, demand, and route changes. Payments
          for rides are processed by the third-party providers, and FairFare
          does not collect or manage payments directly. You acknowledge that any
          disputes related to fares, refunds, or cancellations must be addressed
          with the third-party provider.
        </p>

        <h2>5. Cancellations and Refunds</h2>
        <p>
          The cancellation policies of third-party providers (e.g., Ola, Uber,
          Rapido) will apply to any bookings made via FairFare. FairFare is not
          responsible for any fees or charges related to cancellations. It is
          your responsibility to review the cancellation and refund policies of
          the third-party provider before confirming a booking.
        </p>

        <h2>6. User Conduct</h2>
        <p>When using FairFare, you agree to:</p>
        <ul>
          <li>
            Use the Service in a lawful manner and only for the purposes
            intended.
          </li>
          <li>
            Not use the platform for any illegal, fraudulent, or unauthorized
            purposes.
          </li>
          <li>Respect the rights and privacy of other users and drivers.</li>
          <li>
            Not attempt to interfere with the operation of the Service,
            including hacking, reverse engineering, or introducing viruses.
          </li>
        </ul>

        <p>
          Failure to adhere to these user conduct rules may result in immediate
          suspension or termination of your FairFare account, at our discretion,
          without prior notice.
        </p>

        <h2>7. Ratings and Reviews</h2>
        <p>
          FairFare may allow users to rate and review their experience with
          third-party providers. All ratings and reviews must be honest and
          based on actual experiences. You agree not to submit any false,
          misleading, or defamatory content. FairFare reserves the right to
          remove or edit reviews that violate these Terms or applicable laws.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          FairFare is not liable for any direct, indirect, incidental, or
          consequential damages resulting from your use of the platform or
          third-party services. This includes, but is not limited to, personal
          injury, property damage, lost profits, or delay in service. FairFare
          provides a platform to facilitate ride comparison and bookings, but
          the transportation service is solely provided by third-party
          providers, over which FairFare has no control.
        </p>

        <h2>9. Third-Party Providers' Terms</h2>
        <p>
          Each third-party provider, including Ola, Uber, and Rapido, operates
          under its own terms and policies. It is your responsibility to review
          and accept those terms before completing a booking. FairFare is not
          responsible for any breaches of these third-party terms.
        </p>

        <h2>10. Termination</h2>
        <p>
          FairFare reserves the right to terminate or suspend your access to the
          platform at any time if you breach these Terms, engage in illegal
          activities, or misuse the Service. Upon termination, you will no
          longer be permitted to use the Service, and your account may be
          deactivated.
        </p>

        <h2>11. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of [Insert Jurisdiction]. Any disputes arising out of or relating to
          these Terms or the use of FairFare will be subject to the exclusive
          jurisdiction of the courts located in [Insert Jurisdiction].
        </p>

        <h2>12. Amendments</h2>
        <p>
          FairFare reserves the right to modify or update these Terms at any
          time. Any changes will be posted on this page, and your continued use
          of the Service after such changes will constitute your acceptance of
          the revised Terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at
          <a href="mailto:fair.fare03@gmail.com">fair.fare03@gmail.com</a>.
        </p>
      </div>
      <footer>
        <div className="foot">
          <hr color="yellow" />
          <h2>FairFare</h2>
          Contact Us Online:
          <br />
          <a href="https://www.instagram.com/fair_fare.official">
            <img src="insta_logo.jpg" alt="Instagram Logo" />
          </a>
          <a href="https://www.instagram.com">
            <img src="facebook_logo.png" alt="Facebook Logo" />
          </a>
          <a href="https://www.instagram.com">
            <img src="x_logo.png" alt="X Logo" />
          </a>
        </div>
        <a href="t&c.html" alt="t&c">
          Terms & Conditions
        </a>
        <p>&copy; 2024 FairFare. All Rights Reserved.</p>
        <br />
      </footer>
    </div>
  );
};

export default Tc;
