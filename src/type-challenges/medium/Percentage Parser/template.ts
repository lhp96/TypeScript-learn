/* _____________ Your Code Here _____________ */

type PercentageParser<A extends string, Sign = ''>
  = A extends `${infer S extends '+' | '-'}${infer P}`
    ? PercentageParser<P, S>
    : A extends `${infer Q}%`
      ? [Sign, Q, '%']
      : [Sign, A, '']
