import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash_b } from './flash_b'
import { flash_timeout } from './flash_timeout'
import { flash_queue_b } from './flash_queue_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash_expire_timeout_id'
export const flash_expire_timeout_id_b = _b<flash_Ctx, typeof key>(key, ctx=>{
	const flash_queue = flash_queue_b(ctx)
	const flash_expire_timeout_id =
		derived$(
			flash_b(ctx),
			()=>
				setTimeout(flash_queue.shift_flash, flash_timeout)
		)
	return flash_expire_timeout_id
})
export type $flash_expire_timeout_id_T = NodeJS.Timeout
export interface flash_expire_timeout_id_T extends Readable$<$flash_expire_timeout_id_T> {}
