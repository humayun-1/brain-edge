import * as React from "react";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard.jsx";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import WorkProcess from "./WorkProcess.jsx";
import Marquee from "react-fast-marquee";

const services = [
  {
    number: "1",
    title: "Web Development",
    description:
      "We develop dynamic applications using React.js, Node.js, Next.js, and PHP. Let us bring your vision to life!",
    highlighted: true,
  },
  {
    number: "2",
    title: "App Development",
    description:
      "offering app development services to create user-friendly, high-performance mobile and web applications tailored to your needs.",
  },
  {
    number: "3",
    title: "UI/UX Design",
    description:
      "We offer UI/UX design services that deliver intuitive and engaging user experiences through focused research and appealing visuals.",
  },
  {
    number: "4",
    title: "Software Development",
    description:
      "We provide custom software development services to create tailored solutions that meet your unique business needs and drive efficiency.",
  },
  {
    number: "5",
    title: "Backend Development",
    description:
      "We provide backend development with PHP, Python, and Firebase for robust, scalable solutions and efficient data management.",
  },
  {
    number: "6",
    title: "AI Solutions",
    description:
      "AI solutions enhance decision-making, automate processes, and deliver personalized experiences tailored to business needs.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pb-7 w-full bg-[#292826] max-lg:max-w-full">
        <div className="flex shrink-0 self-center rounded-2xl border border-solid border-amber-300 border-opacity-40 h-[85px] w-[169px] border-t-0 rounded-t-none absolute top-0" />
        <Header />
        <Hero />
        <div className="flex overflow-hidden flex-col justify-center pt-28 pb-20 pr-28 pl-28 mt-8 font-semibold text-white max-lg:px-5 max-lg:max-w-full">
          <div className="flex flex-col w-full max-lg:max-w-full">
            <div className="text-2xl text-center max-lg:max-w-full">
              Trusted by global enterprise and services
            </div>
            <Marquee
              gradient={false}
              speed={50}
              autoFill
              pauseOnHover={true}
              className="mt-10 w-full text-6xl whitespace-nowrap max-lg:max-w-full max-lg:text-4xl"
            >
              <div className="flex items-center justify-between gap-10 py-2 mr-10">
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
                <div className="self-stretch my-auto max-lg:text-4xl">Logo</div>
              </div>
            </Marquee>
          </div>
        </div>
        <AboutUs />
        <div id="services" className="flex flex-col justify-center px-24 py-8 lg:py-20 w-full min-h-[979px] max-lg:px-5 max-lg:max-w-full container mx-auto">
          <div className="flex flex-col max-w-full">
            <div className="flex flex-col self-center max-w-full text-center text-white w-[548px]">
              <div className="gap-2.5 self-stretch p-2.5 w-full text-3xl font-semibold min-h-[59px] max-lg:max-w-full">
                Our Services
              </div>
              <div className="self-center text-base font-medium leading-6 max-lg:max-w-full text-white/70">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full max-lg:max-w-full">
              {services.map((service, index) => (
                <React.Fragment key={service.number}>
                  <ServiceCard {...service} />
                  {index < services.length - 1 && (
                    <div className="self-stretch w-full min-h-0 border border-solid border-amber-300 border-opacity-10 max-lg:max-w-full" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col justify-center self-end py-18 lg:py-20 pr-20 pl-24 w-full text-center text-white max-w-[1418px] max-lg:px-5 max-lg:max-w-full">
          <div className="flex flex-col items-center w-full max-lg:max-w-full">
            <div className="flex flex-col max-w-full w-[548px]">
              <div className="gap-2.5 self-stretch p-2.5 w-full text-3xl font-semibold min-h-[59px] max-lg:max-w-full">
                Our Work
              </div>
              <div className="self-center mt-5 text-base font-medium max-lg:max-w-full">
                lorem Ipsum, Lorem Ipsum
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/591361ecef3ab879d7d977608515d4a705b6746818eb5e54e28a1bddff21dd04?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
              alt="Our work showcase"
              className="object-contain mt-10 w-full rounded-none aspect-[3.23] max-lg:max-w-full"
            />
          </div>
        </div>
        <Testimonials />
        <div className="container mx-auto flex overflow-hidden flex-col justify-center px-24 py-8 lg:py-20 mt-1.5 w-full max-lg:px-5 max-lg:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-lg:max-w-full">
            <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-white min-w-[240px] w-[390px] max-lg:max-w-full">
              <div className="self-stretch py-2.5 max-w-full text-4xl font-semibold min-h-[59px]">
                How we Work
              </div>
              <div className="mt-5 text-base font-medium leading-6 max-lg:max-w-full">
                We employ an agile approach focused on your goals, delivering
                tailored solutions and high-quality applications through
                continuous collaboration and feedback.
              </div>
            </div>
            <WorkProcess />
          </div>
        </div>
        <div className="w-full max-lg:max-w-full" id="contact">
          <div className="flex gap-5 max-lg:flex-col">
            <div className="flex flex-col max-lg:ml-0 max-lg:w-full mx-auto">
              <div className="flex flex-col justify-center px-24 py-8 lg:py-20 w-full max-lg:px-5 max-lg:max-w-full">
                <div className="flex gap-10 lg:flex-row flex-col justify-center items-center w-full max-lg:max-w-full">
                  <ContactForm />
                  <div className="flex flex-col text-white max-lg:max-w-full">
                    <div className="text-3xl font-bold max-lg:max-w-full">
                      Contact Us
                    </div>
                    <div className="mt-5 text-base font-medium leading-6 max-lg:max-w-full">
                      We'd love to hear from you! Please fill out the form below
                      with your inquiries or ideas, and we'll get back to you
                      soon. Let's connect!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stats />
        <Footer />
      </div>
    </div>
  );
}
