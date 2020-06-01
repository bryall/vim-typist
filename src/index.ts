import { Neovim, NvimPlugin, Buffer } from 'neovim';

export default function(plugin: NvimPlugin) {
    plugin.setOptions({
        dev: true,
        alwaysInit: true,
    });

    plugin.registerCommand("VimTypist", async (args: string[]) => {
    }, { sync: false, nargs: "*" });
};
