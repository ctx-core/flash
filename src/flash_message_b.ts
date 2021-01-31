import { _andand } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { flash_b } from './flash_b'
export const flash_message_b = _b('flash_message', ctx=>
	derived(flash_b(ctx), _andand('flash_message')))
