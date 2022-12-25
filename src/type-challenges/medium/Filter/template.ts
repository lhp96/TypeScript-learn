/* _____________ Your Code Here _____________ */

type Filter<T extends any[], P>
  = T extends [infer First, ...infer Q]
  ? [...(First extends P ? [First] : []), ...Filter<Q, P>]
  : []