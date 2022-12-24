/* _____________ Your Code Here _____________ */

type AppendToObject<T, U extends string, V>
  = {
    [P in (keyof T | U)]: P extends keyof T ? T[P] : V
  } 