/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type c = LengthOfString<'kumiko'>
type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]