import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { flash$_b } from './flash$_b.js'
import { flash_queue$_b } from './flash_queue$_b.js'
import { flash_timeout } from './flash_timeout.js'
const key = 'flash_expire_timeout_id$'
export const flash_expire_timeout_id$_b:B<flash_expire_timeout_id$_T> = be_(key, ctx=>{
	const flash_queue$ = flash_queue$_b(ctx)
	const flash_expire_timeout_id =
		computed$(
			flash$_b(ctx),
			()=>
				setTimeout(flash_queue$.shift_flash, flash_timeout)
		)
	return flash_expire_timeout_id
})
export type flash_expire_timeout_id$_T = ReadableAtom$<NodeJS.Timeout>
