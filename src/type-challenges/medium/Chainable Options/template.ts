type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never: K, 
    value: V
  ): Chainable<Omit<T, K> & {[P in K]: V}>
  get(): T
}

// 这道题确实有点难