import React from "react";

const ProfileCard = ({ name, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 my-8">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-64 h-64 aspect-square object-cover shadow-md"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
