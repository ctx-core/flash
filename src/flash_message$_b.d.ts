import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { flash_Ctx } from './flash_Ctx';
declare const key = "flash_message$";
export declare const flash_message$_b: B<flash_Ctx, typeof key>;
export declare type flash_message_T = string | undefined;
export interface flash_message$_T extends Readable$<flash_message_T> {
}
export {};
