import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash$_ } from './flash$_.js'
import { flash_queue$_ } from './flash_queue$_.js'
import { flash_timeout } from './flash_timeout.js'
export const flash_expire_timeout_id$_:B<flash_expire_timeout_id$_T> = be_('flash_expire_timeout_id$', ctx=>{
	const flash_expire_timeout_id =
		computed$(
			flash$_(ctx),
			()=>
				setTimeout(flash_queue$_(ctx).shift_flash, flash_timeout)
		)
	return flash_expire_timeout_id
})
export type flash_expire_timeout_id$_T = ReadableAtom$<NodeJS.Timeout>
