type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X>
    ? X extends PromiseLike<any>
        ? MyAwaited<X>
        : X
    : never

// 新内容：PromiseLike