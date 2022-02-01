import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash$_ } from './flash$_.js'
export const flash_error$_:B<flash_error$_T> = be_('flash_error$', ctx=>
	computed$(flash$_(ctx), flash=>flash?.flash_error))
export type flash_error$_T = ReadableAtom$<any>
