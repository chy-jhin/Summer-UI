const routerList: Array<any> = [
  {
    path: "Avatar",
    component: () => import('../components/Avatar/index.vue'),
    meta: {
      title: "Avatar",
      type: 'simple',
      name: "头像"
    }
  },
  {
    path: "Button",
    component: () => import('../components/Button/index.vue'),
    meta: {
      title: "Button",
      type: 'simple',
      name: "按钮"
    }
  },
  {
    path: "Card",
    component: () => import('../components/Card/index.vue'),
    meta: {
      title: "Card",
      type: 'simple',
      name: "卡片"
    }
  },
  {
    path: "Input",
    component: () => import('../components/Input/index.vue'),
    meta: {
      title: "Input",
      type: 'simple',
      name: "输入框"
    }
  },
  {
    path: "Icon",
    component: () => import('../components/Icon/index.vue'),
    meta: {
      title: "Icon",
      type: 'simple',
      name: "字体图标"
    }
  },
  {
    path: "Ellipsis",
    component: () => import('../components/Ellipsis/index.vue'),
    meta: {
      title: "Ellipsis",
      type: 'simple',
      name: "文本省略"
    }
  },
  {
    path: "Tag",
    component: () => import('../components/Tag/index.vue'),
    meta: {
      title: "Tag",
      type: 'simple',
      name: "标签"
    }
  },
  {
    path: "Switch",
    component: () => import('../components/Switch/index.vue'),
    meta: {
      title: "Switch",
      type: 'simple',
      name: "开关"
    }
  },
  {
    path: "Time",
    component: () => import('../components/Time/index.vue'),
    meta: {
      title: "Time",
      type: 'simple',
      name: "时间"
    }
  },
  {
    path: "Image",
    component: () => import('../components/Image/index.vue'),
    meta: {
      title: "Image",
      type: 'simple',
      name: "图像"
    }
  },
  {
    path: "Badge",
    component: () => import('../components/Badge/index.vue'),
    meta: {
      title: "Badge",
      type: 'simple',
      name: "角标"
    }
  },
  {
    path: "Modal",
    component: () => import('../components/Modal/index.vue'),
    meta: {
      title: "Modal",
      type: 'simple',
      name: "模态框"
    }
  },
  {
    path: "Message",
    component: () => import('../components/Message/index.vue'),
    meta: {
      title: "Message",
      type: 'simple',
      name: "消息"
    }
  },

  // 复杂组件
  {
    path: "Tabel",
    component: () => import('../components/Tabel/index.vue'),
    meta: {
      title: "Tabel",
      type: 'complex',
      name: "表格"
    }
  },
  {
    path: "Tabs",
    component: () => import('../components/Tabs/index.vue'),
    meta: {
      title: "Tabs",
      type: 'complex',
      name: "标签页"
    }
  },
  {
    path: "Menu",
    component: () => import('../components/Menu/index.vue'),
    meta: {
      title: "Menu",
      type: 'complex',
      name: "菜单栏"
    }
  },
  {
    path: "DynamicTags",
    component: () => import('../components/DynamicTags/index.vue'),
    meta: {
      title: "DynamicTags",
      type: 'complex',
      name: "动态标签"
    }
  },
  {
    path: "ColorPicker",
    component: () => import('../components/ColorPicker/index.vue'),
    meta: {
      title: "ColorPicker",
      type: 'complex',
      name: "颜色选择器"
    }
  },
  {
    path: "TreeSelect",
    component: () => import('../components/TreeSelect/index.vue'),
    meta: {
      title: "TreeSelect",
      type: 'complex',
      name: "树型选择器"
    }
  },
];
export default routerList