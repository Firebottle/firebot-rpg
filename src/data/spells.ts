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
        rarity: 'basic',
        name: 'Blast',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 3,
            fire: 0,
            water: 2,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 3,
        rarity: 'basic',
        name: 'Beam',
        cost: 1,
        damage: '2d3',
        damage_type: 'piercing',
        properties: ['two-handed', 'ammunition'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 3,
            wind: 0,
            fire: 2,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 4,
        rarity: 'basic',
        name: 'Ball',
        cost: 1,
        damage: '1d8',
        damage_type: 'bludgeoning',
        properties: ['two-handed', 'ammunition'],
        range: 180,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 3,
            wind: 0,
            fire: 0,
            water: 2,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 5,
        rarity: 'basic',
        name: 'Tendrils',
        cost: 1,
        damage: '1d3',
        damage_type: 'slashing',
        properties: ['thrown'],
        range: 120,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 2,
            darkness: 3,
        },
    },
    {
        id: 6,
        rarity: 'basic',
        name: 'Ray',
        cost: 1,
        damage: '2d3',
        damage_type: 'piercing',
        properties: ['ammunition'],
        range: 120,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 2,
            darkness: 3,
        },
    },
    {
        id: 7,
        rarity: 'basic',
        name: 'Splash',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 3,
            water: 2,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 8,
        rarity: 'basic',
        name: 'Aura',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 3,
            wind: 2,
            fire: 0,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 9,
        rarity: 'basic',
        name: 'Beacon',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 10,
        rarity: 'basic',
        name: 'Blade',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['light'],
        range: 0,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 2,
            darkness: 3,
        },
    },
    {
        id: 11,
        rarity: 'basic',
        name: 'Cloud',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['two-handed'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 3,
            fire: 0,
            water: 0,
            light: 2,
            darkness: 0,
        },
    },
    {
        id: 12,
        rarity: 'basic',
        name: 'Cone',
        cost: 1,
        damage: '1d6',
        damage_type: 'bludgeoning',
        properties: ['thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 3,
            water: 0,
            light: 2,
            darkness: 0,
        },
    },
    {
        id: 13,
        rarity: 'rare',
        name: 'Conjure Elemental',
        cost: 1,
        damage: '1d6',
        damage_type: 'slashing',
        properties: ['ammunition'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 3,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 14,
        rarity: 'rare',
        name: 'Pebble',
        cost: 1,
        damage: '1d3',
        damage_type: 'slashing',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 3,
            wind: 0,
            fire: 5,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 15,
        rarity: 'rare',
        name: 'Blast',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 3,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 16,
        rarity: 'rare',
        name: 'Beam',
        cost: 1,
        damage: '2d3',
        damage_type: 'piercing',
        properties: ['two-handed', 'ammunition'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 3,
            darkness: 5,
        },
    },
    {
        id: 17,
        rarity: 'rare',
        name: 'Ball',
        cost: 1,
        damage: '1d8',
        damage_type: 'bludgeoning',
        properties: ['two-handed', 'ammunition'],
        range: 180,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 3,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 18,
        rarity: 'rare',
        name: 'Tendrils',
        cost: 1,
        damage: '1d3',
        damage_type: 'slashing',
        properties: ['thrown'],
        range: 120,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 5,
            darkness: 3,
        },
    },
    {
        id: 19,
        rarity: 'rare',
        name: 'Ray',
        cost: 1,
        damage: '2d3',
        damage_type: 'piercing',
        properties: ['ammunition'],
        range: 120,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 0,
            light: 3,
            darkness: 5,
        },
    },
    {
        id: 20,
        rarity: 'rare',
        name: 'Splash',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 3,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 21,
        rarity: 'rare',
        name: 'Aura',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 3,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 22,
        rarity: 'rare',
        name: 'Beacon',
        cost: 1,
        damage: '1d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 3,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 23,
        rarity: 'rare',
        name: 'Blade',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['light'],
        range: 0,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 3,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 24,
        rarity: 'rare',
        name: 'Cloud',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['two-handed'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 3,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 25,
        rarity: 'rare',
        name: 'Cone',
        cost: 1,
        damage: '1d6',
        damage_type: 'bludgeoning',
        properties: ['thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 3,
            fire: 0,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 26,
        rarity: 'epic',
        name: 'Conjure Elemental',
        cost: 1,
        damage: '2d6',
        damage_type: 'slashing',
        properties: ['ammunition'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 5,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 27,
        rarity: 'epic',
        name: 'Blast',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 5,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 28,
        rarity: 'epic',
        name: 'Beam',
        cost: 1,
        damage: '3d3',
        damage_type: 'piercing',
        properties: ['two-handed', 'ammunition'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 5,
        },
    },
    {
        id: 29,
        rarity: 'epic',
        name: 'Ball',
        cost: 1,
        damage: '1d10',
        damage_type: 'bludgeoning',
        properties: ['two-handed', 'ammunition'],
        range: 180,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 30,
        rarity: 'epic',
        name: 'Tendrils',
        cost: 1,
        damage: '2d3',
        damage_type: 'slashing',
        properties: ['thrown'],
        range: 120,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 0,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 31,
        rarity: 'epic',
        name: 'Ray',
        cost: 1,
        damage: '2d6',
        damage_type: 'piercing',
        properties: ['ammunition'],
        range: 120,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 0,
            water: 0,
            light: 0,
            darkness: 5,
        },
    },
    {
        id: 32,
        rarity: 'epic',
        name: 'Splash',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 33,
        rarity: 'epic',
        name: 'Aura',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 5,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 34,
        rarity: 'epic',
        name: 'Beacon',
        cost: 1,
        damage: '2d3',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 0,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 35,
        rarity: 'epic',
        name: 'Blade',
        cost: 1,
        damage: '3d3',
        damage_type: 'bludgeoning',
        properties: ['light'],
        range: 0,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 5,
            fire: 0,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 36,
        rarity: 'epic',
        name: 'Cloud',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['two-handed'],
        range: 300,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 0,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 37,
        rarity: 'epic',
        name: 'Cone',
        cost: 1,
        damage: '1d8',
        damage_type: 'bludgeoning',
        properties: ['thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 0,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 5,
            water: 0,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 38,
        rarity: 'legendary',
        name: 'Conjure Elemental',
        cost: 1,
        damage: '2d8',
        damage_type: 'slashing',
        properties: ['ammunition'],
        range: 60,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 3,
            wind: 0,
            fire: 5,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 39,
        rarity: 'legendary',
        name: 'Blast',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 3,
            wind: 0,
            fire: 5,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 40,
        rarity: 'legendary',
        name: 'Beam',
        cost: 1,
        damage: '2d6',
        damage_type: 'piercing',
        properties: ['two-handed', 'ammunition'],
        range: 300,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 3,
            wind: 0,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 5,
        },
    },
    {
        id: 41,
        rarity: 'legendary',
        name: 'Ball',
        cost: 1,
        damage: '2d8',
        damage_type: 'bludgeoning',
        properties: ['two-handed', 'ammunition'],
        range: 180,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 3,
            wind: 5,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 0,
        },
    },
    {
        id: 42,
        rarity: 'epic',
        name: 'Tendrils',
        cost: 1,
        damage: '2d6',
        damage_type: 'slashing',
        properties: ['thrown'],
        range: 120,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 3,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 43,
        rarity: 'legendary',
        name: 'Ray',
        cost: 1,
        damage: '2d8',
        damage_type: 'piercing',
        properties: ['ammunition'],
        range: 120,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 0,
            water: 3,
            light: 0,
            darkness: 5,
        },
    },
    {
        id: 44,
        rarity: 'legendary',
        name: 'Splash',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 0,
            water: 5,
            light: 0,
            darkness: 3,
        },
    },
    {
        id: 45,
        rarity: 'legendary',
        name: 'Aura',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 0,
            wind: 0,
            fire: 5,
            water: 5,
            light: 3,
            darkness: 0,
        },
    },
    {
        id: 46,
        rarity: 'legendary',
        name: 'Beacon',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['light', 'thrown'],
        range: 60,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 3,
            water: 0,
            light: 5,
            darkness: 0,
        },
    },
    {
        id: 47,
        rarity: 'legendary',
        name: 'Blade',
        cost: 1,
        damage: '2d6',
        damage_type: 'bludgeoning',
        properties: ['light'],
        range: 0,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 5,
            wind: 5,
            fire: 0,
            water: 0,
            light: 3,
            darkness: 0,
        },
    },
    {
        id: 48,
        rarity: 'legendary',
        name: 'Cloud',
        cost: 1,
        damage: '2d8',
        damage_type: 'bludgeoning',
        properties: ['two-handed'],
        range: 300,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 0,
            wind: 5,
            fire: 0,
            water: 0,
            light: 5,
            darkness: 3,
        },
    },
    {
        id: 49,
        rarity: 'legendary',
        name: 'Cone',
        cost: 1,
        damage: '1d10',
        damage_type: 'bludgeoning',
        properties: ['thrown'],
        range: 80,
        itemType: 'spell',
        refinements: 1,
        enchantments: {
            earth: 5,
            wind: 0,
            fire: 5,
            water: 0,
            light: 3,
            darkness: 0,
        },
    },
];
