type StringToUnion<S extends string>
 = S extends `${infer P}${infer Q}`
    ? P | StringToUnion<Q>
    : S extends ''
      ? never
      : S