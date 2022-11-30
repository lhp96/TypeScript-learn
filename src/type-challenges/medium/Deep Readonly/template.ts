type DeepReadonly<T> = {
  +readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// keyof T[P]，看是否有对象的键