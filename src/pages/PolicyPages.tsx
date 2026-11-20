import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

// Textos legais em rascunho. Os valores entre [ ] têm de ser confirmados
// pela empresa e revistos por um profissional jurídico antes de publicar.

export function TermsPage() {
  return (
    <InfoPage eyebrow="Legal" title="Termos e condições">
      <section>
        <p>
          This website is operated by {storeInfo.legalName} (Company No. {storeInfo.vatNumber}), registered at{' '}
          {storeInfo.postalAddress}. Throughout the site, "we", "us" and "our" refer to {storeInfo.name}.{' '}
          {storeInfo.name} offers this website, including all information, tools and services available from it,
          conditioned upon your acceptance of all terms, conditions, policies and notices stated here. By visiting
          our site and/or purchasing from us, you engage in our "Service" and agree to these Terms of Service,
          including all policies referenced herein. Please read them carefully; if you do not agree, you may not
          use the Service.
        </p>
      </section>
      <section>
        <h2>1 – Online use conditions</h2>
        <p>
          You confirm you are of legal age in your state or province, or have consent for any minor dependents to
          use the website. You may not use our products for any illegal or unauthorized purpose, nor violate any
          laws in your jurisdiction, nor transmit any viruses or destructive code. A breach results in immediate
          termination of your Services.
        </p>
      </section>
      <section>
        <h2>2 – General conditions</h2>
        <p>
          We reserve the right to refuse service to anyone at any time. Your content (excluding credit card
          information) may be transferred unencrypted; credit card information is always encrypted. You agree not
          to reproduce, copy, sell or exploit any portion of the Service without our written permission.
        </p>
      </section>
      <section>
        <h2>3 – Accuracy of information</h2>
        <p>
          We are not responsible if information on this site is not accurate, complete or current; it is provided
          for general information only. We reserve the right to modify the contents at any time without obligation
          to update.
        </p>
      </section>
      <section>
        <h2>4 – Modifications to service and prices</h2>
        <p>
          Prices are subject to change. We may modify or discontinue the Service at any time. The presentation of
          products is a non-binding online catalogue; clicking "Buy" makes an offer to enter a purchase agreement,
          and an automated confirmation email does not constitute acceptance. Statutory warranty rights apply.
        </p>
      </section>
      <section>
        <h2>5 – Products or services</h2>
        <p>
          Certain products may be available online only and in limited quantities, returnable per our refund
          policy. We try to display colours and images accurately but cannot guarantee your screen's display.
          Products ship directly from our suppliers; any customs duties or import taxes are the consumer's
          responsibility and are made clear in advance where applicable.
        </p>
      </section>
      <section>
        <h2>6 – Billing & account accuracy</h2>
        <p>
          We may refuse or limit any order. You agree to provide current, complete and accurate purchase and
          account information and to update it promptly so we can complete your transactions.
        </p>
      </section>
      <section>
        <h2>7 – Optional tools & 8 – Third-party links</h2>
        <p>
          Third-party tools are provided "as is" without warranty; use at your own risk. Third-party links may lead
          to sites not affiliated with us; complaints about third-party products go directly to that party.
        </p>
      </section>
      <section>
        <h2>9 – User submissions</h2>
        <p>
          If you send ideas or suggestions, we may use them without restriction or compensation. We may remove
          content we deem unlawful or objectionable. You are responsible for the accuracy of your comments.
        </p>
      </section>
      <section>
        <h2>10 – Personal information</h2>
        <p>Your submission of personal information is governed by our Privacy Policy, available at mio-tokyo.com.</p>
      </section>
      <section>
        <h2>11 – Errors and omissions</h2>
        <p>
          The site may contain errors or omissions on descriptions, prices, promotions, shipping and availability.
          We may correct these and cancel orders if information is inaccurate.
        </p>
      </section>
      <section>
        <h2>12 – Prohibited uses</h2>
        <p>
          You may not use the site for unlawful purposes, to violate laws, infringe IP rights, harass or
          discriminate, submit false information, upload viruses, collect others' data, spam or phish, or interfere
          with security features.
        </p>
      </section>
      <section>
        <h2>13 – Disclaimer; limitation of liability</h2>
        <p>
          We do not guarantee the Service will be uninterrupted or error-free. The Service and all products are
          provided "as is" and "as available" without any warranty, express or implied, to the extent permitted by
          law.
        </p>
      </section>
      <section>
        <h2>14 – Indemnification · 15 – Severability · 16 – Termination</h2>
        <p>
          You agree to indemnify {storeInfo.legalName} and its affiliates against claims arising from your breach of
          these Terms. If any provision is unenforceable, the rest remain in effect. These Terms remain valid until
          terminated by you or by us.
        </p>
      </section>
      <section>
        <h2>17 – Entire agreement · 18 – Governing law</h2>
        <p>
          These Terms constitute the entire agreement between you and us, governed by and interpreted under the laws
          of England and Wales.
        </p>
      </section>
      <section>
        <h2>19 – Changes · 20 – Contact</h2>
        <p>
          We may update these Terms; continued use constitutes acceptance. Questions: {storeInfo.contactEmail}.
        </p>
      </section>
    </InfoPage>
  );
}

