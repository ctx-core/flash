import { Readable$ } from '@ctx-core/store';
import { flash_queue_Ctx } from './flash_queue_b';
export interface flash_Ctx extends flash_queue_Ctx {
    flash?: flash_T;
}
export declare const flash_b: import("@ctx-core/object").Be<flash_Ctx, "flash", flash_T>;
export interface $flash_T {
    flash_message?: string;
    flash_error?: any;
}
export interface flash_T extends Readable$<$flash_T> {
}
