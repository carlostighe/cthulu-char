import Stats from "./Stats";
import image from "../../images/cthulu-image_200.png";
const CharacterImage = ({ characterData }) => {
  console.log("{characterData} ", { characterData });
  return (
    <div
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-contain"
      uk-img
      style={{
        height: "220px",
        backgroundImage: `url(${image})`,
      }}
    >
      <div class="uk-grid uk-width-1-1 uk-height-1-1">
        <div class="uk-flex uk-flex-column uk-width-1-3 uk-flex-between	uk-margin-large-small">
          <Stats name="Luck" statMax={99} statCurrent={characterData.luck} />
          <Stats
            name="HP's"
            statMax={characterData.hp}
            statCurrent={characterData.currentHP}
          />
        </div>
        <div class="uk-width-1-3"></div>
        <div class="uk-flex uk-flex-column uk-width-1-3 uk-flex-between	uk-margin-large-small">
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
