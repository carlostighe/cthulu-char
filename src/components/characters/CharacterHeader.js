const CharacterHeader = ({ revokeToken, characterData }) => {
  return (
    <div className="header">
      <div className="row">
        <button id="signout_button" onClick={revokeToken}>
          SO
        </button>

        <div>
          {characterData.name} ({characterData.age} - {characterData.sex})
        </div>
      </div>
      <div className="row">
        {characterData.occupation} - {characterData.archetype}
      </div>
    </div>
  );
};

export default CharacterHeader;
