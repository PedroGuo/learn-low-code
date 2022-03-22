export type PropEditType = 'string' | 'number' | 'select'

export interface PropsDes {
    label: string;
    value: any;
    type: PropEditType
    options?: any;
}

export interface MaterialComponentProps {
    [key:string]: PropsDes
}

export interface Material {
    id: string;
    name: string;
    icon: string;
    component: string;
    props:MaterialComponentProps;
    children?: Material[];
}
export const data: Partial<Material>[]= [
    {
      name: "图片",
      icon: "icon-tupian",
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
        },
      },
    },
    {
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
    },
  ];