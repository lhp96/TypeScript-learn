/* _____________ Your Code Here _____________ */

type MyCapitalize<S extends string> = S extends `${infer P}${infer Q}`
  ? `${Uppercase<P>}${Q}`
  : S