import Button from '@mui/material/Button';


export default function Buttons(props){
    const {key, children, onButtonClick}  = props;
    return(
        <Button key={key} variant="contained" value={children} onClick={(value)=> onButtonClick(value)} >{children}</Button>
    )
}