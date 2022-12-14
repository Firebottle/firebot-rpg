import { logger } from '../../firebot/firebot';
import { Weapon } from '../../types/equipment';
import { GeneratedMonster } from '../../types/monsters';
import {
    Character,
    CompleteCharacter,
    EquippableSlots,
} from '../../types/user';
import { getCharacterDamageBonus } from '../characters/characters';
import { getElementalDamageOfAttack } from '../equipment/enchantments';
import { rollDice } from '../utils';
import { approachPhase } from './approach';
import { meleePhase } from './melee';

/**
 * Returns an array of characters in turn order.
 * @param characterOne
 * @param characterTwo
 * @returns
 */
export function initiative(
    characterOne: Character,
    characterTwo: Character | GeneratedMonster
): Character[] | GeneratedMonster[] {
    const turnOrder = [];

    const characterOneTotal = rollDice(`1d20 +${characterOne.dex / 10}`);
    const characterTwoTotal = rollDice(`1d20 +${characterTwo.dex / 10}`);

    // Initiative
    if (characterOneTotal > characterTwoTotal) {
        turnOrder.push(characterOne);
    } else if (characterTwoTotal > characterOneTotal) {
        turnOrder.push(characterTwo);
    } else {
        const playerOneFirst = Math.random() < 0.5;
        if (playerOneFirst) {
            turnOrder.push(characterOne);
        } else {
            turnOrder.push(characterTwo);
        }
    }

    // Push whichever player isnt in initiative yet, they're last.
    if (turnOrder.includes(characterOne)) {
        turnOrder.push(characterTwo);
    } else if (turnOrder.includes(characterTwo)) {
        turnOrder.push(characterOne);
    }

    return turnOrder;
}

/**
 * Calculate our damage for a certain attack against a specific character.
 * @param attacker
 * @param defender
 * @param slot
 * @returns
 */
export async function calculateDamage(
    attacker: CompleteCharacter,
    defender: CompleteCharacter,
    slot: EquippableSlots,
    roundCounter: number
) {
    let roll = 0;
    let dmgBonus = 0;
    let elemental = 0;

    if (slot === 'mainHand') {
        const mainWeapon = attacker.mainHandData as Weapon;

        roll = rollDice(mainWeapon.damage);
        dmgBonus = await getCharacterDamageBonus(attacker, 'mainHand');
        elemental = await getElementalDamageOfAttack(
            attacker,
            defender,
            'mainHand',
            roundCounter
        );

        logger(
            'debug',
            `Damage: ${roll} roll, ${dmgBonus} dmg bonus, ${elemental} elemental. Total: ${
                roll + dmgBonus + elemental
            }`
        );

        return roll + dmgBonus + elemental;
    }

    if (attacker.offHand != null && attacker.offHand.itemType !== 'shield') {
        const offHand = attacker.offHandData as Weapon;

        roll = rollDice(offHand.damage);
        dmgBonus = await getCharacterDamageBonus(attacker, 'offHand');
        elemental = await getElementalDamageOfAttack(
            attacker,
            defender,
            'offHand',
            roundCounter
        );

        logger(
            'debug',
            `Damage: ${roll} roll, ${dmgBonus} dmg bonus, ${elemental} elemental. Total: ${
                roll + dmgBonus + elemental
            }`
        );

        return roll + dmgBonus + elemental;
    }

    return 0;
}

/**
 * Initiates combat between two characters.
 * Returns the remaining HP of both parties on combat end.
 * @param characterOne
 * @param characterTwo
 * @returns
 */
export async function startCombat(
    characterOne: CompleteCharacter,
    characterTwo: CompleteCharacter
): Promise<{ one: number; two: number; rounds: number }> {
    logger(
        'debug',
        `Starting combat between ${characterOne.name} and ${characterTwo.name}.`
    );

    const characterOneTemp = characterOne;
    const characterTwoTemp = characterTwo;

    // First, start with our approach phase.
    logger('debug', 'Attempting to start the approach phase...');
    const phaseOne = await approachPhase(characterOneTemp, characterTwoTemp);

    characterOneTemp.currentHP = phaseOne.one;
    characterTwoTemp.currentHP = phaseOne.two;

    // Check if anyone died in approach phase.
    if (characterOneTemp.currentHP <= 0 || characterTwoTemp.currentHP <= 0) {
        const results = {
            one:
                characterOneTemp.currentHP < 0 ? 0 : characterOneTemp.currentHP,
            two:
                characterTwoTemp.currentHP < 0 ? 0 : characterTwoTemp.currentHP,
            rounds: phaseOne.rounds,
        };

        logger(
            'debug',
            `Final combat results: ${characterOne.name}: ${characterOne.currentHP} and ${characterTwo.name}: ${characterTwo.currentHP}.`
        );

        return results;
    }

    // Now, our melee phase since people are still alive.
    // After the melee combat, someone WILL be defeated.
    // Make sure to pass temp characters through here so the health from phase one is carried over.
    logger('debug', 'Attempting to start the melee phase...');
    const phaseTwo = await meleePhase(
        characterOneTemp,
        characterTwoTemp,
        phaseOne.rounds
    );
    characterOneTemp.currentHP = phaseTwo.one;
    characterTwoTemp.currentHP = phaseTwo.two;

    // Alright, lets return our results.
    const results = {
        one: characterOneTemp.currentHP < 0 ? 0 : characterOneTemp.currentHP,
        two: characterTwoTemp.currentHP < 0 ? 0 : characterTwoTemp.currentHP,
        rounds: phaseTwo.rounds,
    };

    logger(
        'debug',
        `Final combat results: ${characterOne.name}: ${characterOneTemp.currentHP} and ${characterTwo.name}: ${characterTwoTemp.currentHP}. Total Rounds: ${phaseTwo.rounds}`
    );

    return results;
}
