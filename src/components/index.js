import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    items: PropTypes.array,
    nodeName: PropTypes.any
  };

  static defaultProps = {
    items: [],
    nodeName: 'div'
  };
  /*===properties end===*/

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
    const { nodeName, items, children, ...props } = this.props;
    return createElement(nodeName, {
      children: this.children,
      ...props
    });
  }
}
