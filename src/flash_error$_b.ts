import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { flash$_b } from './flash$_b.js'
const key = 'flash_error$'
export const flash_error$_b:B<flash_error$_T> = be_(key, ctx=>
	computed$(flash$_b(ctx), flash=>flash?.flash_error))
export type flash_error$_T = ReadableAtom$<any>
