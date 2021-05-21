import { Readable$ } from '@ctx-core/store';
import { flash_Ctx } from './flash_b';
export interface flash_error_Ctx extends flash_Ctx {
    flash_error?: flash_error_T;
}
export declare const flash_error_b: import("@ctx-core/object").Be<flash_error_Ctx, "flash_error">;
export declare type $flash_error_T = any;
export interface flash_error_T extends Readable$<$flash_error_T> {
}
