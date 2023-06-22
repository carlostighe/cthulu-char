import CharacterCharacteristics from "./CharacterCharacteristics";
import Stats from "./Stats";
import background from "../../images/cthulu_background_charactersheet.png";
import image from "../../images/cthulu-image_200.png";

const CharacterCard = ({ characterData }) => {
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
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle uk-grid">
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-text-center">
              {characterData.name} ({characterData.age} - {characterData.sex})
            </h3>
            <p className="uk-text-meta uk-margin-remove-top uk-text-center">
              {characterData.occupation} - {characterData.archetype}
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <div
          className="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-contain"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="uk-flex uk-flex-column uk-width-1-3">
            <Stats name="Luck" statMax={99} statCurrent={characterData.luck} />
            <Stats
              name="HP's"
              statMax={characterData.hp}
              statCurrent={characterData.currentHP}
            />
          </div>
          <div className="uk-flex uk-flex-column uk-width-1-3"></div>
          <div className="uk-flex uk-flex-column uk-width-1-3">
            <Stats
              name="Sanity"
              statMax={characterData.sanity}
              statCurrent={characterData.currentSanity}
            />
            <Stats
              name="MP's"
              statMax={characterData.mp}
              statCurrent={characterData.currentMP}
            />
          </div>
        </div>
        <div className="uk-flex uk-flex-around uk-flex-middle uk-text-center">
          <p>
            Hardened - Ignores Sanity loss
            <br />
            Night vision
            <br />
            Insane Accuracy
            <br />
            Alert
            <br />
            Resipent
          </p>
        </div>
      </div>
      <div className="uk-card-body little-pad">
        <CharacterCharacteristics
          characteristics={characterData.characteristics}
        />
      </div>
    </div>
  );
};
export default CharacterCard;
