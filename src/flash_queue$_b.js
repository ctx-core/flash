import { tap } from '@ctx-core/function';
import { be_, assign, clone } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
import { flash_expire_timeout_id$_b } from './flash_expire_timeout_id$_b';
const key = 'flash_queue$';
export const flash_queue$_b = be_(key, ctx => {
    const flash_queue = writable$([]);
    return assign(flash_queue, {
        add_flash,
        shift_flash,
        add_flash_message,
        add_flash_error,
        cancel_flash_expire,
    });
    function mutate_flash(fn) {
        flash_queue.update($flash_queue => tap($flash_queue.slice(), out_$flash_queue => fn(out_$flash_queue)));
    }
    function add_flash(val) {
        mutate_flash($flash_queue => $flash_queue.push(val));
    }
    function shift_flash() {
        mutate_flash(flash_queue => flash_queue.shift());
    }
    function add_flash_message(flash_message, rest) {
        add_flash(clone(rest, {
            flash_message,
        }));
    }
    function add_flash_error(flash_error, rest) {
        add_flash(clone(rest, {
            flash_error,
        }));
    }
    function cancel_flash_expire() {
        window.clearTimeout(flash_expire_timeout_id$_b(ctx).$);
    }
});
//# sourceMappingURL=src/flash_queue$_b.js.map