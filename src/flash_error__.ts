import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash__ } from './flash__.js'
export const flash_error__:B<ReadableAtom_<any>> = be_('flash_error__', ctx=>
	computed_(flash__(ctx), flash=>flash ? flash.flash_error : null))
export { flash_error__ as flash_error$_ }
