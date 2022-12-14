import { Monster } from '../types/monsters';

export const monsterList: Monster[] = [
    {
        id: 1,
        difficulty: ['easy'],
        name: 'Wolf',
        equipment: {
            armor: false,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 0,
            dex: 10,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'pack of Wolves',
            many: 'den of Wolves',
        },
    },
    {
        id: 2,
        difficulty: ['easy'],
        name: 'Awakened Shrub',
        equipment: {
            armor: false,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 5,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'many Awakened Shrubs',
            many: 'field of Awakened Shrubs',
        },
    },
    {
        id: 3,
        difficulty: ['easy'],
        name: 'Bandit',
        equipment: {
            armor: true,
            title: false,
            characterClass: true,
        },
        bonuses: {
            str: 5,
            dex: 5,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'gang of Bandits',
            many: 'hideout of Bandits',
        },
    },
    {
        id: 4,
        difficulty: ['easy'],
        name: 'Cultist',
        equipment: {
            armor: true,
            title: false,
            characterClass: true,
        },
        bonuses: {
            str: 0,
            dex: 5,
            int: 5,
            hp: 0,
        },
        amount: {
            couple: 'group of Cultists',
            many: 'enclave of Cultists',
        },
    },
    {
        id: 5,
        difficulty: ['easy'],
        name: 'Kobold',
        equipment: {
            armor: true,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 0,
            dex: 10,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'group of Kobolds',
            many: 'den of Kobolds',
        },
    },
    {
        id: 6,
        difficulty: ['easy'],
        name: 'Giant Rat',
        equipment: {
            armor: false,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 5,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'group of Giant Rats',
            many: 'nest of Giant Rats',
        },
    },
    {
        id: 7,
        difficulty: ['easy'],
        name: 'Axe Beak',
        equipment: {
            armor: false,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'group of Axe Beaks',
            many: 'flight of Axe Beaks',
        },
    },
    {
        id: 8,
        difficulty: ['easy'],
        name: 'Goblin',
        equipment: {
            armor: true,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'group of Goblins',
            many: 'band of Goblins',
        },
    },
    {
        id: 10,
        difficulty: ['easy'],
        name: 'Skeleton',
        equipment: {
            armor: false,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 5,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'group of Skeletons',
            many: 'band of Brittle Skeletons',
        },
    },
    {
        id: 11,
        difficulty: ['easy'],
        name: 'Gnoll',
        equipment: {
            armor: false,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 10,
            dex: 5,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'scattering of Gnolls',
            many: 'hideout of Gnolls',
        },
    },
    {
        id: 12,
        difficulty: ['medium'],
        name: 'Hobgoblin',
        equipment: {
            armor: true,
            title: true,
            characterClass: false,
        },
        bonuses: {
            str: 10,
            dex: 5,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'massive Hobgoblin',
            many: 'giant Hobgoblin',
        },
    },
    {
        id: 13,
        difficulty: ['medium'],
        name: 'Orc',
        equipment: {
            armor: true,
            title: true,
            characterClass: false,
        },
        bonuses: {
            str: 10,
            dex: 5,
            int: 0,
            hp: 10,
        },
        amount: {
            couple: 'massive Orc',
            many: 'furious raging Orc',
        },
    },
    {
        id: 14,
        difficulty: ['medium'],
        name: 'Satyr',
        equipment: {
            armor: true,
            title: true,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 5,
            int: 5,
            hp: 5,
        },
        amount: {
            couple: 'tricky Satyr',
            many: 'tricky magic Satyr',
        },
    },
    {
        id: 15,
        difficulty: ['medium'],
        name: 'Worg',
        equipment: {
            armor: true,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'angry Worg',
            many: 'furious rabid Worg',
        },
    },
    {
        id: 16,
        difficulty: ['medium'],
        name: 'Animated Armor',
        equipment: {
            armor: true,
            title: false,
            characterClass: true,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 0,
            hp: 10,
        },
        amount: {
            couple: 'agile Animated Armor',
            many: 'spell-forged Animated Armor',
        },
    },
    {
        id: 17,
        difficulty: ['medium'],
        name: 'Ghoul',
        equipment: {
            armor: true,
            title: false,
            characterClass: true,
        },
        bonuses: {
            str: 5,
            dex: 0,
            int: 10,
            hp: 10,
        },
        amount: {
            couple: 'haunted Ghoul',
            many: 'bloodthirsty Ghoul',
        },
    },
    {
        id: 18,
        difficulty: ['medium'],
        name: 'Harpy',
        equipment: {
            armor: true,
            title: true,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'fast Harpy',
            many: 'rampaging Harpy',
        },
    },
    {
        id: 19,
        difficulty: ['medium'],
        name: 'Half-Ogre',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 15,
            dex: 0,
            int: 0,
            hp: 15,
        },
        amount: {
            couple: 'hungry Half-Ogre',
            many: 'starving Half-Ogre',
        },
    },
    {
        id: 20,
        difficulty: ['medium'],
        name: 'Hippogriff',
        equipment: {
            armor: true,
            title: true,
            characterClass: false,
        },
        bonuses: {
            str: 10,
            dex: 15,
            int: 0,
            hp: 0,
        },
        amount: {
            couple: 'quick Hippogriff',
            many: 'razorbeak Hippogriff',
        },
    },
    {
        id: 21,
        difficulty: ['medium'],
        name: 'Centaur',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 10,
            dex: 15,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'Centaur warrior',
            many: 'Centaur berserker',
        },
    },
    {
        id: 22,
        difficulty: ['hard'],
        name: 'Werewolf',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 15,
            dex: 15,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'howling Werewolf',
            many: 'rampaging Werewolf',
        },
    },
    {
        id: 23,
        difficulty: ['hard'],
        name: 'Banshee',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 0,
            dex: 15,
            int: 15,
            hp: 5,
        },
        amount: {
            couple: 'howling Banshee',
            many: 'ancient Banshee',
        },
    },
    {
        id: 25,
        difficulty: ['hard'],
        name: 'Ettin',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 20,
            dex: 0,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'giant Ettin',
            many: 'massive Ettin',
        },
    },
    {
        id: 26,
        difficulty: ['hard'],
        name: 'Air Elemental',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 0,
            dex: 20,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'Lightning Elemental',
            many: 'Storm Elemental',
        },
    },
    {
        id: 27,
        difficulty: ['hard'],
        name: 'Wyrmling',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 10,
            dex: 10,
            int: 10,
            hp: 5,
        },
        amount: {
            couple: 'smart Wyrmling',
            many: 'tricky Wyrmling',
        },
    },
    {
        id: 28,
        difficulty: ['hard'],
        name: 'Earth Elemental',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 20,
            dex: 0,
            int: 10,
            hp: 5,
        },
        amount: {
            couple: 'Rock Elemental',
            many: 'Lava Elemental',
        },
    },
    {
        id: 29,
        difficulty: ['hard'],
        name: 'Fire Elemental',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 0,
            dex: 10,
            int: 20,
            hp: 5,
        },
        amount: {
            couple: 'Flame Elemental',
            many: 'Roaring Flame Elemental',
        },
    },
    {
        id: 31,
        difficulty: ['hard'],
        name: 'Water Elemental',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 0,
            dex: 15,
            int: 15,
            hp: 5,
        },
        amount: {
            couple: 'Snow Elemental',
            many: 'Ice Elemental',
        },
    },
    {
        id: 32,
        difficulty: ['legendary'],
        name: 'Vampire',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 15,
            hp: 15,
        },
        amount: {
            couple: 'Old Vampire',
            many: 'Ancient Vampire',
        },
    },
    {
        id: 33,
        difficulty: ['legendary'],
        name: 'Bronze Dragon',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 10,
            dex: 5,
            int: 15,
            hp: 15,
        },
        amount: {
            couple: 'Old Bronze Dragon',
            many: 'Ancient Bronze Dragon',
        },
    },
    {
        id: 34,
        difficulty: ['legendary'],
        name: 'Red Dragon',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 10,
            dex: 10,
            int: 10,
            hp: 15,
        },
        amount: {
            couple: 'Old Red Dragon',
            many: 'Ancient Red Dragon',
        },
    },
    {
        id: 35,
        difficulty: ['legendary'],
        name: 'Iron Golem',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 20,
            dex: 0,
            int: 0,
            hp: 25,
        },
        amount: {
            couple: 'Old Iron Golumn',
            many: 'spell-forged Iron Golumn',
        },
    },
    {
        id: 36,
        difficulty: ['legendary'],
        name: 'Pit Fiend',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 20,
            dex: 20,
            int: 20,
            hp: 25,
        },
        amount: {
            couple: 'angry Pit Fiend',
            many: 'furious Pit Fiend',
        },
    },
    {
        id: 37,
        difficulty: ['legendary'],
        name: 'Lich',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 40,
            hp: 20,
        },
        amount: {
            couple: 'elder Lich',
            many: 'ancient Lich',
        },
    },
    {
        id: 38,
        difficulty: ['legendary'],
        name: 'Balor',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 20,
            dex: 20,
            int: 20,
            hp: 20,
        },
        amount: {
            couple: 'flame shrouded Balor',
            many: 'fire enhanced Balor',
        },
    },
    {
        id: 39,
        difficulty: ['legendary'],
        name: 'Archmage',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 0,
            dex: 10,
            int: 40,
            hp: 10,
        },
        amount: {
            couple: 'learned Archmage',
            many: 'master Archmage',
        },
    },
    {
        id: 40,
        difficulty: ['legendary'],
        name: 'Beholder',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 35,
            hp: 10,
        },
        amount: {
            couple: 'three eyed Beholder',
            many: 'five eyed Beholder',
        },
    },
    {
        id: 41,
        difficulty: ['medium'],
        name: 'Gargoyle',
        equipment: {
            armor: true,
            title: false,
            characterClass: false,
        },
        bonuses: {
            str: 5,
            dex: 10,
            int: 0,
            hp: 15,
        },
        amount: {
            couple: 'old Gargoyle',
            many: 'ancient Gargoyle',
        },
    },
];
