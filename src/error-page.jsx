import image from "./images/cthulu_error.png";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="uk-width-1-1 uk-height-viewport uk-text-center uk-text-large uk-text-bolder uk-text-danger uk-flex uk-flex-column uk-flex-between uk-flex-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <h1 className="uk-text-danger">Cthulu has infected all. You lose!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>No but there has been an error...</p>
    </div>
  );
}
