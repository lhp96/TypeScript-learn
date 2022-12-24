/* _____________ Your Code Here _____________ */

// type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer P) => any
//   ? (...args: [...P, A]) => ReturnType<Fn>
//   : never

type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer Args) => infer ReturnType
  ? (...args: [...Args, A]) => ReturnType
  : Fn