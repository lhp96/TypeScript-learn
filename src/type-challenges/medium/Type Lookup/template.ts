type LookUp<U extends object, T> = U extends { type: T } ? U : never

// 返回一个联合类型， x | never 就是 x