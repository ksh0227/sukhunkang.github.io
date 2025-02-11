import Link from "next/link";

export default function Lab() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-72 py-8">

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Health Innovation Lab</h2>
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
            <h2 className="text-2xl font-semibold">Health Innovation Working Group (HIWG)</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Health Innovation Working Group is a student-led research seminar series that focuses on social 
                science research related to the pharmaceutical industry and the healthcare sector. Our goal is to 
                provide a platform for PhD students and junior faculty members in disciplines such as strategy, 
                economics, health policy, entrepreneurship, and innovation (or related fields) to present their 
                working papers and receive feedback from a friendly crowd.
              </li>
              <li>
                If you have a working paper that you would like to present at our seminar series, please don’t 
                hesitate to reach out to me at 
                <a href="mailto:sukhunkang@ucsb.edu" className=""> sukhunkang@ucsb.edu</a>.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Past HIWG Presenters</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
            <li>Sandip Bisui (Colorado / Purdue)</li>
              <li>Sandra Barbosa (NYU)</li>
              <li>Gabriel Cavalli (Toronto)</li>
              <li>Furkan Cetin (Northwestern)</li>
              <li>Alex Everhart (Harvard / WashU)</li>
              <li>Wesley Greenblatt (MIT / Harvard)</li>
              <li>Charu Gupta (UCLA)</li>
              <li>Martin Hetu (Toronto / UC3M)</li>
              <li>Sukhun Kang (LBS / UCSB)</li>
              <li>Caroline Marra (HBS)</li>
              <li>Farnam Mohebi (UC Berkeley)</li>
              <li>Christina Nguyen (MIT)</li>
              <li>Leonardo Ortega (Georgia Tech)</li>
              <li>Grace Park (U of Pennsylvania)</li>
              <li>Hanu Tyagi (U of Minnesota / UIUC)</li>
              <li>Matteo Tranchero (UC Berkeley / UPenn Wharton)</li>
              <li>Shruthi Venkatesh (Carnegie Mellon University)</li>
              <li>Ivan Lin (UCSB)</li>
              <li>Xinyu Liang (INSEAD)</li>
            </ul>
          </section>
          
        </main>
      </div>
    );
}
