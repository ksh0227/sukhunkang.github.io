import Image from "next/image";
import Script from "next/script";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-12 xl:px-48 py-10">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-5XRGPSLYNT`}></Script>
              <Script id="google-analytics">
                {
                  `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-5XRGPSLYNT');
                  `
                }
              </Script>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-screen-lg">
        <div className="text-center flex flex-col items-center">
          <div className="w-64 h-80 md:w-72 md:h-96 relative overflow-hidden drop-shadow-xl">
            <Image
              src="/sukhun.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <a
            href="https://www.dropbox.com/scl/fi/7ig3640wv8ratddydr9uy/Sukhun-Kang-CV.pdf?rlkey=f7sruuwo8mk10jvn4a6xxodg6&e=1&dl=0"
            target="_blank"
            className="mt-4 inline-block px-6 py-2 bg-black text-white font-semibold border-2 border-black transition 
                      hover:bg-white hover:text-black hover:border-black"
          >
            CV
          </a>
        </div>

        {/* Bio Section */}
        <div className="max-w-xl text-md text-left">
          <p>
            I am an Assistant Professor of Technology Management at{" "}
            <a href="https://www.tmp.ucsb.edu/" target="_blank" className="underline">
              University of California Santa Barbara
            </a>.
          </p>
          <br />
          <p>
            My research interests are in innovation and entrepreneurship with a particular focus on
            biopharmaceutical and high-tech industries. For more details, check out my{" "}
            <a href="/research" className="underline">projects</a> and{" "}
            <a href="/lab" className="underline">lab</a>.
          </p>
          <br />
          <p>
            I received a Ph.D in Strategy and Entrepreneurship from the London Business School. My
            dissertation was recognized as a finalist for the 2024 AOM STR/TIM Outstanding Dissertation
            Awards, 2022 Organization Science/INFORMS Dissertation Proposal Competition, and was a
            runner-up for the 2024 ISA Giarrantani Rising Star Award. It was also supported by the
            Strategic Research Foundation (SRF) Dissertation Grant Program and the Sir James Ball PhD Prize.
          </p>
          <br />
          <p>
            I hold a BS in Computer Engineering from the University of Illinois and Master's degrees from
            the University of Southern California in Computer Engineering and Entrepreneurship & Innovation.
            Outside of academia, I worked as a semiconductor engineer at Samsung Electronics and led an Internet
            startup in 2010. These roles provided me with a diverse set of experiences, from designing products
            to managing a venture, which informs my research.
          </p>
        </div>

      </div>
      
    </main>
  );
}
