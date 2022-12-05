/* _____________ Your Code Here _____________ */
type UnPromise<T> = T extends Promise<infer U> ? U : T

declare function PromiseAll<T extends readonly unknown[]>(
  values: readonly [...T]
): Promise<{
  -readonly [K in keyof T]: UnPromise<T[K]>
}>
