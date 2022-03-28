import { CommonStringField, Spread  } from './share'
import { IPropsEditModel } from './propsEdit'



export interface IDisplayModel  {
    id: string;
    component: string;
    props: CommonStringField<IPropsEditModel>;
    children?: IDisplayModel[];
}