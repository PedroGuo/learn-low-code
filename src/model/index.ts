import { Spread, Merge, SetOptional } from "./share";
import { MaterialModel } from "./material";
import { DisplayModel } from "./display";
import { DataSource } from "./dataSource";

export * from "./dataSource";
export * from "./propsEdit";
export * from "./display";
export * from "./material";

type BaseModel = Merge<MaterialModel, DisplayModel>;

export type ModelData = Spread<SetOptional<Merge<BaseModel, DataSource>, "dataSource">;>
