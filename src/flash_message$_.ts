import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash$_ } from './flash$_.js'
export const flash_message$_:B<flash_message$_T> = be_('flash_message$', ctx=>
	computed$(flash$_(ctx), flash=>flash?.flash_message))
export type flash_message$_T = ReadableAtom$<string|undefined>
