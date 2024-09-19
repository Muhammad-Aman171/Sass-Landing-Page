import Image from "next/image";
import Card from "./components/card/card";
import PlanCard from "./components/planCard/planCard";
import "./app.scss";
import Button from "./components/button/button";

import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";


import BackImg from "@/public/assets/Element.png";
import Img1 from "@/public/assets/1.jpeg";
import Img2 from "@/public/assets/2.jpeg";
import Img3 from "@/public/assets/Work Together Image.png";
import Img4 from "@/public/assets/3.jpeg";
import Img5 from "@/public/assets/4.jpeg";
import Img6 from "@/public/assets/Element2.png";
import Img7 from "@/public/assets/Apple.png";
import Img8 from "@/public/assets/Microsoft.png";
import Img9 from "@/public/assets/Slack.png";
import Img10 from "@/public/assets/Group 246.png";
import Img11 from "@/public/assets/Element3.png";
import Img12 from "@/public/assets/Apps.png";
import Img13 from "@/public/assets/Logo.png"

export default function Home() {
  return (
    <div className="homePage">
      <div className="card1">
        <Image src={BackImg} alt="Img does not show" className=" backimg" />
        <span>
          <Card
            style="card"
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
          <p>
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </span>
        <span className="plan">
          <PlanCard
            style="first"
            heading="Free"
            rupess="$0"
            para="Capture ideas and find them quickly"
          />
          <PlanCard
            style="middle"
            heading="Personal"
            rupess="$11.99"
            para="Keep home and family on track"
          />
          <PlanCard
            style="last"
            heading="Organization"
            rupess="$49.99"
            para="Capture ideas and find them quickly"
          />
        </span>
      </div>
      <div className="card7">
        <Card
          style="card"
          heading="Your work, everywhere you are"
          paragraph="Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!"
          buttonheading="Try Taskey"
        />
      </div>
      <div className="card8">
        <Card
          style="card"
          heading="100% your data"
          paragraph="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          buttonheading="Read more"
        />
        <Image src={Img6} alt="img does not show" className="img6" />
      </div>
      <div className="card9">
        <h1>Our sponsors</h1>
        <div className="sponsors">
          <Image src={Img7} alt=" img does not show" />
          <Image src={Img8} alt=" img does not show" />
          <Image src={Img9} alt=" img does not show" />
          <Image src={Img10} alt=" img does not show" />
        </div>
      </div>
      <div className="card10">
        <Image src={Img11} alt="img does not show" className="img11" />
        <span className="card">
          <Image src={Img12} alt="img does not show" className="img12" />
          <Card
            style="card1"
            heading="Work with Your Favorite Apps Using whitepace"
            paragraph="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
            buttonheading="Read more"
          />
        </span>
      </div>
      <div className="card11">
        <h1>Try Whitepace today</h1>
        <p>Get started for free.<br/>
        Add your whole team as your needs grow.</p>
        <Button heading="Try Taskey free"/>
        <p>On a big team? Contact sales</p>
        <span>
          <FaApple className="icon"/>
          <FaMicrosoft className="icon"/>
          <FaAndroid className="icon"/>
        </span>
      </div>
      <div className="footer">
        <div>
          <span>
            <Image src={Img13} alt="img does not show"/>
            <h1>whitepace</h1>
          </span>
          <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>
        <div>
          <h1>Product</h1>
          <p>Overview</p>
          <p>Pricing</p>
          <p>Customer stories</p>
        </div>
        <div>
          <h1>Resources</h1>
          <p>Blog</p>
          <p>Guides & tutorials</p>
          <p>Help center</p>
        </div>
        <div>
          <h1>Company</h1>
          <p>About us</p>
          <p>Careers</p>
          <p>Media kit</p>
        </div>
        <div className="last">
          <h1>Try It Today</h1>
          <p>Get started for free.
          Add your whole team as your needs grow.</p>
          <Button style="button" heading="Start today"/>
        </div>
      </div>
    </div>
  );
}
