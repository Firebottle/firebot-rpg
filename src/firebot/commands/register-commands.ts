import {
    SubCommand,
    SystemCommandTriggerEvent,
} from '@crowbartools/firebot-custom-scripts-types/types/modules/command-manager';

import { verifyCharacter } from '../../systems/user/user';
import { logger, registerSystemCommand } from '../firebot';
import { rpgEquipCommand } from './rpg-equip';
import { rpgJob } from './rpg-job';
import { rpgStatsCommand } from './rpg-stats';
import { worldCommand } from './rpg-world';

function getSubCommands(): SubCommand[] {
    return [
        {
            id: 'fbrpg:rpg-world',
            usage: 'world',
            name: '!rpg world',
            description: 'Shows the stats of your world.',
            active: true,
            trigger: 'world',
            arg: 'world',
            cooldown: {
                global: 60,
                user: 60,
            },
        },
        {
            id: 'fbrpg:rpg-stats',
            usage: 'stats',
            name: '!rpg stats',
            description: 'Shows the stats of your character.',
            active: true,
            trigger: 'stats',
            arg: 'stats',
            cooldown: {
                global: 0,
                user: 30,
            },
        },
        {
            id: 'fbrpg:rpg-equip',
            usage: 'equip',
            name: '!rpg equip',
            description: 'Equips the currently held item.',
            active: true,
            trigger: 'equip',
            arg: 'equip',
            cooldown: {
                global: 0,
                user: 30,
            },
        },
        {
            id: 'fbrpg:rpg-job',
            usage: 'job',
            name: '!rpg job',
            description: 'Sends the player off on a job.',
            active: true,
            trigger: 'job',
            arg: 'job',
            cooldown: {
                global: 0,
                user: 60,
            },
        },
        {
            id: 'fbrpg:rpg-shop',
            usage: 'shop',
            name: '!rpg shop',
            description: 'Lists out items currently available in the shop.',
            active: true,
            trigger: 'shop',
            arg: 'shop',
            cooldown: {
                global: 0,
                user: 30,
            },
        },
        {
            id: 'fbrpg:rpg-shop-buy',
            usage: 'shop-buy [number]',
            name: '!rpg shop-buy',
            description: 'Buys the item in the designated shop slot.',
            active: true,
            trigger: 'shop-buy',
            arg: 'shop-buy',
            cooldown: {
                global: 0,
                user: 30,
            },
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
                            break;
                        }
                        case 'stats': {
                            rpgStatsCommand(userCommand);
                            break;
                        }
                        case 'equip': {
                            rpgEquipCommand(userCommand);
                            break;
                        }
                        case 'job': {
                            rpgJob(userCommand);
                            break;
                        }
                        case 'shop': {
                            // TODO: Implement
                            break;
                        }
                        case 'shop-buy': {
                            // TODO: Implement
                            break;
                        }
                        // eslint-disable-next-line no-empty
                        default: {
                        }
                    }
                })
                .catch((err) => {
                    logger('error', err);
                });
        },
    });
}
