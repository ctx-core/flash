import { Writable } from '@ctx-core/store';
export declare const flash_queue_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => flash_queue_type;
export declare type $flash_queue_type = object[];
export interface flash_queue_type extends Writable<$flash_queue_type> {
    add_flash: (flash_ctx: any) => void;
    shift_flash: () => void;
    add_flash_message: (flash_message: any, rest?: any) => void;
    add_flash_error: (flash_error: any, rest?: any) => void;
    cancel_flash_expire: () => void;
}
