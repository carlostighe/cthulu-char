import CharacterCharacteristics from "./CharacterCharacteristics";
import CharacterHeader from "./CharacterHeader";
import CharacterImage from "./CharacterImage";
import background from "../../images/cthulu_background_charactersheet.png";

const CharacterSheet = ({ revokeToken, characterData }) => {
  return (
    <div
      className="container character-sheet"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        aspectRatio: 3 / 2,
      }}
    >
      <CharacterHeader
        revokeToken={() => revokeToken}
        characterData={characterData}
      />
      <CharacterCharacteristics
        characteristics={characterData.characteristics}
      />
      <CharacterImage characterData={{ characterData }} />
    </div>
  );
};

export default CharacterSheet;
