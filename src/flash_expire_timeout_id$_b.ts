import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash$_b } from './flash$_b'
import { flash_timeout } from './flash_timeout'
import { flash_queue$_b } from './flash_queue$_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash_expire_timeout_id$'
export const flash_expire_timeout_id$_b = be_<flash_Ctx, typeof key>(key, ctx=>{
	const flash_queue = flash_queue$_b(ctx)
	const flash_expire_timeout_id =
		derived$(
			flash$_b(ctx),
			()=>
				setTimeout(flash_queue.shift_flash, flash_timeout)
		)
	return flash_expire_timeout_id
})
export type flash_expire_timeout_id_T = NodeJS.Timeout
export interface flash_expire_timeout_id$_T extends Readable$<flash_expire_timeout_id_T> {}
