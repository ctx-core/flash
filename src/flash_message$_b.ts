import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash$_b } from './flash$_b.js'
import type { flash_Ctx } from './flash_Ctx.js'
const key = 'flash_message$'
export const flash_message$_b:B<flash_Ctx, typeof key> = be_(key, ctx=>
	derived$(flash$_b(ctx), $flash=>$flash?.flash_message))
export type flash_message$_T = Readable$<string|undefined>
