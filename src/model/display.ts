import { CommonStringField  } from './share'
import { PropsEditModel } from './propsEdit'



export interface DisplayModel  {
    id: string;
    component: string;
    props: CommonStringField<PropsEditModel>;
    children?: DisplayModel[];
}