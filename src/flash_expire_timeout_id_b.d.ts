/// <reference types="node" />
import { Readable$ } from '@ctx-core/store';
import { flash_ctx_I } from './flash_b';
import { flash_queue_ctx_I } from './flash_queue_b';
export interface flash_expire_timeout_id_ctx_I extends flash_queue_ctx_I, flash_ctx_I {
    flash_expire_timeout_id?: flash_expire_timeout_id_T;
}
export declare const flash_expire_timeout_id_b: import("@ctx-core/object").Be<flash_expire_timeout_id_ctx_I, "flash_expire_timeout_id">;
export declare type $flash_expire_timeout_id_T = NodeJS.Timeout;
export interface flash_expire_timeout_id_T extends Readable$<$flash_expire_timeout_id_T> {
}
