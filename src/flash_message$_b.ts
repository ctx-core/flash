import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash$_b } from './flash$_b.js'
const key = 'flash_message$'
export const flash_message$_b:B<flash_message$_T> = be_(key, ctx=>
	derived$(flash$_b(ctx), $flash=>$flash?.flash_message))
export type flash_message$_T = Readable$<string|undefined>
