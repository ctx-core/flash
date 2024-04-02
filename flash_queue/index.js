/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { tap } from 'ctx-core/function'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
import { flash__expire__timeout_id_ } from '../flash__expire__timeout_id/index.js'
export const [
	flash_queue$_,
	flash_queue_,
	flash_queue__set,
] = /** @type {be_sig_triple_T<flash_queue_T>} */
id_be_sig_triple_(
	'flash_queue',
	()=>[])
export { flash_queue$_ as flash_queue__ }
/**
 * @param {ctx_T}ctx
 * @param {(flash_queue:flash_queue_T)=>unknown}fn
 */
export function flash__mutate(ctx, fn) {
	flash_queue__set(ctx, tap(
		flash_queue_(ctx).slice(),
		flash_queue=>fn(flash_queue)))
}
/**
 * @param {ctx_T}ctx
 * @param {unknown}val
 */
export function flash__add(ctx, val) {
	flash__mutate(ctx, flash_queue=>
		flash_queue.push(val))
}
/**
 * @param {ctx_T}ctx
 */
export function flash__shift(ctx) {
	flash__mutate(ctx, flash_queue=>
		flash_queue.shift())
}
/**
 * @param {ctx_T}ctx
 * @param {unknown}flash_message
 * @param {unknown}[rest]
 */
export function flash_message__add(ctx, flash_message, rest) {
	flash__add(ctx, {
		...rest,
		flash_message,
	})
}
/**
 * @param {ctx_T}ctx
 * @param {unknown}flash_error
 * @param {unknown}[rest]
 */
export function flash_error__add(ctx, flash_error, rest) {
	flash__add(ctx, {
		...rest,
		flash_error,
	})
}
/**
 * @param {ctx_T}ctx
 */
export function flash_expire__cancel(ctx) {
	window.clearTimeout(flash__expire__timeout_id_(ctx))
}
