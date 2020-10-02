import { writable, derived, get, Writable } from '@ctx-core/store'
import { _b, assign, clone } from '@ctx-core/object'
import { tap, _andand } from '@ctx-core/function'
export type $type__queue__flash = object[]
export interface type__queue__flash extends Writable<$type__queue__flash> {
	add__flash:(ctx__flash:any)=>void
	shift__flash:()=>void
	add__message__flash:(message__flash:any, rest?:any)=>void
	add__error__flash:(error__flash:any, rest?:any)=>void
	cancel__expire__flash:()=>void
}
export const b__queue__flash = _b<type__queue__flash>('__queue__flash', ctx=>{
	const __queue__flash = writable<$type__queue__flash>([]) as type__queue__flash
	return assign(__queue__flash, {
		add__flash,
		shift__flash,
		add__message__flash,
		add__error__flash,
		cancel__expire__flash,
	})
	function mutate__flash(fn) {
		__queue__flash.update(
			queue__flash=>
				tap(queue__flash.slice(),
					queue__flash__=>
						fn(queue__flash__)
				)
		)
	}
	function add__flash(ctx__flash) {
		mutate__flash(
			queue__flash=>
				queue__flash.push(ctx__flash))
	}
	function shift__flash() {
		mutate__flash(
			queue__flash=>
				queue__flash.shift())
	}
	function add__message__flash(message__flash, rest?) {
		add__flash(clone(rest, {
			message__flash,
		}))
	}
	function add__error__flash(error__flash, rest?) {
		add__flash(clone(rest, {
			error__flash,
		}))
	}
	function cancel__expire__flash() {
		window.clearTimeout(
			get(b__id__timeout__expire__flash(ctx))
		)
	}
})
export const __queue__flash = b__queue__flash()
export const {
	add__flash,
	shift__flash,
	add__message__flash,
	add__error__flash,
	cancel__expire__flash,
} = __queue__flash
export let timeout__flash = 10000
export const b__flash = _b('__flash', ctx=>
	derived(b__queue__flash(ctx), _andand(0)))
export const __flash = b__flash()
export const b__message__flash = _b('__message__flash', ctx=>
	derived(b__flash(ctx), _andand('message__flash')))
export const __message__flash = b__message__flash()
export const b__error__flash = _b('__error__flash', ctx=>
	derived(b__flash(ctx), _andand('error__flash')))
export const __error__flash = b__error__flash()
export const b__id__timeout__expire__flash = _b('__id__timeout__expire__flash', ctx=>{
	const __id__timeout__expire__flash =
		derived(
			b__flash(ctx),
			()=>
				setTimeout(shift__flash, timeout__flash)
		)
	return __id__timeout__expire__flash
})
export const __id__timeout__expire__flash = b__id__timeout__expire__flash()
