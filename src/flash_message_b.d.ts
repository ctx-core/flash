import { Readable$ } from '@ctx-core/store';
import { flash_ctx_I } from './flash_b';
export interface flash_message_ctx_I extends flash_ctx_I {
    flash_message?: flash_message_T;
}
export declare const flash_message_b: import("@ctx-core/object").Be<flash_message_ctx_I, "flash_message">;
export declare type $flash_message_T = string | undefined;
export interface flash_message_T extends Readable$<$flash_message_T> {
}
