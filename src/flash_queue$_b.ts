import { tap } from '@ctx-core/function'
import { _b, assign, clone } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import { flash_expire_timeout_id$_b } from './flash_expire_timeout_id$_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash_queue$'
export const flash_queue$_b = _b<flash_Ctx, typeof key>(key, ctx=>{
	const flash_queue = writable$<flash_queue_T>([]) as flash_queue$_T
	return assign(flash_queue, {
		add_flash,
		shift_flash,
		add_flash_message,
		add_flash_error,
		cancel_flash_expire,
	})
	function mutate_flash(fn:(val:flash_queue_T)=>void) {
		flash_queue.update(
			$flash_queue=>
				tap($flash_queue.slice(),
					out_$flash_queue=>
						fn(out_$flash_queue)
				)
		)
	}
	function add_flash(val:object) {
		mutate_flash(
			$flash_queue=>
				$flash_queue.push(val))
	}
	function shift_flash() {
		mutate_flash(
			flash_queue=>
				flash_queue.shift())
	}
	function add_flash_message(flash_message:string, rest?:object) {
		add_flash(clone(rest as object, {
			flash_message,
		}) as object)
	}
	function add_flash_error(flash_error:any, rest?:object) {
		add_flash(clone(rest as object, {
			flash_error,
		}))
	}
	function cancel_flash_expire() {
		window.clearTimeout(
			flash_expire_timeout_id$_b(ctx).$
		)
	}
})
export type flash_queue_T = object[]
export interface flash_queue$_T extends Writable$<flash_queue_T> {
	add_flash:(flash_ctx:any)=>void
	shift_flash:()=>void
	add_flash_message:(flash_message:any, rest?:any)=>void
	add_flash_error:(flash_error:any, rest?:any)=>void
	cancel_flash_expire:()=>void
}
