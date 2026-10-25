import type { RawLevel, Level, Cell, Piece, GameState } from './types'

export function parseLevel(raw: RawLevel): Level {
    const cells: Cell[][] = []
    const pieces: Piece[] = []

    for(let i = 0; i < raw.bitmap.length; i++){
        cells.push([])
        for(let j = 0; j < raw.bitmap[i].length; j++){
            const char: string = raw.bitmap[i][j]

            switch(char){
                case ' ':
                    cells[i].push({ kind: 'floor' })
                break
                case '#':
                    cells[i].push({ kind: 'wall' })
                break
                default:
                    if(/^[A-Z]$/.test(char)){
                        cells[i].push({ kind: 'floor' })
                        pieces.push({ id: char, pos: {x: j, y: i}})
                    }
                    else if(/^[a-z]$/.test(char)){
                        cells[i].push({ kind: 'goal', who: char.toUpperCase() })
                    }
                    else{
                        cells[i].push({ kind: 'void' })
                    }
            }
        }
    }

    return {
        name: raw.name,
        cells: cells,
        pieceStart: pieces
    }
}

export function newGame(level: Readonly<Level>): GameState {
    return {
        pieces: level.pieceStart,
        status: 'start',
        level: level
    }
}