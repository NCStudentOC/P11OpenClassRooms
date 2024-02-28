import React from 'react'
import Money from '../Images/icon-money.png';
import Chat from '../Images/icon-chat.png';
import Security from '../Images/icon-security.png'
import { Header } from '../Components/Structure/Header/Header';
import { FeaturesHome } from '../Components/Structure/Feature/Features';
import { Hero } from '../Components/Structure/Hero/Hero';

export function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturesHome title='You are our #1 priority'
          text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
          src={Chat}
          alt="Chat Icon" />

        <FeaturesHome title='More savings means higher rates'
          text='The more you save with us, the higher your interest rate will be!'
          src={Money}
          alt="Money Icon" />

        <FeaturesHome title='Security you can trust'
          text='We use top of the line encryption to make sure your data and money is always safe.'
          src={Security}
          alt="Security Icon" />
      </section>
    </div>
  );
}

