import { CommonStringField, Spread } from "./share";

export interface IOriginType {
  type: "origin";
  fetchType: "ajax" | "fetch" | "jsonp";
  url: string;
  methods: "get" | "post";
  params?: CommonStringField<any>;
  willFetch?: boolean;
}

export interface ILocalType {
  type: "local";
  fields: string;
}


interface ResponseData {
  data: any
}


const handleMap = {
  ajax(params) {

  },
  fetch(params) {

  },
  jsonp(params) {

  }
}
export class DataSourceItem {
  // status: any;
  // data: ResponseData;
  // error: any;
  private _data: any;

  
  constructor() {
    this.loadData()
  }

  get data() {
    return this._data
  }

  loadData(params) {
    this._data = this.handler(params.type)
  }

  resolveParams() {

  }

  private handler(type: IOriginType['fetchType']) {
    const params = this.resolveParams()
    const result = handleMap[type](params);
    // TODO 参数规则匹配
    return result
  }


}

