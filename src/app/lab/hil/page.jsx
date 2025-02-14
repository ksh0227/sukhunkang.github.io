import Link from "next/link";
import React from "react";
import ProfileCard from "@/app/components/ProfileCard";

const members = [
  {
    name: "Sean Wang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/test.jpg",
  },
  {
    name: "Sean Wang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/test.jpg",
  },
  {
    name: "Sean Wang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/test.jpg",
  },
  {
    name: "Sean Wang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/test.jpg",
  },
  {
    name: "Sean Wang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/test.jpg",
  },
];

export default function Lab() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-72 py-8">
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Health Innovation Lab (HIL)</h2>
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

            <h3 className="text-lg font-semibold mt-4">What I Study</h3>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                My research usually looks at the intersection of innovation and entrepreneurship, especially 
                within the biopharmaceutical and high-tech industries. My work explores the intricate ways in 
                which technology influences innovation, aiming to identify the key drivers and obstacles to 
                technology adoption and its effects on individuals, firms, and our society.
              </li>
              <li>
                My research also investigates the broader implications of technology and innovation, with an 
                emphasis on how technology alters firm strategy and behavior. My goal is to deepen our 
                understanding of how to effectively use technology to foster innovation within a business context.
              </li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl text-center my-12 font-semibold">Members</h2>
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