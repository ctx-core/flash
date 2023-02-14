import { tap } from '@ctx-core/function'
import { atom_ } from '@ctx-core/nanostores'
import { be_, clone } from '@ctx-core/object'
import { flash__expire__timeout_id__ } from '../flash__expire__timeout_id__/index.js'
/** @type {typeof import('./index.d.ts').flash_queue__} */
export const flash_queue__ = be_('flash_queue__', ctx=>
	atom_([]))
export { flash_queue__ as flash_queue$_ }
export function flash__mutate(ctx, fn) {
	flash_queue__(ctx).$ = tap(
		flash_queue__(ctx).$.slice(),
		flash_queue=>fn(flash_queue))
}
export function flash__add(ctx, val) {
	flash__mutate(ctx, flash_queue=>flash_queue.push(val))
}
export function flash__shift(ctx) {
	flash__mutate(ctx, flash_queue=>flash_queue.shift())
}
export function flash_message__add(ctx, flash_message, rest) {
	flash__add(ctx, clone(rest, {
		flash_message
	}))
}
export function flash_error__add(ctx, flash_error, rest) {
	flash__add(ctx, clone(rest, {
		flash_error
	}))
}
export function flash_expire__cancel(ctx) {
	window.clearTimeout(flash__expire__timeout_id__(ctx).$)
}
