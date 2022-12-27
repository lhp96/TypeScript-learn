/* _____________ Your Code Here _____________ */
// type Merged<P> = {[K in keyof P]: P[K]}
// Merged 在另外一个文件已经有了
type PartialByKeys<T, K extends keyof T = keyof T>
  = Merged<{
    [P in K]+?: T[P]
  } & {
    [Q in keyof T as(Q extends K ? never: Q)]: T[Q]
  }>
