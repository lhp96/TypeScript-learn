type MyReadonly2<T, K extends keyof T = keyof T> = {
  +readonly [P in K]: T[P]
} & {
    [Q in keyof T as (Q extends K ? never : Q)]: T[Q]
}


// 2个先后不能对调 一个加readonly，第二个其实是Omit