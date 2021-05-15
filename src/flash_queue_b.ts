import { tap } from '@ctx-core/function'
import { _b, assign, clone } from '@ctx-core/object'
import { get, Writable$, writable$ } from '@ctx-core/store'
import { flash_expire_timeout_id_b } from './flash_expire_timeout_id_b'
export const flash_queue_b = _b<flash_queue_T>('flash_queue', (ctx:{ flash_queue?:flash_queue_T })=>{
	const flash_queue = writable$<$flash_queue_type>([]) as flash_queue_T
	return assign(flash_queue, {
		add_flash,
		shift_flash,
		add_flash_message,
		add_flash_error,
		cancel_flash_expire,
	})
	function mutate_flash(fn:(val:$flash_queue_type)=>void) {
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
			get(flash_expire_timeout_id_b(ctx))
		)
	}
})
export type $flash_queue_type = object[]
export interface flash_queue_T extends Writable$<$flash_queue_type> {
	add_flash:(flash_ctx:any)=>void
	shift_flash:()=>void
	add_flash_message:(flash_message:any, rest?:any)=>void
	add_flash_error:(flash_error:any, rest?:any)=>void
	cancel_flash_expire:()=>void
}
