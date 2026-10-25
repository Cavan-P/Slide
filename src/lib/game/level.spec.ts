import type { RawLevel, Level } from './types'
import { describe, it, expect } from 'vitest'
import { parseLevel } from './level'

describe('parseLevel', () => {
    const level: RawLevel = {
        "name": "Test level",
        "bitmap": [
            "####",
            "#Aa#",
            "####"
        ]
    }

    it('verifies a level has the correct piece starting points', () => {
        const result: Level = parseLevel(level)
        expect(result.pieceStart).toEqual([{ id: 'A', pos: { x: 1, y: 1 }}])
    })

    it('verifies a level has a name', () => {
        const result: Level = parseLevel(level)
        expect(result.name).toEqual("Test level")
    })

    it('verifies a row of cells', () => {
        const result: Level = parseLevel(level)
        expect(result.cells[0]).toEqual([{ kind: 'wall' }, { kind: 'wall' }, { kind: 'wall' }, { kind: 'wall' }])
    })

    it('verifies a row of cells with a piece in it', () => {
        const result: Level = parseLevel(level)
        expect(result.cells[1]).toEqual([{ kind: 'wall' }, { kind: 'floor' }, { kind: 'goal', who: 'A' }, { kind: 'wall' }])
    })

    it('verifies that two pieces/goals exist in the right spots', () => {
        const result: Level = parseLevel({
            "name": "Another test level",
            "bitmap": [
                "######",
                "#AbBa#",
                "######"
            ]
        })
        expect(result.cells[1]).toEqual([
            { kind: 'wall' },
            { kind: 'floor' },
            { kind: 'goal', who: 'B' },
            { kind: 'floor' },
            { kind: 'goal', who: 'A' },
            { kind: 'wall' }
        ])
        expect(result.pieceStart).toEqual([{ id: 'A', pos: {x: 1, y: 1}}, { id: 'B', pos: {x: 3, y: 1}}])
    })
})