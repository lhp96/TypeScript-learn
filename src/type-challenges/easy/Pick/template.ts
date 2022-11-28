type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js  对比学习法
function myPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}

// 1. 返回一个对象
// 2. 遍历forEach  mapped
// 3. todo[key] 取值 indexed
// 4. 看看key 在不在 todo 里面
//   1.keyof lookup
