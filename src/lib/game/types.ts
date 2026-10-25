export type Direction = 'up' | 'down' | 'left' | 'right'
export type Status = 'start' | 'playing' | 'won'

export type Position = { x: number, y: number }
export type Cell = { kind: 'void' } | { kind: 'wall' } | { kind: 'floor' } | { kind: 'goal', who: string }
export type Piece = { id: string, pos: Position }

export type RawLevel = { name: string, bitmap: string[] }
export type Level = { name: string, cells: Cell[][], pieceStart: Piece[] }
export type GameState = { pieces: Piece[], status: Status, level: Level }
