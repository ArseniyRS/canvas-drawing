import React from 'react';
import '../styles/toolbar.scss'
import {brushSVG, circleSVG, eraserSVG, lineSVG, rectSVG, redoSVG, saveSVG, undoSVG} from "../assets";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import Circle from "../tools/Circle";
import Rect from "../tools/Rect";
const Toolbar = () => {
    return (
        <div className={'toolbar'}>
            <div className="toolbar__btn-container">
            <button className={'toolbar__btn'} onClick={()=>toolState.setTool((new Brush(canvasState.canvas)))}><img src={brushSVG} alt=""/></button>
            <button className={'toolbar__btn'} onClick={()=>toolState.setTool((new Rect(canvasState.canvas)))}><img src={rectSVG} alt=""/></button>
            <button className={'toolbar__btn'} onClick={()=>toolState.setTool((new Circle(canvasState.canvas)))}><img src={circleSVG} alt=""/></button>
            <button className={'toolbar__btn'} onClick={()=>toolState.setTool((new Eraser(canvasState.canvas)))}><img src={eraserSVG} alt=""/></button>
            <button className={'toolbar__btn'} onClick={()=>toolState.setTool((new Line(canvasState.canvas)))}><img src={lineSVG} alt=""/></button>
                <input type="color"/>
            </div>
            <div className="toolbar__btn-container">
            <button className={'toolbar__btn'}><img src={saveSVG} alt=""/></button>
            <button className={'toolbar__btn'}><img src={undoSVG} alt=""/></button>
            <button className={'toolbar__btn'}><img src={redoSVG} alt=""/></button>
            </div>
        </div>
    );
};

export default Toolbar;