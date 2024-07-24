import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import HomeRouter from "./router/HomeRouter";

function App() {
  return (
    <>
      <ThemeProvider>
        <HomeRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
