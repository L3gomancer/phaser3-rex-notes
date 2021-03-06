import SetChild from './SetChild.js';
import GetChildrenWidth from './GetChildrenWidth.js';
import GetChildrenHeight from './GetChildrenHeight.js';
import ResetChildPosition from './ResetChildPosition.js';
import Layout from './Layout.js';
import ChildrenMaskMethods from '../utils/ChildrenMaskMethods.js';

var methods = {
    setChild: SetChild,
    getChildrenWidth: GetChildrenWidth,
    getChildrenHeight: GetChildrenHeight,
    resetChildPosition: ResetChildPosition,
    layout: Layout
};

Object.assign(
    methods,
    ChildrenMaskMethods
);

export default methods;