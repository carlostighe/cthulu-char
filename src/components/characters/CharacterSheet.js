import CharacterCharacteristics from "./CharacterCharacteristics";
import CharacterHeader from "./CharacterHeader";
import CharacterImage from "./CharacterImage";
import CharacterImageCard from "./CharacterImageCard";
import background from "../../images/cthulu_background_charactersheet.png";

const CharacterSheet = ({ revokeToken, characterData }) => {
  return (
    <div>
      {/* <div className="uk-flex uk-flex-column uk-height-1-1"> */}
      <div className="uk-flex container character-sheet uk-height-1-1">
        <CharacterImageCard characterData={characterData} />
      </div>
    </div>
  );
};

export default CharacterSheet;

/* <div class="uk-container-expand">
  <div class="uk-flex uk-flex-column uk-height-1-1">
    <div class="app-row uk-background-primary"></div>
    <div class="app-row uk-background-success"></div>
    <div class="app-row uk-background-warning"></div>
  </div>
</div>; */
