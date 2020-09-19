/// <reference types="node" />
import { Writable } from 'svelte/store';
export declare type $type__queue__flash = object[];
export interface type__queue__flash extends Writable<$type__queue__flash> {
    add__flash: (ctx__flash: any) => void;
    shift__flash: () => void;
    add__message__flash: (message__flash: any, rest?: any) => void;
    add__error__flash: (error__flash: any, rest?: any) => void;
    cancel__expire__flash: () => void;
}
export declare const b__queue__flash: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__queue__flash;
export declare const __queue__flash: type__queue__flash;
export declare const add__flash: (ctx__flash: any) => void, shift__flash: () => void, add__message__flash: (message__flash: any, rest?: any) => void, add__error__flash: (error__flash: any, rest?: any) => void, cancel__expire__flash: () => void;
export declare let timeout__flash: number;
export declare const b__flash: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<unknown>;
export declare const __flash: import("svelte/store").Readable<unknown>;
export declare const b__message__flash: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<unknown>;
export declare const __message__flash: import("svelte/store").Readable<unknown>;
export declare const b__error__flash: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<unknown>;
export declare const __error__flash: import("svelte/store").Readable<unknown>;
export declare const b__id__timeout__expire__flash: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<NodeJS.Timeout>;
export declare const __id__timeout__expire__flash: import("svelte/store").Readable<NodeJS.Timeout>;
