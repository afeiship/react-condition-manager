import React, { Fragment, ReactNode } from 'react';

export interface ReactConditionManagerProps {
  as?: any;
  asProps?: any;
  items: any[];
  only?: boolean;
  children?: ReactNode[] | ReactNode;
}

const defaults: ReactConditionManagerProps = {
  as: Fragment,
  asProps: {},
  items: [],
  only: false,
  children: [],
};

// @reference: https://github.com/copilot/c/3f8cda30-1216-43f9-bd4a-78ab00caf4c1

const ReactConditionManager: React.FC<Partial<ReactConditionManagerProps>> = (props) => {
  // 合并默认参数和传入参数
  const {
    as: AsComponent,
    asProps,
    items,
    only,
    children,
    ...restProps
  } = { ...defaults, ...props };

  // 仅显示第一个匹配项
  const onlyView = () => {
    const idx = items.findIndex(Boolean);
    return children![idx] || null;
  };

  // 根据条件显示多个项
  const switchView = () => {
    const allFalsy = !items.some((item) => item);

    return items.map((item, index) => {
      if (item) {
        return children![index] || children;
      } else {
        if (item === null && allFalsy && children![index]) {
          return children![index];
        }
      }
      return null;
    });
  };

  // 根据 only 参数确定显示内容
  const renderChildren = only ? onlyView() : switchView();

  // 创建并返回组件
  return React.createElement(AsComponent, { children: renderChildren, ...asProps, ...restProps });
};

export default ReactConditionManager;
