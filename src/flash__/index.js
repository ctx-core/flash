import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { flash_queue__ } from '../flash_queue__/index.js'
/** @type {typeof import('./index.d.ts').flash__} */
export const flash__ = be_('flash__', ctx=>
	computed_(flash_queue__(ctx), (flash_queue)=>flash_queue?.[0]))
export { flash__ as flash$_ }
