import { _andand } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { flash_queue_b } from './flash_queue_b'
export const flash_b = _b('flash', ctx=>
	derived(flash_queue_b(ctx), _andand(0)))
