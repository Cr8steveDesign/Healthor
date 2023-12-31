import { useContext, useEffect } from "react";
import "./comp_styles/personalization.css";
import { AppContext } from "./StateProvider";

//Personalization Component for sidebar

const Personalization = () => {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    const color = appState.theme == "Dark" ? "rgb(12, 19, 79)" : "White";
    document.body.style.backgroundColor = color;
  }, [appState.theme]);

  return (
    <div className="personalization-container">
      <hr /> <br />
      <p className="personalization-text">SET RESPONSE LENGTH</p>
      <div className="text-length-container">
        <label htmlFor="short">
          <input
            type="radio"
            name="response-length"
            value={appState.response_length}
            defaultChecked={appState.response_length == "Short"}
            onChange={() =>
              setAppState((appState) => ({
                ...appState,
                response_length: "Short",
              }))
            }
            id="short"
          />{" "}
          SHORT
        </label>
        <label htmlFor="detailed">
          <input
            type="radio"
            name="response-length"
            value={appState.response_length}
            defaultChecked={true}
            onChange={() =>
              setAppState((appState) => ({
                ...appState,
                response_length: "Detailed",
              }))
            }
            id="detailed"
          />{" "}
          DETAILED
        </label>
      </div>
      <br />
      {/* Light Theme Dark Theme */}
      <p className="personalization-text">SET THEME</p>
      <div className="theme-container">
        <label htmlFor="light">
          <input
            type="radio"
            name="theme"
            value={appState.theme}
            defaultChecked={appState.theme == "Light"}
            onChange={() =>
              setAppState((appState) => ({
                ...appState,
                theme: "Light",
              }))
            }
            id="light"
          />{" "}
          LIGHT
        </label>
        <label htmlFor="dark">
          <input
            type="radio"
            name="theme"
            value={appState.theme}
            defaultChecked={appState.theme == "Dark"}
            onChange={() =>
              setAppState((appState) => ({
                ...appState,
                theme: "Dark",
              }))
            }
            id="dark"
          />{" "}
          DARK
        </label>
      </div>
    </div>
  );
};

export default Personalization;
