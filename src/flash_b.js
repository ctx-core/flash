import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { flash_queue_b } from './flash_queue_b';
const key = 'flash';
export const flash_b = _b(key, ctx => derived$(flash_queue_b(ctx), $flash_queue => $flash_queue === null || $flash_queue === void 0 ? void 0 : $flash_queue[0]));
