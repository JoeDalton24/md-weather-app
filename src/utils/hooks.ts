import { useCallback, useState } from "react";

interface InitialResult {
  error: null;
  loading: false;
  result: null;
}
interface PendingResult {
  error: null;
  loading: true;
  result: null;
}
interface SuccessResult<T> {
  error: null;
  loading: false;
  result: T;
}
interface PromiseError extends Error {
  code: string;
}
interface ErrorResult {
  error: PromiseError;
  loading: false;
  result: null;
}
export type PromiseResult<T> =
  | InitialResult
  | PendingResult
  | SuccessResult<T>
  | ErrorResult;
export function useAsync<T, Args extends unknown[]>(
  asyncTask: (...args: Args) => Promise<T>,
  deps: unknown[]
): PromiseResult<T> & { run: (...args: Args) => Promise<T> } {
  const [promiseResult, setPromiseResult] = useState<PromiseResult<T>>({
    error: null,
    loading: false,
    result: null,
  });

  const run = useCallback(async (...args: Args) => {
    setPromiseResult({ result: null, loading: true, error: null });
    try {
      const result = await asyncTask(...args);
      setPromiseResult({ result, loading: false, error: null });
      return result;
    } catch (e) {
      console.error(e);
      setPromiseResult({ result: null, loading: false, error: e });
      throw Error(e);
    }
  }, deps);

  return { run, ...promiseResult };
}
