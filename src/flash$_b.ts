import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash_queue$_b } from './flash_queue$_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash$'
export const flash$_b:B<flash_Ctx, typeof key> = be_(key, ctx=>
	derived$(flash_queue$_b(ctx),
		$flash_queue=>$flash_queue?.[0]))
export interface flash_T {
	flash_message?:string
	flash_error?:any
}
export interface flash$_T extends Readable$<flash_T> {}
