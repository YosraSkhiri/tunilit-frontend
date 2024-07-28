import { type MutableRefObject, type RefCallback } from 'react';

type MutableRefList<T> = Array<RefCallback<T> | MutableRefObject<T> | undefined | null>;

function setRef<T>(value: T, ...refs: MutableRefList<T>): void {
  refs.forEach((ref) => {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref != null) {
      ref.current = value;
    }
  });
}

export default setRef
