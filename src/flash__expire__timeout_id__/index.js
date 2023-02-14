import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { flash__ } from '../flash__/index.js'
import { flash_queue__ } from '../flash_queue__/index.js'
import { flash_timeout } from '../flash_timeout/index.js'
export const flash__expire__timeout_id__ = be_('flash__expire__timeout_id__', ctx=>
	computed_(
		flash__(ctx),
		()=>
			setTimeout(flash_queue__(ctx).flash__shift, flash_timeout)))
export {
	flash__expire__timeout_id__ as flash_expire_timeout_id__,
	flash__expire__timeout_id__ as flash_expire_timeout_id$_, 
}
