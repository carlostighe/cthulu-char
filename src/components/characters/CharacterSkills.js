import CharacterSkill from "./CharacterSkill";
import CombatItem from "./CombatItem";

const CharacterSkills = ({ characterData }) => {
  return (
    <div className="uk-card uk-card-default uk-width-1-1 uk-height-viewport">
      <div className="uk-card-header">
        <div className="uk-flex uk-flex-middle uk-flex-row">
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-text-center">
              COMBAT
            </h3>
          </div>
        </div>
        <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-wrap-stretch uk-flex-row">
          <div className="uk-flex side-pad uk-flex-row uk-flex-expand">
            <CombatItem
              name="Damage Bonus"
              val={characterData.characteristics}
            />
            <CombatItem name="Build" val={characterData.characteristics} />
            <CombatItem name="Dodge" val={characterData.characteristics.dex} />
          </div>
        </div>
      </div>
      <div className="uk-card-body little-pad ">
        <div className="uk-container uk-flex uk-flex-middle uk-flex-wrap">
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
