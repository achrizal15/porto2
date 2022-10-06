
import { createContext, useEffect, useReducer } from "react";
import About from "./components/About";
import Home from "./components/Home"
import { ACTION_REDUCER_MODE } from "./constans";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
//context and provider
export const AppContext = createContext();
const AppProvider = AppContext.Provider;
//reducer
const theme = localStorage.getItem("theme")
const INITIAL_APP_MODE = { language: "EN", darkmode: theme === 'false' ? false : true }
const appModeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_REDUCER_MODE.CHANGE_LANGUAGE:
      return { ...state, language: action.payload }
    case ACTION_REDUCER_MODE.CHANGE_MODE:
      return { ...state, darkmode: action.payload }
    default:
      return state
  }
}
function App() {
  const [appMode, dispatch] = useReducer(appModeReducer, INITIAL_APP_MODE)
 
  useEffect(() => {
    localStorage.setItem("theme", appMode.darkmode)
  }, [appMode.darkmode])
  return (
    <AppProvider value={{ appMode, dispatch }}>
      <div className={`${appMode.darkmode && 'dark'} snap-y snap-mandatory`}>
        <Home />
        <About />
        <Projects />
        <Skills/>
      </div>
    </AppProvider>
  );
}

export default App;
