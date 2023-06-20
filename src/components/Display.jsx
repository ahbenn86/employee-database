import React from "react";
import "./Display.css";

//Will display the reults of the retrieved data based on the search field input. 
const Display = (props) => {
  const profiles = props.profiles;
  const search = props.search;

  console.log(profiles, search);
  // const filteredProfiles = profiles.filter((profile) => {
  //   return profile.name.toLowerCase().includes(search);
  // });

  return (
    <div className="text-box">
      <h1>{search}</h1>
      {/* {filteredProfiles.map((profile, i) => {
        return (
          <div key={[i]}>
            <h1>{profile.name}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default Display;
