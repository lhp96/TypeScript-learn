/* _____________ Your Code Here _____________ */

type Mutable<T extends object> = {
  -readonly [K in keyof T]: T[K]
}