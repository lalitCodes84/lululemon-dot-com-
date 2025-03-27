import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'MY ACCOUNT',
      links: ['Membership Program', 'Sign In', 'Register', 'Order Status', 'Returns']
    },
    {
      title: 'HELP',
      links: ['Ordering', 'Returns and Refunds', 'Shipping and Delivery', 'Payment', 'Redeem Gift Cards', 'Programs and Discounts', 'Services', 'Product and Sizing', 'Stores', 'Account']
    },
    {
      title: 'ABOUT US',
      links: ['Our Business', 'Media', 'Investors', 'Strategic Sales', 'Affiliates and Creators', 'Sweat Collective']
    },
    {
      title: 'CONTACT US',
      links: ['Live Chat', 'Contact Us']
    }
  ];

  return (
    <div className="bg-white text-black p-10 grid grid-cols-4 gap-8">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h3 className="font-bold mb-4">{section.title}</h3>
          <ul>
            {section.links.map((link, idx) => (
              <li key={idx} className="mb-2 cursor-pointer hover:underline">{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
