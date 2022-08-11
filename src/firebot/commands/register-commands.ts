import { SystemCommandTriggerEvent } from '@crowbartools/firebot-custom-scripts-types/types/modules/command-manager';

import { verifyCharacter } from '../../systems/user/user';
import { logger, registerSystemCommand, sendChatMessage } from '../firebot';
import { rpgJob } from './rpg-job';
import { rpgStatsCommand } from './rpg-stats';
import { worldCommand } from './rpg-world';

function getSubCommands() {
    return [
        {
            id: 'fbrpg:rpg-world',
            usage: 'world',
            name: '!rpg world',
            description: 'Shows the stats of your world.',
            active: true,
            trigger: 'world',
            arg: 'world',
        },
        {
            id: 'fbrpg:rpg-stats',
            usage: 'stats',
            name: '!rpg stats',
            description: 'Shows the stats of your character.',
            active: true,
            trigger: 'stats',
            arg: 'stats',
        },
        {
            id: 'fbrpg:rpg-inv',
            usage: 'inv',
            name: '!rpg inv',
            description: 'Shows the equipment of your character.',
            active: true,
            trigger: 'inv',
            arg: 'inv',
        },
        {
            id: 'fbrpg:rpg-held',
            usage: 'held',
            name: '!rpg held',
            description: 'Shows info on the currently held item.',
            active: true,
            trigger: 'held',
            arg: 'held',
        },
        {
            id: 'fbrpg:rpg-equip',
            usage: 'equip',
            name: '!rpg equip',
            description: 'Equips the currently held item.',
            active: true,
            trigger: 'equip',
            arg: 'equip',
        },
        {
            id: 'fbrpg:rpg-job',
            usage: 'job',
            name: '!rpg job',
            description: 'Sends the player off on a job.',
            active: true,
            trigger: 'job',
            arg: 'job',
        },
        {
            id: 'fbrpg:rpg-shop',
            usage: 'shop',
            name: '!rpg shop',
            description: 'Lists out items currently available in the shop.',
            active: true,
            trigger: 'shop',
            arg: 'shop',
        },
        {
            id: 'fbrpg:rpg-shop-sell',
            usage: 'shop-sell',
            name: '!rpg shop-sell',
            description: 'Sells the currently held item to the shop for money.',
            active: true,
            trigger: 'shop-sell',
            arg: 'shop-sell',
        },
        {
            id: 'fbrpg:rpg-shop-buy',
            usage: 'shop-buy [number]',
            name: '!rpg shop-buy',
            description: 'Buys the item in the designated shop slot.',
            active: true,
            trigger: 'shop-buy',
            arg: 'shop-buy',
            minArg: 2,
        },
    ];
}

export function registerCommands() {
    const subCommandUsages = getSubCommands().map((a) => a.name);

    registerSystemCommand({
        definition: {
            id: 'fbrpg:rpg',
            name: 'Firebot RPG',
            description: 'Allows users to play the RPG.',
            baseCommandDescription: 'Shows RPG commands.',
            active: true,
            trigger: '!rpg',
            sortTags: ['rpg'],
            effects: {
                list: [
                    {
                        chatter: 'Bot',
                        message: `Try these rpg commands: ${subCommandUsages.join(
                            ', '
                        )}.`,
                        type: 'firebot:chat',
                    },
                ],
            },
            restrictionData: {
                mode: 'any',
                sendFailMessage: true,
                failMessage:
                    'Sorry, you could not use this command because {reason}.',
                restrictions: [],
            },
            subCommands: getSubCommands(),
        },
        onTriggerEvent(
            event: SystemCommandTriggerEvent
        ): void | PromiseLike<void> {
            const { userCommand } = event;
            const { args } = userCommand;

            // Base !rpg command was used.
            if (args.length === 0) {
                return;
            }

            // Verify the user has a character build before running any other command.
            verifyCharacter(userCommand)
                .then(() => {
                    // Now, parse the subcommand.
                    const commandUsed = args[0];
                    switch (commandUsed) {
                        case 'world': {
                            worldCommand();
                            return;
                        }
                        case 'stats': {
                            rpgStatsCommand(userCommand);
                            return;
                        }
                        case 'inv': {
                            // TODO: Implement
                            return;
                        }
                        case 'held': {
                            // TODO: Implement
                            return;
                        }
                        case 'equip': {
                            // TODO: Implement
                            return;
                        }
                        case 'job': {
                            rpgJob(userCommand);
                            return;
                        }
                        case 'shop': {
                            // TODO: Implement
                            return;
                        }
                        case 'shop-sell': {
                            // TODO: Implement
                            return;
                        }
                        case 'shop-buy': {
                            // TODO: Implement
                            return;
                        }
                        default: {
                            // Invalid sub command.
                            sendChatMessage(
                                `Invalid rpg command. Try one of these: ${subCommandUsages.join(
                                    ', '
                                )}.`
                            );
                        }
                    }
                })
                .catch((err) => {
                    logger('error', err);
                });
        },
    });
}
