/// <reference types="node" />
import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { flash_Ctx } from './flash_Ctx';
declare const key = "flash_expire_timeout_id$";
export declare const flash_expire_timeout_id$_b: B<flash_Ctx, typeof key>;
export declare type flash_expire_timeout_id_T = NodeJS.Timeout;
export interface flash_expire_timeout_id$_T extends Readable$<flash_expire_timeout_id_T> {
}
export {};
