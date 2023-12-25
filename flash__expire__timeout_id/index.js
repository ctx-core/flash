import { be_memo_pair_ } from 'ctx-core/rmemo'
import { flash_queue_ } from '../flash_queue/index.js'
import { flash_timeout } from '../flash_timeout/index.js'
export const [
	flash__expire__timeout_id$_,
	flash__expire__timeout_id_,
] = be_memo_pair_(ctx=>
	setTimeout(flash_queue_(ctx).flash__shift, flash_timeout),
{ id: 'flash__expire__timeout_id' })
export {
	flash__expire__timeout_id$_ as flash__expire__timeout_id__,
	flash__expire__timeout_id$_ as flash_expire_timeout_id__,
	flash__expire__timeout_id$_ as flash_expire_timeout_id$_,
}
