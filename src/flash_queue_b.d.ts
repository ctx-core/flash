import { Writable$ } from '@ctx-core/store';
export interface flash_queue_ctx_I {
    flash_queue?: flash_queue_T;
}
export declare const flash_queue_b: import("@ctx-core/object").Be<flash_queue_ctx_I, "flash_queue">;
export declare type $flash_queue_T = object[];
export interface flash_queue_T extends Writable$<$flash_queue_T> {
    add_flash: (flash_ctx: any) => void;
    shift_flash: () => void;
    add_flash_message: (flash_message: any, rest?: any) => void;
    add_flash_error: (flash_error: any, rest?: any) => void;
    cancel_flash_expire: () => void;
}
