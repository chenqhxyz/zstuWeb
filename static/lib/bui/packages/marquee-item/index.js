import BMarqueeItem from '../marquee/src/item';

/* istanbul ignore next */
BMarqueeItem.install = function(Vue) {
  Vue.component(BMarqueeItem.name, BMarqueeItem);
};

export default BMarqueeItem;
