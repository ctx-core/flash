import { tap } from '@ctx-core/function'
import { _b, assign, clone } from '@ctx-core/object'
import { get, Writable, writable } from '@ctx-core/store'
import { flash_expire_timeout_id_b } from './flash_expire_timeout_id_b'
export const flash_queue_b = _b<flash_queue_type>('flash_queue', ctx=>{
	const flash_queue = writable<$flash_queue_type>([]) as flash_queue_type
	return assign(flash_queue, {
		add_flash,
		shift_flash,
		add_flash_message,
		add_flash_error,
		cancel_flash_expire,
	})
	function mutate_flash(fn) {
		flash_queue.update(
			$flash_queue=>
				tap($flash_queue.slice(),
					out_$flash_queue=>
						fn(out_$flash_queue)
				)
		)
	}
	function add_flash(flash_ctx) {
		mutate_flash(
			$flash_queue=>
				$flash_queue.push(flash_ctx))
	}
	function shift_flash() {
		mutate_flash(
			flash_queue=>
				flash_queue.shift())
	}
	function add_flash_message(flash_message, rest?) {
		add_flash(clone(rest, {
			flash_message,
		}))
	}
	function add_flash_error(flash_error, rest?) {
		add_flash(clone(rest, {
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
export interface flash_queue_type extends Writable<$flash_queue_type> {
	add_flash:(flash_ctx:any)=>void
	shift_flash:()=>void
	add_flash_message:(flash_message:any, rest?:any)=>void
	add_flash_error:(flash_error:any, rest?:any)=>void
	cancel_flash_expire:()=>void
}
