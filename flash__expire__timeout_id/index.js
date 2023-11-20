import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { be_ } from 'ctx-core/all'
import { flash$_ } from '../flash/index.js'
import { flash_queue_ } from '../flash_queue/index.js'
import { flash_timeout } from '../flash_timeout/index.js'
export const [
	flash__expire__timeout_id$_,
	flash__expire__timeout_id_,
] = be_computed_pair_(be_(ctx=>
	computed_(flash$_(ctx), ()=>
		setTimeout(flash_queue_(ctx).flash__shift, flash_timeout))),
{ id: 'flash__expire__timeout_id' })
export {
	flash__expire__timeout_id$_ as flash__expire__timeout_id__,
	flash__expire__timeout_id$_ as flash_expire_timeout_id__,
	flash__expire__timeout_id$_ as flash_expire_timeout_id$_,
}
