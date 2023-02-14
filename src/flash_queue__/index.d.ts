import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const flash_queue__:Be<WritableAtom_<flash_queue_T>>
export type flash_queue_T = object[]
export { flash_queue__ as flash_queue$_ }
export default function flash__add(ctx:Ctx, val:any):void
export default function flash__shift(ctx:Ctx):void
export default function flash_message__add(ctx:Ctx, flash_message:any, rest?:any):void
export default function flash_error__add(ctx:Ctx, flash_error:any, rest?:any):void
export default function flash_expire__cancel(ctx:Ctx):void
