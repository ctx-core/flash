import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { flash__ } from './flash__.js'
export const flash_message__ = be_<ReadableAtom_<string|null>>('flash_message__', ctx=>
	computed_(flash__(ctx), flash=>flash?.flash_message ?? null))
export { flash_message__ as flash_message$_ }
