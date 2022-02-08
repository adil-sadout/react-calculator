import Buttons from "./Buttons.js";
import {useEffect} from "react";
import {Button} from '@mui/material';


export default function ButtonsWrapper(props){

    const {onButtonClick, onEqualBtnClick, onClearBtnClick} = props;

    const numberButtons = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        ".",
        "+",
        "-",
        "/",
        "*"
    ];

    

    return(<>
        <div className="buttonsWrapper">
    
            {numberButtons.map(buttonNum => <Buttons key={buttonNum} children={buttonNum} onButtonClick={onButtonClick} /> )}
            <Button onClick={onEqualBtnClick} >=</Button>
            <Button onClick={onClearBtnClick} >Clear</Button>
        </div>
    </>
    )
}