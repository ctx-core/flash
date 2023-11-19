import { tap } from '@ctx-core/function'
import { be_atom_triple_ } from '@ctx-core/nanostores'
import { flash__expire__timeout_id_ } from '../flash__expire__timeout_id/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('./index.d.ts').flash_queue_T} */
export const [
	flash_queue$_,
	flash_queue_,
	flash_queue__set,
] = /** @type {be_atom_triple_T<flash_queue_T>} */be_atom_triple_(()=>
	[])
	.config({ id: 'flash_queue' })
export { flash_queue$_ as flash_queue__ }
/**
 * @param {Ctx}ctx
 * @param {(flash_queue:flash_queue_T)=>any}fn
 */
export function flash__mutate(ctx, fn) {
	flash_queue__set(ctx, tap(
		flash_queue_(ctx).slice(),
		flash_queue=>fn(flash_queue)))
}
/**
 * @param {Ctx}ctx
 * @param {any}val
 */
export function flash__add(ctx, val) {
	flash__mutate(ctx, flash_queue=>
		flash_queue.push(val))
}
/**
 * @param {Ctx}ctx
 */
export function flash__shift(ctx) {
	flash__mutate(ctx, flash_queue=>
		flash_queue.shift())
}
/**
 * @param {Ctx}ctx
 * @param {any}flash_message
 * @param {any}[rest]
 */
export function flash_message__add(ctx, flash_message, rest) {
	flash__add(ctx, {
		...rest,
		flash_message,
	})
}
/**
 * @param {Ctx}ctx
 * @param {any}flash_error
 * @param {any}[rest]
 */
export function flash_error__add(ctx, flash_error, rest) {
	flash__add(ctx, {
		...rest,
		flash_error,
	})
}
/**
 * @param {Ctx}ctx
 */
export function flash_expire__cancel(ctx) {
	window.clearTimeout(flash__expire__timeout_id_(ctx))
}
