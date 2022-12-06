/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends ` ${infer P}`
  ? TrimLeft<P>
  : S extends `\n${infer Q}` | `\t${infer Q}`
    ? TrimLeft<Q>
    : S