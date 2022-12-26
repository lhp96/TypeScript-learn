/* _____________ Your Code Here _____________ */

type Reverse<T extends any[]>
  = T extends [infer P, ...infer Q]
    ? [...Reverse<Q>, P]
    : T
