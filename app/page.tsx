import Image from "next/image";
import Card from "./components/card/card";
import PlanCard from "./components/planCard/planCard";
import "./app.scss";

import BackImg from "@/public/assets/Element.png";
import Img1 from "@/public/assets/1.jpeg";
import Img2 from "@/public/assets/2.jpeg";
import Img3 from "@/public/assets/Work Together Image.png";
import Img4 from "@/public/assets/3.jpeg";
import Img5 from "@/public/assets/4.jpeg";

export default function Home() {
  return (
    <div className="homePage">
      <div className="card1">
        <Image src={BackImg} alt="Img does not show" className=" backimg" />
        <span>
          <Card
            heading="Get More Done with whitepace"
            paragraph="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
            buttonheading="Try Whitepace free"
          />
          <Image src={Img1} alt="Img does not show" className="img1" />
        </span>
      </div>
      <div className="card2">
        <span>
          <Card
            style="card"
            heading="Project Management"
            paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
            buttonheading="Get Started"
          />
          <Image src={Img2} alt="Img does not show" className="img2" />
        </span>
      </div>
      <div className="card3">
        <span>
          <Image src={Img3} alt="Img does not show" className="img3" />
          <Card
            style="card"
            heading="Work together"
            paragraph="With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others."
            buttonheading="Try it now"
          />
        </span>
      </div>
      <div className="card4">
        <span>
          <Card
            style="card"
            heading="Use as Extension"
            paragraph="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
            buttonheading="Let's Go"
          />
          <Image src={Img4} alt="Img does not show" className="img4" />
        </span>
      </div>
      <div className="card5">
        <span>
          <Image src={Img5} alt="Img does not show" className="img5" />
          <Card
            style="card"
            heading="Customise it
            to your needs"
            paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
            buttonheading="Let's Go"
          />
        </span>
      </div>
      <div className="card6">
        <span className="heading">
          <h1>Choose Your Plan</h1>
          <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </span>
        <span className="plan">
          <PlanCard heading="Free" rupess="$0" para="Capture ideas and find them quickly" />
          <PlanCard style="middle-card" heading="Personal" rupess="$11.99" para="Keep home and family on track" />
          <PlanCard heading="Organization" rupess="$49.99" para="Capture ideas and find them quickly" />
        </span>
      </div>
    </div>
  );
}
