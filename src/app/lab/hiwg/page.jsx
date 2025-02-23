import React from "react";

const Members = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-72 py-8">
        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Health Innovation Working Group (HIWG)</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Health Innovation Working Group (HIWG) Seminar Series is a virtual workshop series that focuses on social 
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
              <li>Giacomo Marchesini (CBS)</li>
            </ul>
          </section>
        </main>
    </div>
  );
};

export default Members;
