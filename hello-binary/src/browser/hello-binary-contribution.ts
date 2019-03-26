import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const HelloBinaryCommand = {
    id: 'HelloBinary.command',
    label: "Shows a message"
};

@injectable()
export class HelloBinaryCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(HelloBinaryCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class HelloBinaryMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: HelloBinaryCommand.id,
            label: 'Say Hello'
        });
    }
}