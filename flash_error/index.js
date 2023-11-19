import { be_computed_pair_ } from '@ctx-core/nanostores'
import { flash_ } from '../flash/index.js'
export const [
	flash_error$_,
	flash_error_,
] = be_computed_pair_(ctx=>{
	const flash = flash_(ctx)
	return flash ? flash.flash_error : null
})
	.config({ id:'flash_error'})
export {
	flash_error$_ as flash_error__,
}
