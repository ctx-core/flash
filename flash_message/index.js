import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { flash_ } from '../flash/index.js'
export const [
	flash_message$_,
	flash_message_,
] = id_be_memo_pair_(
	'flash_message',
	ctx=>
		flash_(ctx)?.flash_message ?? null)
export { flash_message$_ as flash_message__ }
