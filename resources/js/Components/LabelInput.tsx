import { ChangeEvent} from 'react';
import { InputType } from '@/interfaces';

export default function LabelInput(props: InputType) {
    return (
        <label style={{margin: "15px 0"}}>
            {props.labelName}:
            <input id={props.name} type={props.type} name={props.name} value={props.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.fun(props.name, props.type === 'text' ? e.target?.value : +e.target?.value)}
            style={{margin: "0 15px"}}
            readOnly={props.labelType === 'edit' && props.type === 'text'}/>
        </label>       
    )
}