import { Input } from '@material-ui/core';


export default function InputBar(props){
    return(
        <>
            <Input className="marginSpace" placeholder="Placeholder" value={props.result}/>
        </>
    )
}