import React from "react";

const skillImg = (data) => {
  return (
    <img
      className="skills-img"
      src={require(`../../assets/skills/${data.src}.png`)}
      alt="skillsImage"
    />
  );
};

export default skillImg;
