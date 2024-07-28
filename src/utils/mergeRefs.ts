import { type MutableRefObject, type RefCallback } from 'react';

import setRef from './setRef'

type MutableRefList<T> = Array<RefCallback<T> | MutableRefObject<T> | undefined | null>;

function mergeRefs<T>(...refs: MutableRefList<T>): RefCallback<T> {
	return (value: T) => {
		setRef(value, ...refs)
	}
}

export default mergeRefs
