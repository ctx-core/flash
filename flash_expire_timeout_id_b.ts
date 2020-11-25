import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { flash_b } from './flash_b'
import { flash_timeout } from './flash_timeout'
import { flash_queue_b } from './flash_queue_b'
export const flash_expire_timeout_id_b = _b('flash_expire_timeout_id', ctx=>{
	const flash_queue = flash_queue_b(ctx)
	const flash_expire_timeout_id =
		derived(
			flash_b(ctx),
			()=>
				setTimeout(flash_queue.shift_flash, flash_timeout)
		)
	return flash_expire_timeout_id
})
