import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10">
        
        {/* pic and cv */}
        <div className="text-center p-4">
          <div className="w-[300px] h-[400px] m-auto relative overflow-hidden drop-shadow-xl">
            <img
              src="sukhun.jpg"
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

        {/* bio */}
        <div className="max-w-xl text-md">
          <div className="mt-2">
            <p>
              I am an Assistant Professor of Technology Management at{" "}
              <a href="https://www.tmp.ucsb.edu/" target="_blank" className="underline">
                University of California Santa Barbara
              </a>.
            </p>
            <br></br>
            <p>
              My research interests are in innovation and entrepreneurship with a particular focus on
              biopharmaceutical and high-tech industry. For more information, please look at the{" "}
              <a href="/research" className="underline">projects</a> and the{" "}
              <a href="/lab" className="underline">lab</a>.
            </p>
            <br></br>
            <p>
              I received a Ph.D in Strategy and Entrepreneurship from the London Business School. My
              dissertation was recognized as a finalist for the 2024 AOM STR/TIM Outstanding Dissertation
              Awards, 2022 Organization Science/INFORMS Dissertation Proposal Competition, a runner-up
              for 2024 ISA Giarrantani Rising Star Award, and by the Strategic Research Foundation (SRF)
              Dissertation Grant Program and the Sir James Ball PhD Prize.
            </p>
            <br></br>
            <p>
              I hold a BS in Computer Engineering from the University of Illinois and Master's degrees from
              the University of Southern California in Computer Engineering and Entrepreneurship & Innovation.
              Outside of academia, I worked as a semiconductor engineer at Samsung Electronics and led an Internet
              startup in 2010. These roles afforded me a diverse set of experiences, from designing products to
              managing a venture, which informs my research.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
