import {
    weaponEnchantmentNames,
    armorEnchantmentNames,
} from '../../data/enchantments';
import { logger } from '../../firebot/firebot';
import {
    Armor,
    Enchantments,
    Shield,
    StoredArmor,
    StoredWeapon,
    Weapon,
} from '../../types/equipment';
import { GeneratedMonster } from '../../types/monsters';
import { Character, EquippableSlots } from '../../types/user';
import { getDamageBonusSettings } from '../settings';
import { getUserData } from '../user/user';
import {
    addOrSubtractRandomPercentage,
    filterArrayByProperty,
    getTopValuesFromObject,
    sumOfObjectProperties,
} from '../utils';
import { getItemByID } from './helpers';

/**
 * Generates an enchantment list using the given number of enchantment points.
 * @param baseEnchantmentValue
 * @returns
 */
export function generateEnchantmentList(
    baseEnchantmentValue: number
): Enchantments {
    let availablePoints = addOrSubtractRandomPercentage(baseEnchantmentValue);
    const enchantments = {
        earth: 0,
        wind: 0,
        fire: 0,
        water: 0,
        light: 0,
        darkness: 0,
    };
    const enchantmentKeys = Object.keys(enchantments);

    // TODO: This could probably be improved.
    // Randomly assign our pool of points until we're out of them.
    while (availablePoints > 0) {
        const selectedEnchantment =
            enchantmentKeys[Math.floor(Math.random() * enchantmentKeys.length)];
        // @ts-ignore
        enchantments[selectedEnchantment] += 1;
        availablePoints -= 1;
    }

    return enchantments;
}

/**
 * Returns the refinement count for mainhand and offhand slots.
 * @param username
 * @returns
 */
export async function getUserHandItemEnchantmentCount(
    username: string
): Promise<{ main_hand: number; off_hand: number }> {
    logger('debug', `Getting weapon enchantment count for ${username}.`);
    const characterStats = await getUserData(username);
    const mainHand = characterStats.mainHand as StoredWeapon;
    const offHand = characterStats.offHand as StoredWeapon;
    const values = {
        main_hand: 0,
        off_hand: 0,
    };

    if (mainHand?.enchantments != null) {
        values.main_hand = sumOfObjectProperties(mainHand.enchantments);
    }

    if (offHand?.enchantments != null) {
        values.off_hand = sumOfObjectProperties(offHand.enchantments);
    }

    logger(
        'debug',
        `Enchantment count for main hand of ${username} is ${values.main_hand}.`
    );
    logger(
        'debug',
        `Enchantment count for off hand of ${username} is ${values.off_hand}.`
    );

    return values;
}

/**
 * Takes a list of enchantments and item type, and returns a neat enchantment name based on that combination.
 * @param enchantments
 * @param itemType
 */
export function getEnchantmentName(
    enchantments: Enchantments,
    itemType: string
): string | null {
    const topValues = getTopValuesFromObject(enchantments, 2);
    let enchantmentName = null;

    if (topValues.length === 0 || topValues == null) {
        return null;
    }

    logger(
        'debug',
        `Generating enchantment name. Top values were ${topValues[0]} and ${topValues[1]}.`
    );

    switch (itemType) {
        case 'weapon':
            enchantmentName = filterArrayByProperty(
                weaponEnchantmentNames,
                ['enchantments'],
                topValues
            );
            break;
        case 'armor':
        case 'shield':
            enchantmentName = filterArrayByProperty(
                armorEnchantmentNames,
                ['enchantments'],
                topValues
            );
            break;
        default:
            enchantmentName = [
                {
                    name: 'Magic',
                },
            ];
    }

    return enchantmentName[0].name;
}

/**
 * Gets the armor enchantment count for a user.
 * @param username
 * @returns
 */
export async function getUserArmorEnchantmentCount(
    username: string
): Promise<{ armor: number }> {
    logger('debug', `Getting armor enchantment count for ${username}.`);
    const characterStats = await getUserData(username);
    const armor = characterStats.armor as StoredArmor;
    const values = {
        armor: 0,
    };

    if (armor?.enchantments != null) {
        values.armor = sumOfObjectProperties(armor.enchantments);
    }

    logger(
        'debug',
        `Enchantment count for ${username}'s armor is ${values.armor}.`
    );

    return values;
}

/**
 * Calculates the total elemental damage done to a defender.
 * @param attacker
 * @param defender
 */
export function getElementalDamageOfAttack(
    attacker: Character,
    defender: Character | GeneratedMonster,
    slot: EquippableSlots
): number {
    logger('debug', `Calculating elemental damage of attack in ${slot}.`);

    let item;
    let armor;
    let shield;
    let damage = 0;

    const damageBonusDivider = getDamageBonusSettings()
        ? getDamageBonusSettings()
        : 10;
    const intDmgBonus = Math.floor(attacker.int / damageBonusDivider);

    if (slot === 'mainHand') {
        item = getItemByID(attacker.mainHand.id, 'weapon') as Weapon;
    }

    if (slot === 'offHand' && attacker.offHand.itemType === 'weapon') {
        item = getItemByID(attacker.offHand.id, 'weapon') as Weapon;
    }

    if (item == null) {
        return 0;
    }

    if (defender.armor != null) {
        armor = getItemByID(defender.armor.id, 'armor') as Armor;
    }

    if (defender.offHand != null && defender.offHand?.itemType === 'shield') {
        shield = getItemByID(defender.armor.id, 'shield') as Shield;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [enchantment, enchantmentValue] of Object.entries(
        item.enchantments
    )) {
        // Get attacker offenses.
        const totalAttackerValue =
            enchantmentValue +
            item.enchantments[enchantment as keyof Enchantments];

        // Figure out opponent defenses.
        let totalDefenderValue = 0;

        if (armor != null) {
            totalDefenderValue +=
                defender.armor.enchantments[enchantment as keyof Enchantments] +
                armor.enchantments[enchantment as keyof Enchantments];
        }

        if (shield != null) {
            totalDefenderValue +=
                shield.enchantments[enchantment as keyof Enchantments];
        }

        // Now, figure out how much damage we took from this element.
        const roundDamage =
            totalAttackerValue + intDmgBonus - totalDefenderValue;

        logger(
            'debug',
            `${attacker.name} did ${roundDamage} ${enchantment} damage to ${defender.name}.`
        );

        if (roundDamage > 0) {
            damage += roundDamage;
        }
    }

    return damage;
}
