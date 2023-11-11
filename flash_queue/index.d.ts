import type { val__be_atom_triple_T } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare const [
	flash_queue$_,
	flash_queue_,
	flash_queue__set,
]:val__be_atom_triple_T<flash_queue_T>
export { flash_queue$_ as flash_queue__ }
export type flash_queue_T = {
	flash__add:typeof flash__add
	flash__shift:typeof flash__shift
	flash_message__add:typeof flash_message__add
	flash_error__add:typeof flash_error__add
	flash_expire__cancel:typeof flash_expire__cancel
}[]
export function flash__add(ctx:Ctx, val:any):void
export function flash__shift(ctx:Ctx):void
export function flash_message__add(ctx:Ctx, flash_message:any, rest?:any):void
export function flash_error__add(ctx:Ctx, flash_error:any, rest?:any):void
export function flash_expire__cancel(ctx:Ctx):void
