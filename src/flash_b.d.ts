import { Readable$ } from '@ctx-core/store';
import { flash_queue_ctx_I } from './flash_queue_b';
export interface flash_ctx_I extends flash_queue_ctx_I {
    flash?: flash_T;
}
export declare const flash_b: import("@ctx-core/object").Be<flash_ctx_I, "flash">;
export interface $flash_T {
    flash_message?: string;
    flash_error?: any;
}
export interface flash_T extends Readable$<$flash_T> {
}
