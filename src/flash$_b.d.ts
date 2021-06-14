import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { flash_Ctx } from './flash_Ctx';
declare const key = "flash$";
export declare const flash$_b: B<flash_Ctx, typeof key>;
export interface flash_T {
    flash_message?: string;
    flash_error?: any;
}
export interface flash$_T extends Readable$<flash_T> {
}
export {};
