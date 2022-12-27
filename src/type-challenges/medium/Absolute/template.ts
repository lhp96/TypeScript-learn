/* _____________ Your Code Here _____________ */

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Q}` ? Q : `${T}`