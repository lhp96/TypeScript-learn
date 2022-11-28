import type { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [infer X, ...infer R]
    ? Equal<X, U> extends true ? true : Includes<R, U>
    : false