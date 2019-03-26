/**
 * Generated using theia-extension-generator
 */

import { HelloBinaryCommandContribution, HelloBinaryMenuContribution } from './hello-binary-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(HelloBinaryCommandContribution);
    bind(MenuContribution).to(HelloBinaryMenuContribution);
    
});