import { IOriginType, ILocalType } from "./dataSource";
export type PropEditType = 'string' | 'number' | 'select'


// 属性编辑模型
export interface IPropsEditModel {
    type: PropEditType
    label: string;
    value: any;
    options?: any;
    dataSource?: IOriginType | ILocalType | 'origin' | 'local';
}



