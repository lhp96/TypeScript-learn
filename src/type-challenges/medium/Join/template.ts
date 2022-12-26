type Join<T extends string[], U extends string | number>
  = T extends [infer P extends string, ...infer Q extends string[]]
    ? `${P}${Q extends [] ? '' : U}${Join<Q,U>}`
    : ''