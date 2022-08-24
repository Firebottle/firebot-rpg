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
            potion: false,
        },
        bonuses: {
            str: 0,
            dex: 2,
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
        difficulty: ['medium'],
        name: 'Barbarian',
        equipment: {
            armor: true,
            title: false,
            characterClass: false,
            potion: false,
        },
        bonuses: {
            str: 5,
            dex: 0,
            int: 0,
            hp: 5,
        },
        amount: {
            couple: 'group of Barbarians',
            many: 'clan of Barbarians',
        },
    },
    {
        id: 3,
        difficulty: ['hard'],
        name: 'Spellsword',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
            potion: false,
        },
        bonuses: {
            str: 5,
            dex: 0,
            int: 10,
            hp: 10,
        },
        amount: {
            couple: 'expert Spellsword',
            many: 'master Spellsword',
        },
    },
    {
        id: 4,
        difficulty: ['legendary'],
        name: 'Black Dragon',
        equipment: {
            armor: true,
            title: true,
            characterClass: true,
            potion: true,
        },
        bonuses: {
            str: 15,
            dex: 15,
            int: 10,
            hp: 25,
        },
        amount: {
            couple: 'old Black Dragon',
            many: 'ancient Black Dragon',
        },
    },
];
