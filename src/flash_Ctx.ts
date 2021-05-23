import type { flash_T } from './flash_b'
import type { flash_queue_T } from './flash_queue_b'
import type { flash_expire_timeout_id_T } from './flash_expire_timeout_id_b'
import type { flash_error_T } from './flash_error_b'
import type { flash_message_T } from './flash_message_b'
export interface flash_Ctx {
	flash?:flash_T
	flash_error?:flash_error_T
	flash_expire_timeout_id?:flash_expire_timeout_id_T
	flash_message?:flash_message_T
	flash_queue?:flash_queue_T
}
