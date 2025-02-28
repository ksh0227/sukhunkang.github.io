import Link from "next/link";
import React from "react";
import ProfileCard from "@/app/components/ProfileCard";

const members = [
  {
    name: "Ivan Lin",
    description:
      "Ivan is a fourth-year Economics undergraduate at the University of California of Santa Barbara. He holds a strong interest in the fields of Technology and Business and will continue to pursue his goals through the Masters of Technology Management program at UCSB. His current goal is to eventually take his research work and knowledge to start up a successful business in the digital entertainment industry.",
    image: "/lab/ivan.jpg",
  },
  {
    name: "Carter Kulm",
    description:
      "Carter is a third-year Stats and Data Science undergraduate student at the University of California of Santa Barbara. Upon graduating, he hopes to transition into a position in data science or analytics. His past research has focused primarily on economics and sports, though these are not his only fields of interest.",
    image: "/lab/carter.jpg",
  },
  {
    name: "Kuan-I (Brian) Lu",
    description:
      "Kuan-I Lu is a fourth-year Actuarial Science student at the University of California, Santa Barbara, with a strong focus on data science, including data manipulation, machine learning, and deep learning. Upon graduation, he aims to further expand his expertise in data science and its real-world applications through advanced education. His career interests encompass diverse fields such as fintech, music platforms, and entrepreneurship, with a long-term ambition of launching his own venture.",
    image: "/lab/brian.jpg",
  },
  {
    name: "Sean Wang",
    description:
      "Sean is a second-year Statistics and Data Science student at the University of California, Santa Barbara with significant hands-on experience in the realms of software development, data analytics, and machine learning. He enjoys exploring complex systems and using quantitatively-backed rationale in developing strategic solutions for a variety of applications and hobbies. His intended career trajectory lies at the intersection of finance and technology, which he aims to further throughout his undergraduate and graduate studies.",
    image: "/lab/sean.jpg",
  },
  {
    name: "Pramukh Shankar",
    description:
      "Pramukh is a fourth-year Data Science and Economics with a minor in Philosophy student at the University of California of Santa Barbara. His career interests include data analytics and economic and policy research. Upon graduating, he hopes to get involved with nonprofit work, further his education and someday run his own business. In his free time he likes to go to the gym, play tennis and play Pokemon!",
    image: "/lab/pramukh.jpg",
  },
  {
    name: "Fan Ye",
    description:
      "Fan Ye is a third-year Actuarial Science and Economics student at the University of California, Santa Barbara. His research interest focuses on the intersection of drug development, public policy, and health insurance. Upon graduating, he hopes to pursue further education in economics, specializing in insurance eocnomics.",
    image: "/lab/fan.jpg",
  },
  {
    name: "Janice Jiang",
    description:
      "Janice Jiang is a third-year Actuarial Science with a minor in Applied Psychology student at University of California, Santa Barbara. Her research interests are in biostatistics, biomarkers, and spatiotemporal analysis. After graduation, she aims to pursue Ph.D in biostatistics, further studying longitudinal modeling of biomarkers for precision medicine. During the free time, she likes playing with her two cats!",
    image: "/lab/janice.jpg",
  },
  // {
  //   name: "Sean Wang",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  //   image: "/test.jpg",
  // },
];

export default function Lab() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-72 py-8">
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Health Innovation Lab (HIL)</h2>
             <h3 className="text-lg font-semibold mt-4">About</h3>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
               Health Innovation Lab is co-directed by Dr. Sukhun Kang and <a href="https://www.barbosu.com/" className="">Dr. Sandra Barbosu.</a>
              </li>
              <li>
                The Health Innovation Lab serves as an integrated environment for research in the area of strategy and management with focus on the healthcare sectors. 
                We explore the intricate ways in which technology influences innovation, aiming to identify the key drivers and obstacles to technology adoption and its effects on individuals, firms, and our society.
                We also investigate the broader implications of technology and innovation, with an emphasis on how technology alters firm strategy and behavior. 
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-4">What I Look For</h3>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                I am usually looking for research assistants to help me on ongoing research projects, 
                especially those with data analytics skills (e.g., Stata, R, Python). Econometric training 
                including exposure to quasi-experimental research designs is also preferred.
              </li>
              <li>
                If you are interested, please email me at 
                <a href="mailto:sukhunkang@ucsb.edu" className=""> sukhunkang@ucsb.edu </a> 
                with a short introduction and attach your resume/CV with an indication of your proficiency 
                with the tools mentioned above.
              </li>
            </ul>

          </section>
          <section className="mt-8">
            <h2 className="text-2xl text-center my-12 font-semibold">Current Members</h2>
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-24">
              {members.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </section>
        </main>
      </div>
    );
}
