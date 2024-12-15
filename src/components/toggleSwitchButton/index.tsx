import "./component.css";

export function ToggleSwitchButton({ switchHandler: switchHandler }: any) {
  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        <input
          className="toggle-checkbox"
          type="checkbox"
          onChange={switchHandler}
        />
        <div className="toggle-button">
          <div className="toggle-button-circles-container">
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
            <div className="toggle-button-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
