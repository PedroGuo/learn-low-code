export type PropEditType = 'string' | 'number' | 'select'


export interface PropsEditModel {
    type: PropEditType
    label: string;
    value: any;
    options?: any;
}



