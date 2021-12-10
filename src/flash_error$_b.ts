import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash$_b } from './flash$_b.js'
const key = 'flash_error$'
export const flash_error$_b:B<flash_error$_T> = be_(key, ctx=>
	derived$(flash$_b(ctx), $flash=>$flash?.flash_error))
export type flash_error$_T = Readable$<any>
