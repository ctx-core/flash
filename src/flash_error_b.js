import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { flash_b } from './flash_b';
const key = 'flash_error';
export const flash_error_b = _b(key, ctx => derived$(flash_b(ctx), $flash => $flash === null || $flash === void 0 ? void 0 : $flash.flash_error));
