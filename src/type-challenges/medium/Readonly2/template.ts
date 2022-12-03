type MyReadonly2<T, K extends keyof T = keyof T> = {
  +readonly [P in K]: T[P]
} & {
    [Q in keyof T as (Q extends K ? never : Q)]: T[Q]
}

// type MyReadonly2<T, K extends keyof T = keyof T> =
//   Omit<T, K> & {
//     +readonly [P in K]: T[P]
//   }

// 2个先后 可以对调  一个加readonly，第二个其实是Omit