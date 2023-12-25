import type { Ctx } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	flash_queue$_,
	flash_queue_,
	flash_queue__set,
]:be_sig_triple_T<flash_queue_T>
export { flash_queue$_ as flash_queue__ }
export type flash_queue_T = {
	flash__add:typeof flash__add
	flash__shift:typeof flash__shift
	flash_message__add:typeof flash_message__add
	flash_error__add:typeof flash_error__add
	flash_expire__cancel:typeof flash_expire__cancel
}[]
export function flash__add(ctx:Ctx, val:unknown):void
export function flash__shift(ctx:Ctx):void
export function flash_message__add(ctx:Ctx, flash_message:unknown, rest?:unknown):void
export function flash_error__add(ctx:Ctx, flash_error:unknown, rest?:unknown):void
export function flash_expire__cancel(ctx:Ctx):void
