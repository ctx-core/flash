import { Writable } from '@ctx-core/store';
export declare const flash_queue_b: import("@ctx-core/object").Be<flash_queue_type, object>;
export declare type $flash_queue_type = object[];
export interface flash_queue_type extends Writable<$flash_queue_type> {
    add_flash: (flash_ctx: any) => void;
    shift_flash: () => void;
    add_flash_message: (flash_message: any, rest?: any) => void;
    add_flash_error: (flash_error: any, rest?: any) => void;
    cancel_flash_expire: () => void;
}
