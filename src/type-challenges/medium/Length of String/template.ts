/* _____________ Your Code Here _____________ */
// type StringToArray<S extends string> = S extends `${infer P}${infer Q}` ? [P, ...StringToArray<Q>] : []

// type LengthOfString<S extends string> = StringToArray<S>['length']


type LengthOfString<S extends string, Arr extends any[] = []>
  = S extends `${infer P}${infer Q}`
  ? LengthOfString<Q, [...Arr, P]>
  : Arr['length']