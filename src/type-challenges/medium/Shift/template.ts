/* _____________ Your Code Here _____________ */

type Shift<T extends any[]> = T extends [infer P, ...infer Q] ? Q : T