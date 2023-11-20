import { be_computed_pair_ } from '@ctx-core/nanostores'
import { flash$_ } from '../flash/index.js'
export const [
	flash_message$_,
	flash_message_,
] = be_computed_pair_(ctx=>flash$_(ctx),
	flash=>flash?.flash_message ?? null,
	{ id: 'flash_message' })
export { flash_message$_ as flash_message__ }
