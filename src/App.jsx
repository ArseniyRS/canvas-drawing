import React from 'react';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import './styles/app.scss'
const App = () => {
    return (
        <div>
            <Toolbar />
            <SettingBar />
            <Canvas />
        </div>
    );
};

export default App;