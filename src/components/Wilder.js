import React from "react";

import blank_profile from "../assets/blank_profile.png";
import Skill from "./Skill";
import ButtonValider from './ButtonValider';
function Wilder({ name, skills, city}) {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <h4>City: {city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
            <Skill key={index} skill={skill.title} votes={skill.votes} />
        ))}
      </ul>
      <ButtonValider/>
    </article>
  );
}

export default Wilder;
