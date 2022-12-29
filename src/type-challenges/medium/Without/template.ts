/* _____________ Your Code Here _____________ */
// type WithoutOne<T, U> = T extends [infer P, ...infer Q]
//   ? [...(P extends U ? []: [P]), ...WithoutOne<Q, U>]  
//   : T

// type Without<T extends any[], U>
//   = U extends [infer P, ...infer Q]
//     ? Without<WithoutOne<T, P>, Q>
//     : WithoutOne<T, U>

// 新的解决方法
type Without<T, U>
  = T extends [infer P, ...infer Q]
    ? P extends (U extends unknown[] ? U[number] : U)
      ? Without<Q, U> 
      : [P, ...Without<Q, U>]
    : T