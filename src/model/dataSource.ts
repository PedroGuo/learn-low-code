import { CommonStringField, Spread } from "./share";

export interface IOriginType {
  type: "origin";
  fetchType: "ajax" | "fetch" | "jsonp";
  url: string;
  method: "GET" | "POST";
  headers?: any;
  params?: CommonStringField<any>;
  ContentType?: "json" | "formData";
  willFetch?: boolean;
}

export interface ILocalType {
  type: "local";
  fields: string;
}

export interface ResponseData {
  data: any;
  success: boolean;
  msg: string;
}

interface FetchHandlerType {
  ajax(params: IOriginType): Promise<ResponseData>;
  fetch(params: IOriginType): Promise<ResponseData>;
  jsonp(params: IOriginType): Promise<ResponseData>;
}


function normalizationFetchParams(
  method: IOriginType["method"],
  params: any,
  ContentType: IOriginType["ContentType"]
) {
  if (method === "GET") {
    let queryString = "";
    if (params) {
      for (const key in params) {
        queryString += `${key}=${params[key]}`;
      }
    }
    return queryString;
  }

  if (method === "POST") {
    switch (ContentType) {
      case "formData":
        const formData = new FormData();
        if (params) {
          for (const key in params) {
            formData.append(key, params[key]);
          }
        }
        return formData;
      case "json":
        return params && JSON.stringify(params);
    }
  }
}

const DEFAULT_DATA_SOURCE_OPTIONS: Partial<IOriginType> = {
  ContentType: "json",
  headers: {
    "Content-Type": "application/json",
  },
}

export class DataSourceItem {
  status = false;
  error: any;
  private _data: ResponseData["data"];
  static handler: FetchHandlerType = {};
  private options: IOriginType;

  constructor(options: IOriginType) {
    this.options = {
      ...DEFAULT_DATA_SOURCE_OPTIONS,
      ...options,
    };
    this.loadData();
  }

  get data() {
    return this._data;
  }

  

  async loadData() {
    this._data = await this.fetchHandler(this.options);
  }

  private async fetchHandler(params: IOriginType) {
    try {
      const result = await DataSourceItem.handler[params.fetchType](params);
      // TODO 参数规则匹配
      this.status = true;
      return result.data;
    } catch (error) {
      this.status = false;
      this.error = error;
      throw error
    }
  }
}

DataSourceItem.handler["ajax"] = function (fetchOptions) {
  return new Promise((resolve) => {
    resolve({ data: 'hello', success: true, msg: ''})
  });
};

DataSourceItem.handler["fetch"] = async function (fetchOptions) {
  const { url, method, headers, ContentType, params } = fetchOptions;
  const payload = normalizationFetchParams(method, params, ContentType);
  let fetchParams: any;
  if (method === "GET") {
    fetchParams = {
      url: `${url}?${payload}`,
      method,
      headers,
      mode: 'cors', // no-cors, *cors, same-origin
    }
  }
  if (method === "POST") {
    fetchParams = {
      url,
      method,
      headers,
      mode: 'cors', // no-cors, *cors, same-origin
      body: payload,
    }
  }
  const response = await fetch(fetchParams!.url, fetchParams);
  return response.json();
};

DataSourceItem.handler["jsonp"] = function (fetchOptions) {
  return new Promise((resolve) => {
    resolve({ data: 'hello', success: true, msg: ''})
  });
};

