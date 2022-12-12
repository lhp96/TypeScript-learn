/* _____________ Your Code Here _____________ */

type TrimRight<S extends string> = S extends `${infer P}${' ' | '\n' | '\t'}`
  ? TrimRight<P>
  : S