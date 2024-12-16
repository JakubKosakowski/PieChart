import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import { ChangeEvent, FormEvent } from 'react';
import { useForm, router } from '@inertiajs/react';
import { ChannelData, InputType } from '@/interfaces';
import LabelInput from '@/Components/LabelInput';

// function LabelInput(props: InputType) {
//     return (
//         <label style={{margin: "15px 0"}}>
//             {props.labelName}:
//             <input id={props.name} type={props.type} name={props.name} value={props.value}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => props.fun(props.name, props.type === 'text' ? e.target?.value : +e.target?.value)}
//             style={{margin: "0 15px"}}
//             readOnly={props.type === 'text'}/>
//         </label>       
//     )
// }

export default function EditChannel({ channel }: PageProps<{channel: ChannelData}>) {
    const { data, setData, post} = useForm({
        name: channel.name,
        amount: channel.amount
    });
  
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(`/edit/${channel.id}`);
  
        data.name = "";
        data.amount = 1;
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='container' style={{border: '1px solid black',borderRadius: '10px', padding: '15px', width: '400px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <h1>Edit channel</h1>
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                    <LabelInput type="text" labelType='edit' labelName='Name' name="name" value={data.name} fun={setData}/>
                    <LabelInput type="number" labelType='edit' labelName='Amount' name="amount" value={data.amount} fun={setData}/>
                    <PrimaryButton type="submit" style={{textAlign: 'center', backgroundColor: 'green'}}>Submit</PrimaryButton>
                </form>
                <PrimaryButton style={{margin: '20px 0', backgroundColor: 'red'}} onClick={(e) => {router.delete("/edit/" + channel.id)}}>Delete channel</PrimaryButton>
                <PrimaryButton onClick={(e) => window.location.href='/'}>Cancel</PrimaryButton>
            </div>
        </div>
    );
}
