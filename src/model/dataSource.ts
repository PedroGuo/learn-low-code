import { CommonStringField } from './share'

export interface OriginType {
    type: 'origin';
    fetchType: 'ajax' | 'fetch' | 'jsonp';
    url: string;
    methods: 'get' | 'post';
    params?: CommonStringField<any>;
  }
  
  export interface LocalType {
    type: 'local'
  }


  export type DataSource =  {
    dataSource: OriginType | LocalType
  }