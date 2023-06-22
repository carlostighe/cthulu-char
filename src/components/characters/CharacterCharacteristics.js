import Characteristic from "./Characteristic";

const CharacterCharacteristics = ({ characteristics }) => {
  return (
    // <div className="uk-flex uk-flex-center uk-text-center" uk-grid>
    <div className="uk-flex uk-flex-middle uk-flex-wrap">
      {characteristics ? (
        Object.keys(characteristics).map((char, index) => (
          <Characteristic
            key={index}
            char={char}
            index={index}
            val={characteristics[char]}
          />
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default CharacterCharacteristics;
