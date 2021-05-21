import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash_b, flash_Ctx } from './flash_b'
const key = 'flash_message'
export interface flash_message_Ctx extends flash_Ctx {
	flash_message?:flash_message_T
}
export const flash_message_b = _b<flash_message_Ctx, typeof key>(key, ctx=>
	derived$(flash_b(ctx), $flash=>$flash?.flash_message))
export type $flash_message_T = string|undefined
export interface flash_message_T extends Readable$<$flash_message_T> {}
