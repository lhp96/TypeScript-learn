/* _____________ Your Code Here _____________ */

type PickByType<T extends object, U> = {
  [K in keyof T as (T[K] extends U ? K : never)]: T[K]
}