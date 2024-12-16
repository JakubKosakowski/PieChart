export interface ChannelData {
    id: number,
    name: string,
    amount: number
}

export interface InputType {
    type: string;
    labelName: string;
    name: string;
    value: string | number;
    labelType: 'create' | 'edit';
    fun: Function;
}