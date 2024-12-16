import { FormEvent } from 'react';
import {useForm} from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import LabelInput from '@/Components/LabelInput';

export default function CreateChannel() {
    const { data, setData, post, errors } = useForm({
        name: "",
        amount: 1,
    });
  
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/create');
  
        data.name = "";
        data.amount = 1;
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='container' style={{border: '1px solid black',borderRadius: '10px', padding: '15px', width: '400px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                {errors && <h3>{errors.name}</h3>}
                <h1>Add new channel</h1>
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                    <LabelInput type="text" labelType='create' labelName='Name' name="name" value={data.name} fun={setData}/>
                    <LabelInput type="number" labelType='create' labelName='Amount' name="amount" value={data.amount} fun={setData}/>
                    <PrimaryButton type="submit" style={{textAlign: 'center', backgroundColor: 'green'}}>Submit</PrimaryButton>
                </form>
                <PrimaryButton onClick={(e) => window.location.href='/'} style={{margin: '20px 0'}}>Cancel</PrimaryButton>
            </div>
        </div>
    );
}
