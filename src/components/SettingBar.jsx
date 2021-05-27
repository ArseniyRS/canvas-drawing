import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className={'toolbar'} style={{top:40}}>
            <label htmlFor="line-width">Толщина линии</label>
            <input 
                onChange={e=>toolState.setLineWidth(e.target.value)}
                type="number" 
                defaultValue={1} 
                min={1} 
                max={50}/>
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input
                onChange={e=>toolState.setStrokeColor(e.target.value)}
                type="color"
                id={'stroke-color'}/>
        </div>
    );
};

export default SettingBar;