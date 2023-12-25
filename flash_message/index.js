import { be_memo_pair_ } from 'ctx-core/rmemo'
import { flash_ } from '../flash/index.js'
export const [
	flash_message$_,
	flash_message_,
] = be_memo_pair_(ctx=>
	flash_(ctx)?.flash_message ?? null,
{ id: 'flash_message' })
export { flash_message$_ as flash_message__ }
