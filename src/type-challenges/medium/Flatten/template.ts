type Flatten<Array> = Array extends [...infer P, infer Q]
  ? Q extends any[] 
    ? [...Flatten<P>, ...Flatten<Q>] 
    : [...Flatten<P>, Q]
  : Array