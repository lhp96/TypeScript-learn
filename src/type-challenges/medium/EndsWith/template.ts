/* _____________ Your Code Here _____________ */

type EndsWith<T extends string, U extends string> = T extends `${infer P}${U}` ? true : false