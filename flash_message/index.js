import { be_computed_pair_ } from '@ctx-core/nanostores'
import { flash_ } from '../flash/index.js'
export const [
	flash_message$_,
	flash_message_,
] = be_computed_pair_(ctx=>
	flash_(ctx)?.flash_message ?? null)
	.config({ id: 'flash_message' })
export { flash_message$_ as flash_message__ }
