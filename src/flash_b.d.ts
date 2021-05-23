import { Readable$ } from '@ctx-core/store';
import type { flash_Ctx } from './flash_Ctx';
export declare const flash_b: import("@ctx-core/object").Be<flash_Ctx, "flash", flash_T>;
export interface $flash_T {
    flash_message?: string;
    flash_error?: any;
}
export interface flash_T extends Readable$<$flash_T> {
}
