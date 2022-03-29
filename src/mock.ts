import { DisplayModel, MaterialModel, ModelData } from './model';

const material: MaterialModel = {
    name: '图片',
    icon: "icon-tupian"
}

const components: DisplayModel = {
    id: '',
    component: "EXEImg",
    props: {
        imagePath: {
            label: "图片地址",
            type: "string",
            value: "",
          },
          radius: {
            label: "图片圆角",
            type: "number",
            value: 0,
          }
    }
}
 // http://baidu.com

 // {"dataSource":"origin"}

export const data: ModelData[] = [
    {
      id: '123',
      name: "图片",
      icon: "icon-tupian",
      component: "EXEImg",
      props: {
        imagePath: {
          label: "图片地址",
          type: "string",
          value: "",
          dataSource: 'origin'
        },
        radius: {
          label: "图片圆角",
          type: "number",
          value: 0,
        },
      },
    },
    {
      id: '456',
      name: "按钮",
      icon: "icon-button",
      component: "EXEButton",
      props: {
        btnText: {
          label: "按钮文字",
          type: "string",
          value: "",
        },
        btnType: {
          label: "按钮类型",
          type: "select",
          value: "",
          options: {
            data: [{
              value: 'primary',
              label: '主要按钮'
            }, {
              value: 'success',
              label: '成功按钮'
            }]
          },
  
        },
        eventHandleName: {
          label: "点击处理",
          type: "select",
          value: "",
          options: {
            data: [{
              value: 'alert',
              label: '弹窗'
            }, {
              value: 'prompt',
              label: '弹出输入框'
            }]
          },
        },
      },
      // dataSource: {
      //   type: 'origin',
      //   fetchType: 'ajax',
      //   url: 'http://a.com/api/list',
      //   methods: 'get',
      //   params: {
      //     hello: 'a'
      //   }
      // }
    },
  ];