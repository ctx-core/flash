import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { flash$_b } from './flash$_b';
const key = 'flash_message$';
export const flash_message$_b = be_(key, ctx => derived$(flash$_b(ctx), $flash => $flash === null || $flash === void 0 ? void 0 : $flash.flash_message));
//# sourceMappingURL=src/flash_message$_b.js.map