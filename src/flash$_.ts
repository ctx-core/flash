import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { flash_queue$_ } from './flash_queue$_.js'
const key = 'flash$'
export const flash$_:B<flash$_T> = be_(key, ctx=>
	computed$(flash_queue$_(ctx),
		flash_queue=>flash_queue?.[0]))
export interface flash_T {
	flash_message?:string
	flash_error?:any
}
export type flash$_T = ReadableAtom$<flash_T>
