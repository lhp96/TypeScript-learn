type Trim<S extends string> = 
  S extends `${' ' | '\n' | '\t'}${infer T}` | `${infer T}${' ' | '\n' | '\t'}` 
    ? Trim<T> 
    : S