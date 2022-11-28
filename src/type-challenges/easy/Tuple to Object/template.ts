type TupleToObject<T extends readonly (string | number)[]> = {
    [P in T[number]]: P
}