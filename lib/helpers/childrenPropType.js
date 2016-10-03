'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tab = require('../components/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabList = require('../components/TabList');

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function childrenPropTypes() /* props, propName */{
  var error = void 0;
  /*
  let tabsCount = 0;
  let panelsCount = 0;
  const children = props[propName];
   React.Children.forEach(children, (child) => {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/rackt/react-tabs/issues/37
    if (child === null) {
      return;
    }
     if (child.type === TabList) {
      React.Children.forEach(child.props.children, (c) => {
        // null happens when conditionally rendering TabPanel/Tab
        // see https://github.com/rackt/react-tabs/issues/37
        if (c === null) {
          return;
        }
         if (c.type === Tab) {
          tabsCount++;
        }
      });
    } else if (child.type.displayName === 'TabPanel') {
      panelsCount++;
    } else {
      error = new Error(
        `Expected 'TabList' or 'TabPanel' but found '${child.type.displayName || child.type}'`
      );
    }
  });
   if (tabsCount !== panelsCount) {
    error = new Error(
      "There should be an equal number of 'Tabs' and 'TabPanels'." +
      `Received ${tabsCount} 'Tabs' and ${panelsCount} 'TabPanels'.`
    );
  }
  */
  return error;
};