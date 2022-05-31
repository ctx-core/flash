import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash_queue__ } from './flash_queue__.js'
export const flash__:B<ReadableAtom_<flash_T>> = be_('flash__', ctx=>
	computed_(flash_queue__(ctx),
		flash_queue=>flash_queue?.[0]))
export interface flash_T {
	flash_message?:string
	flash_error?:any
}
export { flash__ as flash$_ }
