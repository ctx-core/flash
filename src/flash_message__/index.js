import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { flash__ } from '../flash__/index.js'
/** @type {typeof import('./index.d.ts').flash_message__} */
export const flash_message__ = be_('flash_message__', ctx=>
	computed_(
		flash__(ctx),
		flash=>
			flash?.flash_message ?? null))
export { flash_message__ as flash_message$_ }
