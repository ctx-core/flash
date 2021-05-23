import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash_b } from './flash_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash_message'
export const flash_message_b = _b<flash_Ctx, typeof key>(key, ctx=>
	derived$(flash_b(ctx), $flash=>$flash?.flash_message))
export type $flash_message_T = string|undefined
export interface flash_message_T extends Readable$<$flash_message_T> {}
