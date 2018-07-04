import React, { Component, createElement } from 'react';

import PropTypes from 'prop-types';


export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    items: PropTypes.array,
    nodeName: PropTypes.any,
  };

  static defaultProps = {
    items: [],
    nodeName: 'div'
  };
  /*===properties end===*/

  get children() {
    const { items, children } = this.props;
    return items.map((item, index) => {
      return item ? (children[index] || children) : null;
    });
  }

  render() {
    const { nodeName, items, children, ...props } = this.props;
    return createElement(nodeName, {
      children: this.children,
      ...props,
    });
  }
}
