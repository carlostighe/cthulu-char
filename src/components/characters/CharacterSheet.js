import CharacterCard from "./CharacterCard";

const CharacterSheet = ({ revokeToken, characterData }) => {
  return (
    <div className="uk-height-viewport cthulu-font">
      <CharacterCard characterData={characterData} />
    </div>
  );
};

export default CharacterSheet;
