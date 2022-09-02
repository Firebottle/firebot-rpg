import { Spell } from '../types/equipment';

export const spellList: Spell[] = [
    {
        id: 1,
        rarity: 'basic',
        name: 'Pebble',
        cost: 1,
        damage: '1d3',
        damage_type: 'slashing',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 3,
            fire: 2,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 2,
        rarity: 'rare',
        name: 'Blast',
        cost: 1,
        damage: '1d6',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 3,
            fire: 0,
            water: 3,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 3,
        rarity: 'epic',
        name: 'Beam',
        cost: 1,
        damage: '1d8',
        damage_type: 'piercing',
        properties: ['two-handed', 'ammunition'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 5,
            water: 0,
            light: 10,
            darkness: 0,
        },
    },
    {
        id: 4,
        rarity: 'legendary',
        name: 'Ball',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['two-handed', 'ammunition'],
        range: 180,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 10,
            wind: 0,
            fire: 5,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
];