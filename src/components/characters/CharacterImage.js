import Stats from "./Stats";
import image from "../../images/cthulu-image_200.png";
const CharacterImage = ({ characterData }) => {
  console.log("{characterData} ", { characterData });
  return (
    <div
      className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-contain uk-margin-bottom-large"
      uk-img={true}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="uk-grid uk-width-1-1 uk-height-1-1 uk-margin-bottom-large">
        <div className="uk-flex uk-flex-column uk-width-1-3 uk-flex-between">
          <Stats name="Luck" statMax={99} statCurrent={characterData.luck} />
          <Stats
            name="HP's"
            statMax={characterData.hp}
            statCurrent={characterData.currentHP}
          />
        </div>
        <div className="uk-width-1-3"></div>
        <div className="uk-flex uk-flex-column uk-width-1-3 uk-flex-between	uk-margin-large-small">
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
    </div>
  );
};

export default CharacterImage;
