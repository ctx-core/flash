import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { flash$_ } from '../flash/index.js'
export const [
	flash_error$_,
	flash_error_,
] = be_computed_pair_('flash_error', ctx=>
	computed_(
		flash$_(ctx),
		(flash)=>
			flash ? flash.flash_error : null))
export {
	flash_error$_ as flash_error__,
}
