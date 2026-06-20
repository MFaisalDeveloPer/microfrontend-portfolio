import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/slices/appSlice";

function ReduxTest() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <div
      style={{
        padding: "20px",
        background: darkMode ? "#001233" : "#ffffff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>{darkMode ? "Dark Mode ON" : "Dark Mode OFF"}</h2>

      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ReduxTest;