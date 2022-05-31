import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash__ } from './flash__.js'
import { flash_queue__ } from './flash_queue__.js'
import { flash_timeout } from './flash_timeout.js'
export const flash_expire_timeout_id__:B<ReadableAtom_<NodeJS.Timeout>> = be_('flash_expire_timeout_id__', ctx=>
	computed_(
		flash__(ctx),
		()=>
			setTimeout(flash_queue__(ctx).shift_flash, flash_timeout)))
export { flash_expire_timeout_id__ as flash_expire_timeout_id$_ }
