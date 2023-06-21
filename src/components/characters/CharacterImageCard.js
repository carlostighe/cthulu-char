import CharacterCharacteristics from "./CharacterCharacteristics";
import Stats from "./Stats";
import background from "../../images/cthulu_background_charactersheet.png";
import image from "../../images/cthulu-image_200.png";

const CharacterImageCard = ({ characterData }) => {
  return (
    <div
      className="uk-card uk-card-default uk-width-1-1"
      style={{
        // maxHeight: "none",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        aspectRatio: 3 / 2,
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
          uk-img={true}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {/* <img
            className="uk-border-circle"
            width="40"
            height="40"
            src={image}
            alt="Avatar"
          /> */}
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="uk-card-body">
        <CharacterCharacteristics
          characteristics={characterData.characteristics}
        />
      </div>

      <div className="uk-card-footer">
        <a href="" className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
  );
};
export default CharacterImageCard;
