/* _____________ Your Code Here _____________ */
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, T[K] extends undefined ? undefined : Required<T>[K]]
}[keyof T]