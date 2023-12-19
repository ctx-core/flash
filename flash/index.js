/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { nullish__none_ } from 'ctx-core/function'
import { flash_queue$_ } from '../flash_queue/index.js'
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
