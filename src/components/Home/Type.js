import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Android Engineer",
          "React Native Developer",
          "UI/UX Designer",
          "Python Developer",
          "Closed Source Contributor",
          "StackOverflow Helper",
          "Github Star Contributor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
