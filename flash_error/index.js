import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { flash_ } from '../flash/index.js'
export const [
	flash_error$_,
	flash_error_,
] = id_be_memo_pair_(
	'flash_error',
	ctx=>
		flash_(ctx)?.flash_error ?? null)
export {
	flash_error$_ as flash_error__,
}
