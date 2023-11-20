import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { flash_queue$_ } from '../flash_queue/index.js'
/** @typedef {import('@ctx-core/object').be_computed_pair_T} */
/** @type {import('./index.d.ts').flash_T} */
export const [
	flash$_,
	flash_,
] = /** @type {be_computed_pair_T<flash_T>} */be_computed_pair_(
	ctx=>flash_queue$_(ctx),
	flash_queue=>
		nullish__none_([flash_queue], ()=>
			flash_queue[0]),
	{ id: 'flash' })
export { flash$_ as flash__ }
