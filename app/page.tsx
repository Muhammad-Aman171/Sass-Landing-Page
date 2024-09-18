import Image from 'next/image';
import Card from './components/card/card'
import './app.scss'

import BackImg from '@/public/assets/Element.png'
import Img1 from '@/public/assets/1.jpeg'
import Img2 from '@/public/assets/2.jpeg'


export default function Home() {
  return (
    <div className="homePage">
      <div className="card1">
      <Image src={BackImg} alt="Img does not show" className=" backimg" />
        <span>
          <Card heading="Get More Done with whitepace" paragraph="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks" buttonheading="Try Whitepace free"  />
          <Image src={Img1} alt="Img does not show" className="img1" />
        </span>
      </div>
      <div className="card2">
        <span>
        <Card style="card" heading="Project Management" paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note." buttonheading="Get Started" />
        <Image src={Img2} alt="Img does not show" className="img2" />
        </span>
      </div>
    </div>
  );
}
