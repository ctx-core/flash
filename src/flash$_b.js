import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { flash_queue$_b } from './flash_queue$_b';
const key = 'flash$';
export const flash$_b = be_(key, ctx => derived$(flash_queue$_b(ctx), $flash_queue => $flash_queue === null || $flash_queue === void 0 ? void 0 : $flash_queue[0]));
//# sourceMappingURL=src/flash$_b.js.map