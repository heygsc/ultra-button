import UbColor from './ub-color/ub-color.vue'
import UbLight from './ub-light/ub-light.vue'
import UbAni from './ub-ani/ub-ani.vue'
import UbBlack from './ub-black/ub-black.vue'
import UbCyber from './ub-cyber/ub-cyber.vue'
// 引入封装好的组件
const coms = [UbColor,UbLight,UbAni,UbBlack,UbCyber];
// 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用
