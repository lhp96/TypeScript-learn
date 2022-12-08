type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer P}${From}${infer Q}`
    ? `${P}${To}${ReplaceAll<Q, From, To>}`
    : S