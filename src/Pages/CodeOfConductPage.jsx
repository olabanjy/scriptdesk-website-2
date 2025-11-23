import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import ContactFormModal from "../Component/ContactFormModal";
import { Toaster, toast } from 'sonner';

const CodeOfConductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showMessage = (e) => {
    switch (e?.status) {
      case "success":
        toast.success(e.message)
        break;

      case "error":
        toast.error(e.message)
        break;

      default:
        break;
    }
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <Toaster richColors position="top-right" />
      <Navbar />
      
      {/* Document Container */}
      <div className="max-w-4xl mx-auto px-8 py-16 bg-white min-h-screen" style={{fontFamily: 'Times, serif', lineHeight: '1.6', color: '#000'}}>
        
        {/* Document Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            SCRIPTDESK TECHNOLOGY LIMITED
          </h1>
          <h2 className="text-xl font-bold mb-2">
            CONSUMER CODE OF PRACTICE
          </h2>
          <p className="text-sm">
            Submitted to the Nigerian Communications Commission (NCC)
          </p>
        </div>

        {/* INTRODUCTION */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">INTRODUCTION</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Scope and Objectives</h3>
            <p className="mb-4 text-justify">
              This Code of Practice outlines the principles, guidelines, and standards governing the provision of Value-Added Services (VAS) by Scriptdesk Technology Limited in accordance with the regulations of the Nigerian Communications Commission (NCC). The primary objective is to ensure transparency, consumer protection, service quality, and ethical conduct in all VAS activities delivered via Short Codes and other approved channels.
            </p>
            <p className="mb-2">This Code is designed to:</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Promote fair and transparent business practices;</li>
              <li>Define consumer rights and responsibilities;</li>
              <li>Establish efficient complaint handling mechanisms;</li>
              <li>Ensure strict compliance with applicable regulatory requirements;</li>
              <li>Foster a reliable and accountable relationship between Scriptdesk Technology Limited and its subscribers.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Definitions</h3>
            <p className="mb-4 text-justify">
              Unless otherwise stated, all terms used in this Code shall bear the same meaning as defined in the Nigerian Communications Act, NCC Regulations, and applicable industry standards.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Application of Code</h3>
            <p className="mb-4 text-justify">
              This Code shall apply to all Value-Added Services provided by Scriptdesk Technology Limited, whether directly or through partners, on licensed telecommunications networks in Nigeria. It shall be binding on all employees, agents, and content partners involved in the development, deployment, or operation of such services.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Code Administration</h3>
            <p className="mb-2 text-justify">
              The enforcement and ongoing administration of this Code shall be under the responsibility of a designated <strong>Compliance Officer</strong> within Scriptdesk Technology Limited. The company will ensure that:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>All staff and third-party service providers are fully trained on the contents and obligations of this Code;</li>
              <li>Service delivery is monitored regularly to ensure compliance with NCC regulations;</li>
              <li>Internal audits and reviews are conducted periodically to uphold best practices.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Amendment of Code</h3>
            <p className="mb-4 text-justify">
              This Code may be reviewed and revised periodically in response to legal, regulatory, or operational changes. Any amendment shall be formally approved by the management of Scriptdesk Technology Limited and, where necessary, submitted to the NCC for acknowledgment or approval.
            </p>
          </div>
        </div>

        {/* PROVISION OF INFORMATION */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">PROVISION OF INFORMATION</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Description of Services</h3>
            <p className="mb-4 text-justify">
              <strong>Scriptdesk Technology Limited</strong> provides a diverse portfolio of Value-Added Services (VAS) to subscribers via licensed telecommunications networks using approved Short Codes. These services are designed to deliver valuable content and engagement tools, and include but are not limited to:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li><strong>Entertainment Services:</strong> Such as caller ringback tones, jokes, music clips, quizzes, and interactive games.</li>
              <li><strong>Educational Content:</strong> Including study guides, language lessons, career tips, and knowledge-building articles.</li>
              <li><strong>News and Alerts:</strong> Covering current affairs, sports, health updates, motivational tips, and weather alerts.</li>
              <li><strong>Promotional and Loyalty Services:</strong> Including loyalty campaigns, interactive brand engagement, and customer reward programs.</li>
              <li><strong>Subscription-Based Services:</strong> Providing content or utilities on a daily, weekly, or monthly basis based on user preference.</li>
            </ul>
            <p className="mb-4 text-justify">
              All services are designed to enhance the user experience by offering engaging, relevant, and accessible content through Short Codes or other NCC-approved delivery mechanisms.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Service Contract and Duration</h3>
            <p className="mb-4 text-justify">
              Each activation or subscription to a VAS constitutes a service contract between Scriptdesk Technology Limited and the subscriber. Service duration may vary—ranging from daily to weekly, monthly, or one-off depending on the service type. All relevant details, including billing frequency, auto-renewal terms, and validity period, are communicated transparently before activation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Service Subscription</h3>
            <p className="mb-4 text-justify">
              Subscribers voluntarily initiate service by sending the designated keyword to the assigned Short Code. Upon successful subscription, a confirmation message will be sent, detailing the nature of the service, applicable charges, and how to opt out. No subscription shall be processed without the subscriber's express and informed consent.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Opt-In and Opt-Out Policy for Scriptdesk</h3>
            
            <p className="mb-2"><strong>1. Opt-In</strong></p>
            <ul className="list-disc ml-8 mb-4">
              <li>Subscribers can voluntarily subscribe to Scriptdesk services by sending the designated keyword to the assigned Short Code.</li>
              <li>Upon successful subscription, the subscriber will receive a confirmation message detailing:</li>
            </ul>
            
            <div className="ml-12 mb-4">
              <p className="font-bold mb-1">The service subscribed to</p>
              <ul className="list-disc ml-6">
                <li><strong>Charges</strong> and billing frequency</li>
                <li><strong>How to opt-out</strong> at any time</li>
              </ul>
              <p className="mt-2">• No subscriber shall be enrolled without their explicit consent.</p>
            </div>

            <p className="mb-2"><strong>2. Opt-Out</strong></p>
            <ul className="list-disc ml-8 mb-4">
              <li>Subscribers can unsubscribe at any time by sending the designated opt-out keyword (e.g., STOP) to the Short Code.</li>
              <li>Upon receipt, the system will send an acknowledgment of successful deactivation, and all future billing will cease immediately.</li>
              <li>Opt-out requests must be processed promptly and without any additional charges.</li>
            </ul>

            <p className="mb-2"><strong>3. Compliance</strong></p>
            <ul className="list-disc ml-8 mb-4">
              <li>Scriptdesk ensures that all opt-in and opt-out processes comply with NCC regulations and respect subscriber privacy.</li>
              <li>No service shall be activated without a valid opt-in, and no subscriber shall receive further messages after a successful opt-out.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Contract Terms and Conditions</h3>
            <p className="mb-2 text-justify">
              The terms and conditions applicable to each service will be provided to the subscriber at the point of activation. These terms will include:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Service description</li>
              <li>Pricing structure</li>
              <li>Renewal and cancellation guidelines</li>
              <li>Customer support contact information</li>
            </ul>
            <p className="mb-4 text-justify">
              All terms shall comply fully with the standards set by the Nigerian Communications Commission (NCC) and relevant consumer protection laws.
            </p>
          </div>
        </div>

        {/* ADVERTISING AND REPRESENTATION OF SERVICES */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">ADVERTISING AND REPRESENTATION OF SERVICES</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Advertisement Standards</h3>
            <p className="mb-2 text-justify">
              <strong>Scriptdesk Technology Limited</strong> is committed to ensuring that all advertisements and promotions related to its Value-Added Services (VAS) are accurate, transparent, and fully compliant with applicable laws and the Nigerian Communications Commission (NCC) Code of Advertising Practice. Every advertisement must clearly state:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>The nature of the service</li>
              <li>Cost of subscription</li>
              <li>Billing frequency</li>
              <li>Opt-out procedures</li>
            </ul>
            <p className="mb-4 text-justify">No misleading or exaggerated claims shall be made.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Service Availability Disclosure</h3>
            <p className="mb-4 text-justify">
              All promotional content will accurately reflect the availability and accessibility of the advertised services. Any service that is subject to time limitations, network restrictions, geographic access, or device compatibility will have these constraints clearly communicated to users prior to activation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Promotion of Bundled Services</h3>
            <p className="mb-4 text-justify">
              Where services are offered as part of a bundle or package, Scriptdesk shall disclose all individual components of the bundle, any associated charges, access conditions, and relevant validity periods. The full scope of the offer must be communicated in a clear and understandable manner.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Quality Assurance and Regulatory Approval</h3>
            <p className="mb-4 text-justify">
              Advertising content shall meet minimum ethical, technical, and professional standards. All campaigns will undergo internal quality checks before release. Where applicable, advertisements or promotional campaigns shall be submitted to the NCC or other regulatory authorities for pre-approval.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Advertising Channels</h3>
            <p className="mb-2 text-justify">
              VAS advertising may be disseminated through approved media, including but not limited to:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>SMS</li>
              <li>USSD notifications</li>
              <li>In-app or mobile web banners</li>
              <li>Social media platforms</li>
              <li>Television and radio</li>
              <li>Websites and email campaigns</li>
            </ul>
            <p className="mb-4 text-justify">
              Each chosen medium must suit the target audience and must be capable of clearly communicating the full details of the offer.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Ethical Comparative Advertising</h3>
            <p className="mb-4 text-justify">
              Comparative advertisements referencing other providers must be factual, fair, and verifiable. <strong>Scriptdesk Technology Limited</strong> will not permit the use of misleading comparisons, false superiority claims, or derogatory references to competitors.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Promotional Offers and Trials</h3>
            <p className="mb-2 text-justify">
              Promotions such as free trials, discounts, or bonus access shall be clearly communicated with full disclosure of:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Start and end dates</li>
              <li>Eligibility criteria</li>
              <li>Any charges upon renewal</li>
              <li>Opt-out instructions before or after the promotional period</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Clear Disclaimers</h3>
            <p className="mb-2 text-justify">
              All advertising and service messages shall contain necessary disclaimers regarding:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Charges</li>
              <li>Service conditions or limitations</li>
              <li>Subscription terms</li>
            </ul>
            <p className="mb-4 text-justify">
              These disclaimers must be concise, prominently displayed, and easy for subscribers to understand.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Telemarketing and Text Messaging Campaign Guidelines</h3>
            <ul className="list-disc ml-8 mb-4">
              <li><strong>Consent-Based Marketing:</strong> We will only send promotional messages or make telemarketing calls to consumers who have explicitly opted in.</li>
              <li><strong>Identification and Opt-Out:</strong> All promotional messages will clearly identify us as the sender and include a free and simple way for consumers to opt out.</li>
              <li><strong>Fair Practice:</strong> We will avoid misleading claims and restrict calls to reasonable hours.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Internal Compliance Review</h3>
            <p className="mb-4 text-justify">
              <strong>Scriptdesk Technology Limited</strong> shall maintain a robust internal compliance mechanism to vet all advertisements and promotional content before deployment. This ensures alignment with both regulatory expectations and internal policies.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Respect for Privacy and DND Compliance</h3>
            <p className="mb-2 text-justify">
              Marketing messages will only be sent to users who have explicitly opted in to receive them. <strong>Scriptdesk</strong> shall strictly adhere to the <strong>NCC Do-Not-Disturb (DND)</strong> directive. All promotional messages must:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Respect user privacy</li>
              <li>Clearly state the nature of the message</li>
              <li>Include a simple opt-out mechanism</li>
            </ul>
          </div>
        </div>

        {/* CONSUMER BILLING, CHARGING, COLLECTION AND CREDIT PRACTICES */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">CONSUMER BILLING, CHARGING, COLLECTION AND CREDIT PRACTICES</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">General Principles</h3>
            <p className="mb-4 text-justify">
              Scriptdesk Technology Limited is committed to maintaining transparent, fair, and accurate billing and charging practices across all its Value-Added Services (VAS). Subscribers shall be clearly informed of all applicable charges before activation, and no billing shall occur without their explicit and informed consent. The company will implement and maintain robust systems to:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Prevent unauthorized or erroneous charges;</li>
              <li>Ensure all transactions are traceable;</li>
              <li>Facilitate prompt investigation and resolution of billing-related issues.</li>
            </ul>
            <p className="mb-4 text-justify">
              Our goal is to promote user trust and minimize billing complaints through proactive compliance and service integrity.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Billing Information</h3>
            <p className="mb-2 text-justify">
              Subscribers shall be provided with clear and accurate billing notifications detailing:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>The nature of the subscribed service</li>
              <li>Applicable fees</li>
              <li>Frequency of deductions (e.g., daily, weekly, monthly)</li>
            </ul>
            <p className="mb-4 text-justify">
              This information shall be included in the confirmation message upon successful opt-in and any subsequent renewal alerts. Scriptdesk ensures that subscribers are aware of their financial commitments at all stages of the service lifecycle.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Itemisation of Charges</h3>
            <p className="mb-4 text-justify">
              To promote transparency, bills shall be itemized to reflect each service rendered and the corresponding charge. Where individual itemization is not technically feasible—especially for microcharges—a summary report showing categories of services, usage frequency, and total charges will be made available upon request through customer support or via self-service platforms.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Timing for Issuance of a Bill</h3>
            <p className="mb-4 text-justify">
              Usage notifications or billing summaries (where applicable) shall be issued no later than ten (10) days after the end of a billing period or service cycle. This ensures timely consumer awareness, facilitates immediate verification of charges, and allows quick dispute resolution if any discrepancies arise.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Receipts and Consumer Payment Advice</h3>
            <p className="mb-2 text-justify">
              Upon successful billing (via airtime deduction, wallet debit, or other authorized payment channels), the subscriber shall receive a payment receipt or confirmation SMS. This message shall include:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>The amount deducted</li>
              <li>Name or identifier of the service</li>
              <li>Contact information for inquiries, cancellation, or complaints</li>
            </ul>
            <p className="mb-4 text-justify">
              Such communication helps users monitor their account activity and ensures accountability in financial transactions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Billing Period</h3>
            <p className="mb-4 text-justify">
              The standard billing cycle for services offered by Scriptdesk Technology Limited shall align with the specific terms agreed upon at the point of subscription. While the default billing period may extend up to 60 days for certain services, others may follow a daily, weekly, or monthly cycle depending on the nature of the content or service. All billing intervals shall be clearly disclosed to subscribers before activation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Non-Payment of Bills</h3>
            <p className="mb-2 text-justify">
              In cases where post-paid billing is applicable (primarily for corporate or enterprise solutions), failure to settle outstanding invoices may result in service suspension or termination. Prior to such action, Scriptdesk will:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Issue a notification of non-payment;</li>
              <li>Allow a reasonable grace period for the subscriber to settle the debt;</li>
              <li>Offer assistance through the customer support team to resolve potential issues.</li>
            </ul>
            <p className="mb-4 text-justify">
              This policy does not apply to prepaid services, where billing is executed upfront upon service activation.
            </p>
          </div>
        </div>

        {/* COMPLAINTS MANAGEMENT FRAMEWORK */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">COMPLAINTS MANAGEMENT FRAMEWORK</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Consumer Awareness</h3>
            <p className="mb-4 text-justify">
              Scriptdesk Technology Limited prioritizes open communication and transparency in customer relations. To support this, the company ensures that users are provided with clear and accessible guidance on how to submit complaints. Information on complaint procedures is made available through multiple touchpoints, including SMS notifications, the company website, customer care lines, and designated email support channels.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Submitting Complaints</h3>
            <p className="mb-4 text-justify">
              Consumers can raise concerns or lodge complaints through SMS, phone calls, email, or in writing. Once a complaint is received, it is registered in the company's customer service log and assigned a case reference number for tracking. A trained customer service team is tasked with investigating each complaint thoroughly and responding with appropriate solutions. Subscribers are kept informed of progress until final resolution.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Response Timelines</h3>
            <p className="mb-4 text-justify">
              Scriptdesk guarantees that all complaints will be acknowledged within 24 hours of receipt. Resolution is targeted within 72 hours, except where unforeseen complications arise. In cases of delay, subscribers will be informed of the reason for the delay along with a revised timeline for closure.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Free Complaint Resolution</h3>
            <p className="mb-4 text-justify">
              No subscriber shall bear any cost for initiating, following up, or resolving a complaint. The entire complaint-handling process is provided free of charge to ensure fairness and accessibility to all users.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Handling Billing Disputes</h3>
            <p className="mb-4 text-justify">
              When a subscriber raises a billing dispute, Scriptdesk Technology Limited shall immediately place the disputed charge on hold and suspend any further deductions related to that service. Should the complaint be validated, the affected subscriber will receive a full reversal or refund of the incorrect charge, in line with industry regulations and best practices.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Monitoring and Insights</h3>
            <p className="mb-4 text-justify">
              All complaints are documented, tracked, and analyzed using internal tools to identify patterns and recurring service issues. This data-driven approach supports service optimization and helps the company address root causes of common complaints, thereby improving the overall customer experience.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Data Collection and Analysis of Complaints and Outcomes</h3>
            <p className="mb-4 text-justify">
              Scriptdesk Technology Limited systematically collects and analyzes all complaints and their outcomes to identify recurring issues, service gaps, and areas for operational improvement. Each complaint record includes the date received, nature of the complaint, investigation steps, resolution provided, and time to closure. Aggregated data are used to produce periodic reports, support decision-making, and improve service quality. Insights derived from this analysis are reviewed by management to inform policy updates, staff training, and proactive measures to prevent recurrence of common complaints.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Ongoing Process Review</h3>
            <p className="mb-4 text-justify">
              The complaint handling framework shall undergo periodic evaluation to ensure it remains efficient, fair, and aligned with regulatory expectations. Input from customers, internal reviews, and third-party audits will guide improvements to the system.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Updates to the Process</h3>
            <p className="mb-4 text-justify">
              Any major changes to the complaint handling policy or process will be communicated to customers through official communication channels, including the Scriptdesk website, service messages, or other relevant platforms.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Recordkeeping</h3>
            <p className="mb-4 text-justify">
              Records of complaints—including details of correspondence, investigation outcomes, and resolution actions—shall be maintained securely for a minimum of 24 months. These records shall be accessible for regulatory inspection or audit when required.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Regulatory Oversight</h3>
            <p className="mb-4 text-justify">
              The Nigerian Communications Commission (NCC) maintains the authority to audit Scriptdesk's complaints management processes. The company shall provide full cooperation and timely access to all necessary records and documentation during such reviews.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Licensee Obligations</h3>
            <p className="mb-4 text-justify">
              As a licensed VAS provider, Scriptdesk Technology Limited bears full responsibility for maintaining a responsive and consumer-oriented complaints resolution system. This system must consistently reflect the values of fairness, accountability, and regulatory compliance.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Contact Channels</h3>
            <p className="mb-2 text-justify">
              Consumers may contact Scriptdesk's customer support for complaints or enquiries through the following channels:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li><strong>Contact Person:</strong> Odunwo-Albert Olusola</li>
              <li><strong>Customer Service Line:</strong> 07042411717</li>
              <li><strong>Email:</strong> olushola@scriptdeskng.com</li>
              <li><strong>Website:</strong> www.scriptdeskng.com</li>
              <li><strong>Physical Office Address:</strong> Gate A, Victoria Crest Estate 1, Orchid Hotel Road, Lekki, Eti-Osa, Lagos State</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Further Recourse</h3>
            <p className="mb-4 text-justify">
              In the event that a consumer is not satisfied with the resolution provided through Scriptdesk Technology Limited's standard complaints handling channels, the consumer may escalate the matter to the Nigerian Communications Commission (NCC) or any other relevant regulatory authority. Such escalation should include the complaint reference number issued by Scriptdesk and any supporting documentation. Scriptdesk Technology Limited shall provide full cooperation to the regulatory authority to facilitate a thorough review and ensure timely resolution of the matter.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Prevention of Unsolicited SMS</h3>
            <p className="mb-4 text-justify">
              Scriptdesk ensures that subscribers receive only messages they have explicitly opted into. Any subscriber can unsubscribe at any time by replying STOP, and subscribers registered on the Do-Not-Disturb (DND) list will not receive promotional messages. All messaging practices are conducted in full compliance with NCC regulations to protect consumer privacy.
            </p>
          </div>
        </div>

        {/* CONSUMER OBLIGATIONS */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">CONSUMER OBLIGATIONS</h2>
          
          <p className="mb-6 text-justify">
            Consumers who subscribe to and use the services provided by Scriptdesk Technology Limited are expected to uphold specific responsibilities that support efficient service delivery, ensure regulatory compliance, and maintain a secure and respectful digital environment. These obligations are outlined below:
          </p>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Acceptance of Terms and Conditions</h3>
            <p className="mb-4 text-justify">
              Consumers are required to read, understand, and accept the terms and conditions associated with each service prior to activation. By proceeding with subscription or usage, the consumer agrees to comply with all stated service rules, usage policies, and the broader regulatory framework as prescribed by the Nigerian Communications Commission (NCC).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Access for Service Support and Maintenance</h3>
            <p className="mb-4 text-justify">
              Where applicable, consumers must provide reasonable access to devices, systems, or premises for the purpose of service installation, diagnostics, technical support, or upgrades. This cooperation ensures uninterrupted access and optimal performance of the subscribed services.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Prohibition of Service Misuse and Equipment Tampering</h3>
            <p className="mb-4 text-justify">
              Consumers are strictly prohibited from using the service for any fraudulent, unlawful, or abusive activities. Additionally, tampering with hardware, software, network configurations, or any component of the service infrastructure—whether provided directly by Scriptdesk or its partners—is not permitted. Violations may lead to service suspension or legal action where necessary.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Restriction on Unauthorized Resale</h3>
            <p className="mb-4 text-justify">
              Consumers shall not resell, share, or redistribute any part of the service or its content to third parties without prior written authorization from Scriptdesk Technology Limited. Unauthorized resale may constitute a breach of contract and may lead to service disconnection or other enforcement actions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Responsible Use of Mobile Number Portability (MNP)</h3>
            <p className="mb-4 text-justify">
              Consumers who choose to port their mobile number are expected to use the Mobile Number Portability (MNP) feature responsibly and in good faith. Any attempt to exploit this feature for deceptive purposes, commercial advantage, or disruption of service operations is strictly discouraged and may attract regulatory penalties.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Obligation to Provide Updated Information</h3>
            <p className="mb-4 text-justify">
              Subscribers must notify the service provider promptly of any change in personal details, including mobile numbers, billing addresses, email contacts, or other relevant data. Keeping information up-to-date ensures accurate service delivery, successful billing, and effective customer communication.
            </p>
          </div>
        </div>

        {/* PROTECTION OF CONSUMER INFORMATION */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">PROTECTION OF CONSUMER INFORMATION</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Purpose</h3>
            <p className="mb-4 text-justify">
              To establish clear procedures for the handling of consumer data in a manner that ensures maximum confidentiality, accuracy, and security in line with applicable data protection regulations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Scope</h3>
            <p className="mb-4 text-justify">
              This section applies to all forms of consumer data, whether collected electronically, verbally, or in writing, and governs the company's practices in data collection, processing, storage, access, and sharing.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">General Principles</h3>
            <p className="mb-4 text-justify">
              The company is committed to protecting consumer information using lawful, fair, and transparent processes. Data will be obtained for specific, legitimate purposes and shall not be processed beyond the intended objectives without further consent.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Data Gathering and Storage</h3>
            <p className="mb-4 text-justify">
              Consumer data shall be collected only when necessary and through lawful, ethical means. All data collected shall be securely stored using appropriate technical and organizational measures to protect against unauthorized access, alteration, or loss.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Implementation of Data Protection Policies</h3>
            <p className="mb-4 text-justify">
              The company shall maintain a comprehensive internal "Consumer Information Protection Policy." All employees will undergo mandatory training on this policy and be held accountable for compliance. Internal audits shall be carried out periodically to evaluate adherence and improve data protection practices.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Data Sharing</h3>
            <p className="mb-4 text-justify">
              The company shall not disclose consumer information to third parties without prior written consent from the consumer, except when mandated by law or a competent regulatory authority. When data sharing is legally required, it shall be limited to the stated purpose and executed under strict security protocols.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Maintaining Data Quality</h3>
            <p className="mb-4 text-justify">
              Reasonable steps shall be taken to ensure that consumer information is accurate, complete, and regularly updated. Any errors or outdated data identified shall be corrected or securely deleted without delay.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Consumer Access and Review Rights</h3>
            <p className="mb-4 text-justify">
              Consumers shall have the right to request access to their personal data, seek corrections of inaccuracies, or demand deletion of erroneous information. Such requests shall be handled promptly and in accordance with applicable data protection laws and standards.
            </p>
          </div>
        </div>

        {/* ENFORCEMENT AND COMPLIANCE */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">ENFORCEMENT AND COMPLIANCE</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Compliance Monitoring and Reporting to the Commission</h3>
            <p className="mb-4 text-justify">
              Service providers shall establish and maintain robust internal compliance systems and procedures to ensure continuous adherence to the provisions of this Code and other regulatory obligations. Regular compliance monitoring reports shall be compiled and submitted to the Nigerian Communications Commission (NCC) as stipulated by regulatory frameworks and guidelines.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Complaints on Non-Compliance</h3>
            <p className="mb-4 text-justify">
              Consumers and relevant industry stakeholders shall retain the right to report any instances of suspected non-compliance by a service provider. Every provider is required to maintain accessible and transparent mechanisms for receiving, documenting, and addressing such reports in a timely and responsible manner.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Consumer Complaints</h3>
            <p className="mb-4 text-justify">
              Consumers have the right to lodge formal complaints regarding violations of their rights under this Code. These complaints must be acknowledged and investigated without delay, and appropriate resolutions shall be provided within a reasonable and clearly communicated timeframe, in accordance with established NCC directives.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Industry Complaints</h3>
            <p className="mb-4 text-justify">
              Disputes or complaints arising between service providers (inter-operator issues) must be resolved using structured and recognized dispute resolution mechanisms. Where necessary, the Commission shall intervene to ensure fair treatment, equitable resolution, and the maintenance of industry cooperation and harmony.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Monitoring and Enforcement of Compliance</h3>
            <p className="mb-4 text-justify">
              The Nigerian Communications Commission shall carry out periodic audits, inspections, and compliance verifications to assess adherence to this Code. Where violations or breaches are identified, the Commission reserves the right to impose penalties, enforce corrective actions, or take other regulatory measures as provided by law.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Appeal Process</h3>
            <p className="mb-4 text-justify">
              Where consumers or service providers are dissatisfied with a compliance-related decision, they may formally appeal to the NCC. All appeals must be lodged within the timeframe specified by the Commission, and the NCC's final decision shall be binding, unless subsequently overturned by a competent court or legal authority with appropriate jurisdiction.
            </p>
          </div>
        </div>

        {/* QUALITY ASSURANCE AND CONSUMER PROTECTION */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">QUALITY ASSURANCE AND CONSUMER PROTECTION</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Quality of Service Standards</h3>
            <p className="mb-4 text-justify">
              We are committed to maintaining a high standard of service delivery that aligns with the expectations of our consumers and the requirements of the Nigerian Communications Commission (NCC). Our services are designed to be consistently available, accessible, and reliable. We will monitor service uptime, performance, and responsiveness, and take corrective actions where necessary. Where applicable, service quality will also be jointly monitored with licensed Mobile Network Operators (MNOs) and aggregators.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Accessibility and Inclusion</h3>
            <p className="mb-4 text-justify">
              Our services are intended to be accessible to all segments of society, including persons living with disabilities, the elderly, and those in underserved or rural communities. We will explore and implement, where feasible, accessible service formats such as text-to-speech, voice-enabled prompts, and simplified user interfaces. We also strive to use local languages and culturally relevant content to ensure inclusion.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Emergency or Safety-Related Services</h3>
            <p className="mb-4 text-justify">
              Where any of our services relate to public safety, emergency support, or crisis information, we will ensure that such services are reliable, up-to-date, and easy to access. We shall work with relevant authorities to support the delivery of emergency-related content and shall ensure compliance with any NCC directives related to emergency services.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Protection of Minors</h3>
            <p className="mb-4 text-justify">
              We recognize the importance of protecting children and young persons from harmful or inappropriate content. Age-sensitive content or services shall be clearly labelled, and we shall incorporate content warnings, parental controls, and opt-in mechanisms where relevant. Where minors are part of our user base, we will ensure that data collection, advertisement, and content delivery comply with applicable child protection and privacy standards.
            </p>
          </div>
        </div>

        {/* CONSUMER BILLING */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">CONSUMER BILLING</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Billing Information</h3>
            <p className="mb-4 text-justify">
              Service providers shall ensure that consumers receive accurate, clear, and easy-to-understand billing information. All bills must include essential details such as the type of service provided, units consumed, applicable rates, duration of usage, applicable taxes, and the total amount charged. This is to promote transparency and enable consumers to verify and understand the charges.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Billing Format</h3>
            <p className="mb-4 text-justify">
              Bills must be presented in a standardized format that enables easy interpretation, whether viewed digitally or in print. Terminologies used should be consistent and avoid technical jargon to accommodate consumers of varying literacy levels.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Timing for Issuance of Bill</h3>
            <p className="mb-4 text-justify">
              For postpaid services, bills shall be issued within ten (10) calendar days following the end of the billing cycle. This ensures timely delivery and gives consumers sufficient time to review and make necessary payments.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Payment Confirmation</h3>
            <p className="mb-4 text-justify">
              Upon receipt of payment, service providers must promptly issue a payment confirmation via SMS, email, or any pre-agreed communication channel. This confirmation shall include the amount paid, date of payment, and the corresponding account credited. This serves as proof of payment and promotes consumer trust.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Billing Frequency</h3>
            <p className="mb-4 text-justify">
              Unless otherwise agreed in a service contract, billing shall occur on a bi-monthly basis (every 60 days). For services with alternative billing cycles (e.g., monthly or quarterly), such arrangements must be clearly communicated at the time of subscription.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Prepaid Services</h3>
            <p className="mb-4 text-justify">
              Charges for prepaid services shall be applied only after the service has been successfully accessed by the consumer. Immediate notification must be provided for every transaction, including the charged amount and remaining balance. Consumers shall also have the right to access their transaction history upon request.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Billing Disputes and Resolution</h3>
            <p className="mb-4 text-justify">
              Consumers who suspect incorrect billing may lodge a complaint within thirty (30) days of receiving the bill. Service providers must acknowledge such complaints within forty-eight (48) hours and resolve them within fourteen (14) working days, in line with the Complaint Management Procedure stated in this Code. While a billing dispute is under review, no penalties or service disconnections shall be applied, provided the undisputed portion of the bill has been paid.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Refunds for Overcharges</h3>
            <p className="mb-4 text-justify">
              Where a billing error is established in favour of the consumer, service providers shall process refunds within ten (10) working days. Refunds may be credited directly to the consumer's account or wallet, or refunded via the original payment channel as agreed.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Accepted Payment Methods</h3>
            <p className="mb-4 text-justify">
              Service providers shall provide consumers with multiple secure and accessible payment options, including but not limited to: bank transfers, online payment gateways, mobile money platforms, and in-person payments where applicable. These options must be clearly stated and regularly updated to ensure ease of use.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Data Retention and Access</h3>
            <p className="mb-4 text-justify">
              Service providers must retain billing records for a minimum of twenty four (24) months and make such records accessible to consumers upon request. This promotes transparency, facilitates dispute resolution, and ensures consumer rights are protected.
            </p>
          </div>
        </div>

        {/* INTERNAL GOVERNANCE AND BUSINESS ETHICS */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">INTERNAL GOVERNANCE AND BUSINESS ETHICS</h2>
          
          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Governance Framework</h3>
            <p className="mb-4 text-justify">
              Scripdesk operates under a robust governance framework that integrates clearly defined roles, responsibilities, and reporting lines with digital tools to enhance accountability, transparency, and agile decision-making across all operational layers.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Ethical Conduct and Digital Integrity</h3>
            <p className="mb-4 text-justify">
              We are committed to the highest standards of ethical and professional behavior. All staff, partners, and representatives are expected to demonstrate integrity, fairness, honesty, digital integrity, responsible technology use, and user privacy in all interactions and processes.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Regulatory Compliance</h3>
            <p className="mb-4 text-justify">
              Scripdesk strictly adheres to all applicable Nigerian laws and regulations, including the Nigerian Communications Act and NCC directives. Compliance is ensured through both traditional internal audits and digital RegTech solutions, including automated alerts, audit trails, and real-time monitoring systems.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Anti-Corruption, Fraud, and Cybersecurity</h3>
            <p className="mb-4 text-justify">
              We enforce a zero-tolerance policy against bribery, corruption, and fraud. Internal controls are supported by advanced cybersecurity measures such as intrusion detection, user authentication protocols, and continuous risk assessments to prevent, detect, and address unethical practices.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Whistleblower and Incident Reporting</h3>
            <p className="mb-4 text-justify">
              A secure and confidential whistleblower system, including a digital platform with AI-assisted review mechanisms, encourages employees and stakeholders to report misconduct, policy violations, or ethical breaches without fear of retaliation. All reports are promptly investigated and handled with discretion.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold mb-2">Continuous Governance and Innovation</h3>
            <p className="mb-4 text-justify">
              Our governance and ethics practices are continuously reviewed and refined to align with industry best practices, technological advancements, and global compliance standards. This ensures Scripdesk remains adaptive, transparent, and trusted by clients, regulators, and stakeholders.
            </p>
          </div>
        </div>

        {/* SUBMISSION STATEMENT */}
        <div className="mb-12">
          <h2 className="text-lg font-bold mb-4 text-center uppercase">SUBMISSION STATEMENT</h2>
          
          <p className="mb-8 text-justify">
            This document, the <strong>SCRIPTDESK TECHNOLOGY LIMITED CONSUMER CODE OF PRACTICE</strong>, is formally submitted for review and approval by the Nigerian Communications Commission (NCC). It has been developed in strict adherence to the Nigerian Communications Act and all related regulatory instruments, with a core focus on promoting consumer protection, ethical conduct, and service excellence.
          </p>
          
          <div className="text-left">
            <p className="mb-8">Sincerely,</p>
            
            <div className="mb-8">
              <p className="font-bold text-base mb-1">Odunwo-Albert Olushola Olabanji</p>
              <p className="mb-1">Director</p>
              <p className="text-sm mb-1">+2348137498991, +2347042411717</p>
              <p className="text-sm mb-1">hello@scriptdeskng.com // www.scriptdeskng.com</p>
              <p className="text-sm">No 6 Lara Ademola Street, Lekki, Lagos State, 101245, Nigeria</p>
            </div>
          </div>
        </div>

      </div>

      <Footer toggleModal={toggleModal} />
      <ContactFormModal toastMessage={(e) => showMessage(e)} isModalOpen={isModalOpen} toggleModal={toggleModal} />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#0079FF] text-[#ffffff] px-4 py-4 rounded-full shadow-lg transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default CodeOfConductPage;