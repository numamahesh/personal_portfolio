import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../../components/Header";
import Hero from '../../components/Hero';

export default function Home() {
  return (
    <main >
      <div className="bg-[rgb(36,36,36)]  text-white z-0z-10 h-screen snap-y snap ">
  <header>
      <title>Uma Mahesh Dhupaguntla Portfolio</title>
      </header>   
   <Header />
  
        
    {/* Hero */}
    <section id="hero" >
    <Hero />
    </section>
    </div>  
    
    </main>
  );
};
