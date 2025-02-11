import Image from "next/image";

export default function Teaching() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-64 py-8">
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Instructor</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                <span className="font-semibold">TMP120: Fundamentals of Business Strategy</span>
                <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                  <li>UCSB Undergraduate, 2023-Present</li>
                  <li>Teaching Evaluation: 4.5 / 5 (2023-2024)</li>
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
                      "Professor Kang is one of the only classes that does not put me to sleep."
                    </li>
                    <li>
                      "Amazing professor – really loved taking the class with him and I do think that him teaching it made the 
                      material more enjoyable to learn."
                    </li>
                    <li>
                      "My king. His class has been my favorite at UCSB thus far. He is very supportive and inspirational. 
                      It is definitely a tough course and there is no easy A, especially when it comes to participation 
                      and speaking up in class, but Professor Kang was amazing."
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </section>

          {/* images */}
          {/* <section className="mt-8">
            <div className="flex justify-center gap-4">
              <img src="test.jpg" alt="Classroom Group 1" className="w-1/2 shadow-md" />
              <img src="test.jpg" alt="Classroom Group 2" className="w-1/2 shadow-md" />
            </div>
          </section> */}

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
