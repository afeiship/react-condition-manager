import React, { Fragment, Component } from 'react';

export interface ReactConditionManagerProps {
  as?: any;
  asProps?: any;
  items: any[];
  only?: boolean;
  children?: any;
}

export default class ReactConditionManager extends Component<ReactConditionManagerProps> {
  static defaultProps = {
    items: [],
    only: false,
  };

  get onlyView() {
    const { items, children } = this.props;
    console.log('children: ', children);
    const idx = items.findIndex(Boolean);
    return children![idx] || null;
  }

  get switchView() {
    const { items, children } = this.props;
    const allFalsy = !items.some((item) => item);

    return items.map((item, index) => {
      if (item) {
        return children[index] || children;
      } else {
        if (item === null && allFalsy && children[index]) {
          return children[index];
        }
      }
      return null;
    });
  }

  get children() {
    const { only } = this.props;
    return only ? this.onlyView : this.switchView;
  }

  render() {
    const { as, items, children, only, asProps, ...props } = this.props;
    const AsComponent = as || Fragment;
    return React.createElement(AsComponent!, { children: this.children, ...asProps, ...props });
  }
}