export function PrivacyPage() {
  return (
    <InfoPage eyebrow="Legal" title="Política de privacidade">
      <section>
        <p>
          <strong>Last updated: 20/11/2026</strong>
        </p>
        <p>
          <strong>{storeInfo.legalName}</strong> operates {storeInfo.name} (mio-tokyo.com), including all related
          information, features, products and services (the "Services"). This Privacy Policy describes how we
          collect, use and disclose your personal information when you use the Services or communicate with us.{' '}
          {storeInfo.name} is powered by Shopify.
        </p>
      </section>

      <section>
        <h2>Personal information we collect</h2>
        <ul>
          <li>
            <strong>Contact details</strong> — name, address, billing/shipping address, phone, email.
          </li>
          <li>
            <strong>Financial information</strong> — payment card details, transactions, payment method (card data
            encrypted).
          </li>
          <li>
            <strong>Account information</strong> — username, password, preferences, settings.
          </li>
          <li>
            <strong>Transaction information</strong> — items viewed, added, purchased, returned or cancelled.
          </li>
          <li>
            <strong>Communications</strong> — what you share when contacting customer service.
          </li>
          <li>
            <strong>Device & usage data</strong> — device, browser, IP address, interaction with the Services.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>
            <strong>Provide & improve the Services</strong> — fulfil orders, process payments, manage your account,
            organize shipments, facilitate returns, personalize your experience.
          </li>
          {/* TODO: confirmar os itens que aparecem entre "Provide & improve" e "Marketing" — não estão nas imagens */}
          <li>
            <strong>Marketing</strong> — promotional messages via email/SMS/post and online ads based on your activity
            (unsubscribe any time).
          </li>
          <li>
            <strong>Security & fraud prevention</strong> — verify your account and detect fraud.
          </li>
          <li>
            <strong>Communication & legal reasons</strong> — support and compliance with applicable law.
          </li>
        </ul>
      </section>

      <section>
        <h2>Disclosure & Shopify</h2>
        <p>
          We may share data with Shopify, suppliers and service providers (IT, payments, analytics, support, storage,
          order processing, shipping), with marketing partners, and where legally required. The Services are hosted by
          Shopify, which processes data to provide and improve them; see Shopify's consumer Privacy Policy at
          privacy.shopify.com.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may access, delete, correct and port your data, and (UK/EEA) object,
          restrict and withdraw consent. We will not discriminate for exercising these rights and may verify your
          identity. Exercise them via the contact below.
        </p>
      </section>

      <section>
        <h2>Children's data · Security · International transfers</h2>
        <p>
          The Services are not intended for children under the age of majority. No security measure is fully
          impenetrable. We may process data outside your country; for transfers outside the EEA/UK we rely on
          recognized mechanisms (Standard Contractual Clauses).
        </p>
      </section>

      <section>
        <h2>Complaints & contact</h2>
        <p>
          Questions or complaints about how we process your data? Contact {storeInfo.contactEmail}. You may also lodge
          a complaint with your local data protection authority.
        </p>
      </section>
    </InfoPage>
  );
}

export function RefundPage() {
  return (
    <InfoPage eyebrow="Legal" title="Política de reembolso">
      <section>
        <p>
          <strong>Important:</strong> we do not offer free returns — the customer is responsible for the return costs.
        </p>
      </section>

      <section>
        <h2>Can I return my order?</h2>
        <p>
          Yes, within <strong>30 days</strong> of receipt, provided: the item is in original condition with all parts
          and packaging; shows only signs of normal use (no damage from negligence or misuse); hygiene-related products
          are returned properly cleaned; and the customer bears the return shipping costs.
        </p>
        <p>
          Returns are processed within <strong>7 business days</strong>. {storeInfo.legalName} / {storeInfo.name} may
          refuse returned items that show use or damage not attributable to us.
        </p>
      </section>

      <section>
        <h2>How do I return my order?</h2>
        <p>
          Email <strong>{storeInfo.contactEmail}</strong> with: order number, reason, a photo (if damaged), full name
          and address. <strong>Important:</strong> do not send the return to the sender's address — we provide the
          correct return address after review.
        </p>
      </section>

      <section>
        <h2>Cancellation — Right of withdrawal</h2>
        <p>
          Private customers may cancel within <strong>30 calendar days</strong> of receiving the last item. Since orders
          are processed immediately, they cannot be cancelled once in transit; in that case follow the return procedure
          after receipt. You may inform us of your intention to cancel by a clear written request via email.
        </p>
      </section>

      <section>
        <h2>After cancellation</h2>
        <p>
          We refund all payments received (excluding extra cost of a more expensive than standard delivery), via the
          same payment method, within a maximum of <strong>30 days</strong> of receiving the returned products. Keep
          proof of return shipment.
        </p>
      </section>
    </InfoPage>
  );
}

export function ShippingPage() {
  return (
    <InfoPage eyebrow="Legal" title="Política de envio">
      <section>
        <h2>Estimated delivery times</h2>
        <p>
          Processing takes <strong>1 to 2 business days</strong>. Once shipped, average delivery is{' '}
          <strong>7 to 12 business days</strong>. Orders placed Friday afternoon or over the weekend may take a
          little longer to process.
        </p>
      </section>

      <section>
        <h2>Shipping costs</h2>
        <p>
          Shipping is <strong>completely free</strong> on all orders. No extra shipping fees and no minimum order
          value.
        </p>
      </section>

      {/* TODO: confirmar se existem secções entre "Shipping costs" e "Payment options" — não estão nas imagens */}

      <section>
        <h2>Payment options</h2>
        <p>
          All payment options on mio-tokyo.com are protected with SSL encryption. Available: Credit card (AMEX,
          Mastercard, Maestro, Visa), Apple Pay, Google Pay.
        </p>
      </section>

      <section>
        <h2>Origin & delivery</h2>
        <p>
          To offer fair prices, we work directly with our suppliers, so delivery times may be longer than with local
          stock. Any customs duties or import taxes are the consumer's responsibility. During high order volume there
          may be some delay; we ship as soon as possible and keep you informed.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Want priority shipping or have a question? Contact <strong>{storeInfo.contactEmail}</strong> — our customer
          service is happy to help.
        </p>
      </section>
    </InfoPage>
  );
}