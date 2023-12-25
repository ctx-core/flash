import { be_memo_pair_ } from 'ctx-core/rmemo'
import { flash_ } from '../flash/index.js'
export const [
	flash_error$_,
	flash_error_,
] = be_memo_pair_(ctx=>
	flash_(ctx)?.flash_error ?? null,
{ id: 'flash_error' })
export {
	flash_error$_ as flash_error__,
}
