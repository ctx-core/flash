import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { flash$_b } from './flash$_b';
const key = 'flash_error$';
export const flash_error$_b = be_(key, ctx => derived$(flash$_b(ctx), $flash => $flash === null || $flash === void 0 ? void 0 : $flash.flash_error));
//# sourceMappingURL=src/flash_error$_b.js.map