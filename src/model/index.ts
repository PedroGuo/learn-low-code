import { Spread, Merge, SetOptional } from "./share";
import { IMaterialModel } from "./material";
import { IDisplayModel } from "./display";

export * from "./dataSource";
export * from "./propsEdit";
export * from "./display";
export * from "./material";

export type ModelData = Spread<Merge<IMaterialModel, IDisplayModel>>
