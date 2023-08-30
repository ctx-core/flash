import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { flash_queue_ } from '../flash_queue/index.js'
/** @typedef {import('@ctx-core/object').val__be_computed_pair_T}val__be_computed_pair_T */
/** @type {import('./index.d.ts').flash_T}flash_T */
export const [
	flash$_,
	flash_,
] = /** @type {val__be_computed_pair_T<flash_T>} */val__be_computed_pair_(
	'flash', ctx=>
		nullish__none_([flash_queue_(ctx)],
			flash_queue=>flash_queue[0]))
export { flash$_ as flash__ }
