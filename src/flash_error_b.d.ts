import { Readable$ } from '@ctx-core/store';
import { flash_ctx_I } from './flash_b';
export interface flash_error_ctx_I extends flash_ctx_I {
    flash_error?: flash_error_T;
}
export declare const flash_error_b: import("@ctx-core/object").Be<flash_error_ctx_I, "flash_error">;
export declare type $flash_error_T = any;
export interface flash_error_T extends Readable$<$flash_error_T> {
}
