import InputBar from "./InputBar.js";
import ButtonsWrapper from "./ButtonsWrapper.js";

export default function CalcWrapper(props){

    const {result, onButtonClick, onEqualBtnClick, onClearBtnClick} = props;

    return(
        <div className="mainWrapper">
            <InputBar result={result} />
            <ButtonsWrapper onButtonClick={onButtonClick} onEqualBtnClick={onEqualBtnClick} onClearBtnClick={onClearBtnClick} />
        </div>
    )
}