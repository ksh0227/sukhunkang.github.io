import Image from "next/image";

export default function Teaching() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-72 py-8">
           <section className="mt-8">
              <h2 className="text-2xl font-semibold">Case Studies</h2>
              <ul className="list-disc list-outside pl-6 mt-4 space-y-4">
                <li>
                  <span className="font-semibold">
                    Behind the Scenes of a YouTube Mega-Hit: Baby Shark, The Pinkfong Company, and What's Next
                  </span>
                  <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                    <li>
                      This case explores how The Pinkfong Company transformed a viral video into a global multimedia brand. 
                      This case can be used in courses on Strategy, Corporate Strategy, and Entrepreneurship. 
                      It examines strategic questions around leveraging viral IP, digital platform dependence, and entrepreneurial growth.
                    </li>
                    <li>
                      <a
                        href="https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Link to the case
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
                        
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Instructor</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                <span className="font-semibold">TMP120: Fundamentals of Business Strategy</span>
                <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                  <li>UCSB Undergraduate, 2023-Present</li>
                  <li>Teaching Evaluation: 4.5/5 (Winter 2024); 4.8/5 (Winter 2025).</li>
                  <li>Selected Comments:</li>
                  <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                    <li>
                      "One of my favorite professors I have had! Was very engaging and up to date on real-world knowledge 
                      that I can apply outside of the classroom. Was very accommodating and can really tell he has a passion 
                      for what he is teaching. I enjoyed going to class and participating, and feel I will use this knowledge 
                      beyond this course."
                    </li>
                    <li>
                      "I really learned a lot in this course overall! I think Professor Kang did a great job teaching the class 
                      for the first time, and I liked how interactive this class was. This was the first business class I have 
                      ever taken, and I felt like it was very informative and applicable. Professor Kang clearly has a very strong 
                      background in business, and it showed through his teaching."
                    </li>
                    <li>
                      "Thank you, Professor Kang. Your networks and advice is truly valuable and taking this entry tmp class with you was such a great way to start the program. Your encouragement, hard work, and effort doesn't go unnoticed. Ending this quarter and having our last lecture with you felt bittersweet, thank you for pushing me to do better through the case studies and projects! Feeling inspired after taking your course. Id 100% recomment my friends interested in business to take this class, especially if youre the one teaching it."
                    </li>
                    <li>
                      "Super passionate guy. Participation matters a lot to him but it's really not too challenging. 
                      Easy weekly quizzes and a big group project due at the end. Really well-structured as a intro to business class, trust me take this course with Sukhun. if you show up and pay attention in class I promise you'll do well."
                    </li>
                    <li>
                      "My king. His class has been my favorite at UCSB thus far. He is very supportive and inspirational. 
                      It is definitely a tough course and there is no easy A, especially when it comes to participation 
                      and speaking up in class, but Professor Kang was amazing."
                    </li>
                    <li>
                        "I learned more in this course about businesses and the way the succeed than in my entire life."
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </section>

          {/* images */}
         <section className="mt-8">
  <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4">
    <img src="class1.jpg" alt="Classroom Group 1" className="w-full max-w-lg flex-shrink-0 snap-center shadow-md" />
    <img src="class2.jpg" alt="Classroom Group 2" className="w-full max-w-lg flex-shrink-0 snap-center shadow-md" />
    <img src="class3.jpeg" alt="Classroom Group 3" className="w-full max-w-lg flex-shrink-0 snap-center shadow-md" />
    <img src="class4.jpeg" alt="Classroom Group 4" className="w-full max-w-lg flex-shrink-0 snap-center shadow-md" />
    <img src="class5.jpeg" alt="Classroom Group 5" className="w-full max-w-lg flex-shrink-0 snap-center shadow-md" />
  </div>
</section>


          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Past Teaching Experience</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                <span className="font-semibold">Developing Strategy for Value Creation</span>, LBS Executive Education, Fall 2021
                <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                  <li>Teaching Assistant</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Case Studies in Innovation</span>, USC Iovine and Young Academy, Fall 2015
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
}
