import Link from "next/link";
import React from "react";
import ProfileCard from "@/app/components/ProfileCard";

const members = [
  {
    name: "Sandra Barbosu, PhD",
    description: "Dr. Sandra Barbosu is a researcher and policy analyst specializing in the economics of science and health innovation. She holds a PhD in Strategic Management from the Rotman School of Management at the University of Toronto and has worked across academia, philanthropic funding, and science policy. She is currently associate director of ITIF’s Center for Life Sciences Innovation and an adjunct professor in the Technology Management and Innovation Department at NYU’s Tandon School of Engineering.",
    image: "/lab/sandra.jpeg",
  },
  {
    name: "Lucy Cao",
    description: "Lucy Cao is a fourth-year Economics and Statistics & Data Science student at the University of California, Santa Barbara. Her research interests focus on sustainable finance, agricultural economics, and environmental economics. After graduation, she hopes to pursue a Ph.D. in environmental economics. In her free time, she enjoys playing piano and exploring new restaurants.",
    image: "/lab/lucy.jpeg",
  },
  {
    name: "Sungyong Chang, PhD",
    description: "Dr. Sungyong Chang is an assistant professor of Management and Organizations at SC Johnson Graduate School of Management – Cornell University. He earned a Ph.D. in Management from Columbia University. His research interests lie in the areas of entrepreneurship and strategy, grand challenges, and computational social science. He examines how technology shapes industries, influences firm strategy, and creates opportunities for innovation. In the healthcare sector, he examines how technological advancements help entrepreneurial firms address critical challenges, improve patient outcomes, and expand access to life-saving treatments. In cultural industries, he studies how technology transforms creative markets, enabling individuals to develop their talents, reach broader audiences, and navigate industry complexities.",
    image: "/lab/sungyong.webp",
  },
  {
    name: "Seongho Hwang",
    description: "Seongho Hwang is a PhD student in Technology Management at UC Santa Barbara. He holds a Master’s in Economics from the Barcelona School of Economics and a Master’s in Development Policy from the Korea Development Institute (KDI) School of Public Policy and Management. His research focuses on the dynamics of innovation and entrepreneurship, particularly how innovative firms start and grow, as well as the factors shaping venture capital investment decisions in startups.",
    image: "/lab/seongho.jpg",
  },
  {
    name: "Janice Jiang",
    description:
      "Janice Jiang is a fourth-year Actuarial Science with a minor in Applied Psychology student at University of California, Santa Barbara. Her research interests are in biostatistics, biomarkers, and spatiotemporal analysis. After graduation, she aims to pursue Ph.D in biostatistics, further studying longitudinal modeling of biomarkers for precision medicine. During the free time, she likes playing with her two cats!",
    image: "/lab/janice.jpg",
  },
  {
    name: "Ivan Lin",
    description:
      "Ivan is a fourth-year Economics undergraduate at the University of California of Santa Barbara. He holds a strong interest in the fields of Technology and Business and will continue to pursue his goals through the Masters of Technology Management program at UCSB. His current goal is to eventually take his research work and knowledge to start up a successful business in the digital entertainment industry.",
    image: "/lab/ivan.jpg",
  },
  {
    name: "Isabella Pepich",
    description:
      "Isabella Pepich is a fourth-year student at the University of California, Santa Barbara, pursuing a bachelor’s degree in Statistics and Data Science and a Technology Management Certificate. Her academic interests include biostatistics and business. She enjoys conducting research to uncover insights and help solve real-world problems, and plans to pursue graduate studies in biostatistics, business data analytics, or a related data-driven field. In her free time, she enjoys weightlifting and exploring new matcha cafés.",
    image: "/lab/isabella.jpeg",
  },
  {
    name: "Divya Subramonian",
    description:
      "Divya is a third-year undergraduate at the University of California, Santa Barbara pursuing a bachelor’s degree in Computer Science. Her interests lie in machine learning and human-computer interaction, and she hopes leverage her skills to contribute to AI for healthcare or content discovery and recommendation systems research. Upon graduating, she aims to pursue a Master’s degree and expand her expertise in machine learning. In her free time, she loves to dance, bake, and go on hikes with friends and family!",
    image: "/lab/divya.jpg",
  },
  {
    name: "Masoom Suchdeo",
    description:
      "Masoom is a PhD student in Technology management at UCSB. Prior to arriving at UCSB, he was a predoctoral researcher at Haas School of Business, UC Berkeley where he used ethnography and field experimentation to study gender and remote work. Masoom is currently studying interdisciplinary innovation in emergent technologies, identifying mechanisms that lead to scientific and technological breakthroughs.",
    image: "/lab/masoom.jpg",
  },
  {
    name: "Sean Wang",
    description:
      "Sean is a third-year Statistics and Data Science major at the University of California, Santa Barbara with significant hands-on experience in the realms of software development, data analytics, and machine learning. He enjoys exploring complex systems and developing strategic solutions for a variety of applications and hobbies. His intended career trajectory lies at the intersection of finance and technology, which he aims to further throughout his undergraduate and graduate studies.",
    image: "/lab/sean.jpg",
  },
  {
    name: "Aaron Tang",
    description:
      "Aaron is a third-year Statistics and Data Science student. His research interest is mainly focused on machine learning, but he is also really interested in leveraging data to inform the entertainment industry. After graduation, he hopes to further his education in data science and continue honing his skills. Outside of school, he loves spending time with family and friends.",
    image: "/lab/aaron.jpg",
  },
  {
    name: "Fan Ye",
    description:
      "Fan Ye is a fourth-year Actuarial Science and Economics student at the University of California, Santa Barbara. His research interest focuses on the intersection of drug development, public policy, and health insurance. Upon graduating, he hopes to pursue further education in economics, specializing in insurance economics.",
    image: "/lab/fan.jpg",
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
        <main className="flex-grow max-w-5xl mx-auto px-6 py-8">
          <section className="mt-8">
            <h1 className="text-3xl font-bold mb-4">Health Innovation Lab (HIL)</h1>
             <h2 className="text-lg font-semibold mt-4">About</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
               Health Innovation Lab is co-directed by Dr. Sukhun Kang, <a href="https://www.barbosu.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">Dr. Sandra Barbosu</a>, and <a href="https://sungyongchang.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">Dr. Sungyong Chang</a>.
              </li>
              <li>
                The Health Innovation Lab serves as an integrated environment for research in the area of strategy and management with focus on the healthcare sectors. 
                We explore the intricate ways in which technology influences innovation, aiming to identify the key drivers and obstacles to technology adoption and its effects on individuals, firms, and our society.
                We also investigate the broader implications of technology and innovation, with an emphasis on how technology alters firm strategy and behavior. 
              </li>
            </ul>
            
            <h2 className="text-lg font-semibold mt-4">What I Look For</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                I am usually looking for research assistants to help me on ongoing research projects, 
                especially those with data analytics skills (e.g., Stata, R, Python). Econometric training 
                including exposure to quasi-experimental research designs is also preferred.
              </li>
              <li>
                If you are interested, please email me at 
                <a href="mailto:sukhunkang@ucsb.edu" className="text-blue-600 hover:text-blue-800 transition-colors duration-200"> sukhunkang@ucsb.edu </a> 
                with a short introduction and attach your resume/CV with an indication of your proficiency 
                with the tools mentioned above.
              </li>
            </ul>

          </section>
          <section className="mt-8">
            <h2 className="text-2xl text-center my-12 font-semibold">Current Members</h2>
            <div>
              {members.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl text-center my-12 font-semibold">Lab Alumni</h2>
            <ul className="list-disc list-outside pl-6">
              <li>Kuan-I (Brian) Lu (UCSB, Actuarial Science, 2025), Research Associate, MIT MS in Business Analytics</li>
              <li>Pramukh Shankar (UCSB, Data Science and Economics, 2025), Americorps Forest Corps</li>
              <li>Carter Kulm (UCSB, Data Science, 2025), UT Austin MS in Data Science</li>
              <li>Amy Ji (UCSB, Data Science and Economics, 2025), IQVIA</li>
              <li>Pranav Hegde (UCSB, Mathematics, 2025), Capital Group</li>
            </ul>
        </section>
        </main>
      </div>
    );
}

// test commit
