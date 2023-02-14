import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { flash__ } from '../flash__/index.js'
/** @type {typeof import('./index.d.ts').flash_error__} */
export const flash_error__ = be_('flash_error__', ctx=>
	computed_(
		flash__(ctx),
		(flash)=>
			flash ? flash.flash_error : null))
export { flash_error__ as flash_error$_ }
