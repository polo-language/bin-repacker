export type MoveCallback = (
    itemId: string,
    fromBinId: string | null,
    toBinId: string | null,
    stage: string,
    action: string
) => void

export class NoSolutionError extends Error {
  constructor(m: string) {
    super(m)
    // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, NoSolutionError.prototype)
  }
}
    
export { Bin }  from './repack/bin'
export { Analysis, ItemAnalysis }  from './repack/analysis'
export { Item }  from './repack/item'
export { repack, packNew, unMove } from './repacker'
export { remove, removeAll } from './repack/remove'
export { fill } from './repack/fill'
export { slotSwap } from './repack/slot-swap'
export { shiftOverslots } from './repack/shift-slots'
export {
    packFeasibility,
    validateBins,
    itemAccounting,
    ErrorHandler,
    ThrowingErrorHandler
} from './repack/validation'
export { Move } from './sequence/move'
export { sequence } from './sequence/sequencer'
export { selectCovering } from './repack/covering'
export { Range, selectRangeCovering } from './repack/covering-max'
