import Characteristic from "./Characteristic";

const CharacterCharacteristics = ({ characteristics }) => {
  return (
    <div className="characteristics">
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
