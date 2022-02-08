import { Input } from '@mui/material';


export default function InputBar(props){
    return(
        <>
            <Input className="marginSpace" placeholder="Placeholder" value={props.result}/>
        </>
    )
}