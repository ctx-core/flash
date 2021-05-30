import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash$_b } from './flash$_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash_message$'
export const flash_message$_b = _b<flash_Ctx, typeof key>(key, ctx=>
	derived$(flash$_b(ctx), $flash=>$flash?.flash_message))
export type flash_message_T = string|undefined
export interface flash_message$_T extends Readable$<flash_message_T> {}
