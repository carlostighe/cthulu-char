import image from "../../images/cthulu-image.png";

const CharacterImage = ({ characterData }) => {
  return (
    <div className="image-row">
      <div className="row">
        <img
          src={image}
          alt="floating skull in helmet in jungle background"
        ></img>
      </div>
    </div>
  );
};

export default CharacterImage;
