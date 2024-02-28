import React from 'react';
import Money from '../../../Images/icon-money.png';
import Chat from '../../../Images/icon-chat.png';
import Security from '../../../Images/icon-security.png';
import './features.css';

// const Features = () => [
//   {
//     title: 'You are our #1 priority',
//     text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
//     src: Chat,
//     alt: "Chat Icon"
//   },
//   {
//     title: 'More savings means higher rates',
//     text: 'The more you save with us, the higher your interest rate will be!',
//     src: Money,
//     alt: "Money Icon"
//   },
//   {
//     title: 'Security you can trust',
//     text: 'We use top of the line encryption to make sure your data and money is always safe.',
//     src: Security,
//     alt: "Security Icon"
//   }
// ];

export const FeaturesHome = ({ src, alt, title, text, index }) => {

  return (

    <div className="feature-item" key={index}>
      <img src={src} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>


  );
}