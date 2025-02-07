import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="text-center p-4">
      <div className="w-[300px] h-[400px] mx-auto relative overflow-hidden drop-shadow-xl">
        <Image
          src="/test.jpg"
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
  );
}
