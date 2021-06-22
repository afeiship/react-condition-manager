import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CLASS_NAME = 'react-condition-manager';

export default class ReactConditionManager extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * You condition list.
     */
    items: PropTypes.array,
    /**
     * The container tag name.
     */
    nodeName: PropTypes.any,
    /**
     * If use react.framgment.
     */
    virtual: PropTypes.bool,
    /**
     * Return the only view when condition is truthy.
     */
    only: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    only: false,
    nodeName: 'div',
    virtual: false
  };

  get onlyView() {
    const { items, children } = this.props;
    const idx = items.findIndex(Boolean);
    return children[idx] || null;
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
    const { nodeName, items, children, virtual, only, ...props } = this.props;
    const _nodeName = virtual ? React.Fragment : nodeName;
    return React.createElement(_nodeName, {
      children: this.children,
      ...props
    });
  }
}
