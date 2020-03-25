import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

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
    virtual: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    nodeName: 'div',
    virtual: false
  };

  get children() {
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

  render() {
    const { nodeName, items, children, virtual, ...props } = this.props;
    const _nodeName = virtual ? React.Fragment : nodeName;
    return React.createElement(_nodeName, {
      children: this.children,
      ...props
    });
  }
}
