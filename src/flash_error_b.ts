import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { flash_b } from './flash_b'
import type { flash_Ctx } from './flash_Ctx'
const key = 'flash_error'
export const flash_error_b = _b<flash_Ctx, typeof key>(key, ctx=>
	derived$(flash_b(ctx), $flash=>$flash?.flash_error))
export type $flash_error_T = any
export interface flash_error_T extends Readable$<$flash_error_T> {}
