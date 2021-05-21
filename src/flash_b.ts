import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash_queue_b, flash_queue_Ctx } from './flash_queue_b'
const key = 'flash'
export interface flash_Ctx extends flash_queue_Ctx {
	flash?:flash_T
}
export const flash_b = _b<flash_Ctx, typeof key>(key, ctx=>
	derived$(flash_queue_b(ctx),
		$flash_queue=>$flash_queue?.[0]))
export interface $flash_T {
	flash_message?:string
	flash_error?:any
}
export interface flash_T extends Readable$<$flash_T> {}
