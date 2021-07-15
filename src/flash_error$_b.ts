import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash$_b } from './flash$_b.js'
import type { flash_Ctx } from './flash_Ctx.js'
const key = 'flash_error$'
export const flash_error$_b:B<flash_Ctx, typeof key> = be_(key, ctx=>
	derived$(flash$_b(ctx), $flash=>$flash?.flash_error))
export type flash_error$_T = Readable$<any>
