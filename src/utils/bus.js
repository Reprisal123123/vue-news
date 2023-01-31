import Vue from 'vue';

// const bus로 export 하면 import 할 때 bus 로 이름이 고정됨

// // bus.js
// export const bus = new Vue();

// // App.vue
// import { bus } from './bus.js';

// default로 export 하면 import 할 때 이름을 맘대로 설정 가능
export default new Vue();

// // App.vue
// import B from './bus.js';