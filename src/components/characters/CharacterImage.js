import Stats from "./Stats";
import image from "../../images/cthulu-image.png";
const CharacterImage = ({ characterData }) => {
  console.log("{characterData} ", { characterData });
  return (
    <div
      className="image-row"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="stats-section">
        <div className="stats-item">
          <Stats name="Luck" statMax={99} statCurrent={characterData.luck} />
          <Stats
            name="HP's"
            statMax={characterData.hp}
            statCurrent={characterData.currentHP}
          />
        </div>

        <div className="stats-item">
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
