import React from "react";

const ProfileCard = ({ name, description, image }) => {
  return (
    <div className="flex items-center space-x-6 my-8">
      <img
        src={image}
        alt={name}
        className="w-64 h-64 object-cover shadow-md"
      />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
