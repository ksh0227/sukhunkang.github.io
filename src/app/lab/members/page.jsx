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

const Members = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {members.map((member, index) => (
        <ProfileCard key={index} {...member} />
      ))}
    </div>
  );
};

export default Members;
