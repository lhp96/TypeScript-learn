/* _____________ Your Code Here _____________ */

type Merge<F extends object, S extends object> = {
  [K in keyof F | keyof S]: K extends keyof S
  ? S[K]
  : K extends keyof F
    ? F[K]
    : never
}