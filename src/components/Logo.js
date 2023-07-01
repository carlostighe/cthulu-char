import { ReactComponent as CthuluLogo } from '../login2.svg';

function Logo({ onClick, rotation }) {
  return (<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle">
      <div className="uk-width-auto">
        <CthuluLogo
          style={{
            transition: 'transform 1s',
            transform: `rotate(${rotation}deg)`
          }}
          onClick={onClick}
        />
      </div>
    </div>
  </div>)
}


export default Logo;