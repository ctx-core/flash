import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { flash_T } from './flash_b'
import { flash_b } from './flash_b'
import type { flash_error_T } from './flash_error_b'
import { flash_error_b } from './flash_error_b'
import type { flash_expire_timeout_id_T } from './flash_expire_timeout_id_b'
import { flash_expire_timeout_id_b } from './flash_expire_timeout_id_b'
import type { flash_message_T } from './flash_message_b'
import { flash_message_b } from './flash_message_b'
import type { flash_queue_T } from './flash_queue_b'
import { flash_queue_b } from './flash_queue_b'
export interface flash_ctx_I {
	flash?:flash_T
	flash_error?:flash_error_T
	flash_expire_timeout_id?:flash_expire_timeout_id_T
	flash_message?:flash_message_T
	flash_queue?:flash_queue_T
	flash_b_h?:flash_b_h_T
}
export interface flash_b_h_T {
	get flash():flash_T
	get flash_error():flash_error_T
	get flash_expire_timeout_id():flash_expire_timeout_id_T
	get flash_message():flash_message_T
	get flash_queue():flash_queue_T
}
export function flash_b_h_b(ctx:flash_ctx_I):B<flash_ctx_I, 'flash_b_h'> {
	return _b('flash_b_h', ()=>{
		return {
			get flash() { return flash_b(ctx) },
			get flash_error() { return flash_error_b(ctx) },
			get flash_expire_timeout_id() { return flash_expire_timeout_id_b(ctx) },
			get flash_message() { return flash_message_b(ctx) },
			get flash_queue() { return flash_queue_b(ctx) }
		}
	})
}