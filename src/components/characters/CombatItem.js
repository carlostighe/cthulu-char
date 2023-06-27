const CombatItem = ({ name, val }) => {
  const calcDamageBonus = (combinedStrSize) => {
    switch (true) {
      case combinedStrSize >= 2 && combinedStrSize <= 64:
        return { dmg: -2, build: -2 };
      case combinedStrSize >= 65 && combinedStrSize <= 84:
        return { dmg: -1, build: -1 };
      case combinedStrSize >= 85 && combinedStrSize <= 124:
        return { dmg: "None", build: 0 };
      case combinedStrSize >= 125 && combinedStrSize <= 164:
        return { dmg: "+1d4", build: 1 };
      case combinedStrSize >= 165 && combinedStrSize <= 204:
        return { dmg: "+1d6", build: 2 };
      default:
        return "Invalid value";
    }
  };

  let score = null;
  if (name === "Damage Bonus") {
    score = calcDamageBonus(val.str + val.siz).dmg;
  } else if (name === "Build") {
    score = calcDamageBonus(val.str + val.siz).build;
  } else {
    score = val / 2;
  }

  return (
    <div className="uk-flex uk-width-1-3 little-pad uk-flex-column uk-flex-between">
      <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-flex-stretch">
        <div className="uk-flex uk-flex-middle uk-flex-center uk-width-1-1 uk-text-tiny">
          {name}
        </div>
        <div className="uk-flex uk-flex-center uk-width-1-2">{score}</div>
      </div>
      {name === "Dodge" ? (
        <div className="uk-flex border">
          <div className="uk-text-tiny">
            {score / 2} / {score / 4}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CombatItem;
