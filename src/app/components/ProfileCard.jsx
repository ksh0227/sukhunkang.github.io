import React from "react";

const ProfileCard = ({ name, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 my-8">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-md"
      />
      <div className="text-center md:text-left">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;