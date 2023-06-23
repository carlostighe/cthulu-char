import CharacterSkill from "./CharacterSkill";
import background from "../../images/cthulu_background_charactersheet.png";

const CharacterSkills = ({ characterData }) => {
  return (
    <div
      className="uk-card uk-card-default uk-width-1-1 uk-height-viewport"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="uk-card-body little-pad">
        <div className="uk-flex uk-flex-middle uk-flex-wrap">
          {characterData.skills ? (
            characterData.skills.map((skill, index) => (
              <CharacterSkill
                key={index}
                index={index}
                name={skill.name}
                val={skill.value}
                ticked={skill.ticked}
              />
            ))
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default CharacterSkills;
