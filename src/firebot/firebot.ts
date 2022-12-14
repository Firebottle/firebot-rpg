import { RunRequest } from '@crowbartools/firebot-custom-scripts-types';
import { SystemCommand } from '@crowbartools/firebot-custom-scripts-types/types/modules/command-manager';
import { FirebotGame } from '@crowbartools/firebot-custom-scripts-types/types/modules/game-manager';

import { GameSettings } from '../types/settings';
import { Character } from '../types/user';
import { WorldStats } from '../types/world';

let firebot: RunRequest<any> | null = null;

export async function setFirebot(
    firebotRequest: RunRequest<any>
): Promise<void> {
    if (firebotRequest == null) {
        firebotRequest.modules.logger.error(
            'FBRPG: Firebot system was null. RPG will error out.'
        );
        return;
    }

    firebot = firebotRequest;
}

export function logger(type: string, message: string): void {
    const fblogger = firebot.modules.logger;

    switch (type) {
        case 'debug':
            fblogger.debug(`FBRPG: ${message}`);
            break;
        case 'error':
            fblogger.error(`FBRPG: ${message}`);
            break;
        case 'warn':
            fblogger.warn(`FBRPG: ${message}`);
            break;
        default:
            fblogger.info(`FBRPG: ${message}`);
    }
}

export function getStreamerUsername(): string {
    return firebot.firebot.accounts.streamer.username;
}

export async function getNumberOfOnlineUsers(): Promise<number> {
    const { userDb } = firebot.modules;
    const onlineUsers = await userDb.getOnlineUsers();
    return onlineUsers.length;
}

export async function getStreamOnlineStatus(): Promise<boolean> {
    const streamerName = getStreamerUsername();
    const streamOnline =
        await firebot.modules.twitchApi.channels.getOnlineStatus(streamerName);
    return streamOnline;
}

export function sendChatMessage(
    message: string,
    whisperTarget?: string | null,
    accountType?: 'bot' | 'streamer'
): void {
    firebot.modules.twitchChat.sendChatMessage(
        message,
        whisperTarget,
        accountType
    );
}

export function registerSystemCommand(systemCommand: SystemCommand): void {
    const { commandManager } = firebot.modules;
    commandManager.registerSystemCommand(systemCommand);
}

export function registerGame(gameDefinition: FirebotGame): void {
    const { gameManager } = firebot.modules;
    gameManager.registerGame(gameDefinition);
}

export function getGameSettings(): GameSettings | null {
    const { gameManager } = firebot.modules;
    const settings = gameManager.getGameSettings('fbrpg');
    return settings.settings as GameSettings;
}

export async function getWorldMeta(): Promise<WorldStats> {
    const { userDb } = firebot.modules;
    const streamer = getStreamerUsername();
    const worldMeta = await userDb.getUserMetadata(streamer, 'fbrpg-world');
    return worldMeta;
}

export async function updateWorldMeta(
    value: any,
    property?: string
): Promise<void> {
    const { userDb } = firebot.modules;
    const streamer = getStreamerUsername();

    if (property != null) {
        await userDb.updateUserMetadata(
            streamer,
            'fbrpg-world',
            value,
            property
        );
        return;
    }

    await userDb.updateUserMetadata(streamer, 'fbrpg-world', value);
}

export async function getCharacterMeta(username: string): Promise<Character> {
    const { userDb } = firebot.modules;
    const characterMeta = await userDb.getUserMetadata(
        username,
        'fbrpg-character'
    );
    return characterMeta;
}

export async function setCharacterMeta(
    userName: string,
    value: any,
    property?: keyof Character
): Promise<void> {
    const { userDb } = firebot.modules;
    await userDb.updateUserMetadata(
        userName,
        'fbrpg-character',
        value,
        property
    );
}

export async function getUserCurrencyTotal(username: string) {
    const { currencyDb } = firebot.modules;
    const gameSettings = getGameSettings();
    const { currencyId } = gameSettings.generalSettings;
    const currencyTotal = await currencyDb.getUserCurrencyAmount(
        username,
        currencyId
    );
    return currencyTotal;
}

export async function adjustCurrencyForUser(amount: number, username: string) {
    const { currencyDb } = firebot.modules;
    const gameSettings = getGameSettings();
    const { currencyId } = gameSettings.generalSettings;

    await currencyDb.adjustCurrencyForUser(
        username,
        currencyId,
        amount,
        'adjust'
    );
}

export function getCurrencyName() {
    const { currencyDb } = firebot.modules;
    const gameSettings = getGameSettings();
    const { currencyId } = gameSettings.generalSettings;

    return currencyDb.getCurrencyById(currencyId).name;
}
