import React from 'react';
import './App.css';
import Othello from './components/othello.js';
import {
  SunIcon,
  MoonIcon
} from './components/icons.js';

function App(props) {
  var [theme, setTheme] = React.useState("light");

  const changeTheme = ()=>{
    var themes = {
      "light": "dark",
      "dark": "light"
    }

    document.body.setAttribute("theme",themes[theme]);
    setTheme(themes[theme]);
  }

  return (<div className="App">
    <Othello/>
   
    <div className="darkmode" onClick={changeTheme}>
      {theme=="light"?<SunIcon/>:<MoonIcon/>}
    </div>
    <div className="unescapeLink">
      <a  href="https://coderable.me" target="_blank">Coderable</a>
    </div>
  </div>);
}

export default App;
