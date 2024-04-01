/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { flash_queue_ } from '../flash_queue/index.js'
export const [
	flash$_,
	flash_,
] = /** @type {be_memo_pair_T<flash_T>} */
id_be_memo_pair_(
	'flash',
	ctx=>
		nullish__none_([flash_queue_(ctx)],
			flash_queue=>
				flash_queue[0]))
export { flash$_ as flash__ }
