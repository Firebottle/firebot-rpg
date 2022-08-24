import { UserCommand } from '@crowbartools/firebot-custom-scripts-types/types/modules/command-manager';
import { getAdjustedCharacterStat } from '../../systems/characters/characters';
import {
    getFullItemTextWithStats,
    getItemByID,
} from '../../systems/equipment/helpers';

import { getUserData, getUserName } from '../../systems/user/user';
import { logger, sendChatMessage } from '../firebot';

export async function rpgStatsCommand(userCommand: UserCommand) {
    logger('debug', 'Sending world command.');

    const username = userCommand.commandSender;
    const character = await getUserData(username);
    const { args } = userCommand;
    const commandUsed = args[1] as string;
    let message = null;
    let item;
    let storedCharacterClass;
    let storedTitle;
    let str;
    let dex;
    let int;
    const characterName = await getUserName(username);
    const { backpack, mainHand, offHand, armor, title, characterClass } =
        await getUserData(username);

    switch (commandUsed) {
        case 'backpack':
            item = getFullItemTextWithStats(backpack);
            message = `@${username} ${characterName}'s backpack contains: ${item}`;
            break;
        case 'main':
        case 'main-hand':
        case 'main_hand':
            item = getFullItemTextWithStats(mainHand);
            message = `@${username} ${characterName}'s main hand holds: ${item}`;
            break;
        case 'off':
        case 'off-hand':
        case 'off_hand':
            item = getFullItemTextWithStats(offHand);
            message = `@${username} ${characterName}'s off hand holds: ${item}`;
            break;
        case 'armor':
            item = getFullItemTextWithStats(armor);
            message = `@${username} ${characterName}'s equipped armor: ${item}`;
            break;
        case 'title':
            item = getFullItemTextWithStats(title);
            message = `@${username} ${characterName}'s title is: ${item}`;
            break;
        case 'class':
        case 'characterClass':
            item = getFullItemTextWithStats(characterClass);
            message = `@${username} ${characterName}'s class is: ${item}`;
            break;
        default:
            storedCharacterClass = getItemByID(
                character.characterClass.id,
                'characterClass'
            );
            storedTitle = getItemByID(character.title.id, 'title');
            str = await getAdjustedCharacterStat(character, 'str');
            dex = await getAdjustedCharacterStat(character, 'dex');
            int = await getAdjustedCharacterStat(character, 'int');
            message = `@${username} ${storedTitle.name} ${characterName} the ${storedCharacterClass.name} has: ${str} STR, ${dex} DEX, ${int} INT, and ${character.currentHP}/${character.totalHP} HP.`;
    }

    if (message != null) {
        sendChatMessage(message);
    }
}
