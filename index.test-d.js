"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsd_1 = require("tsd");
const _1 = require(".");
const themeOverridesOrAdditions = {
    colors: {
        speakers: ['#0f4880', '#1d781d', '#db0a5b', '#8d6708', '#d43900']
    },
    fills: {
        awesomeBlue: {
            color: '#3492eb',
            backgroundColor: '#057ceb'
        }
    },
    components: {
        Button: {
            appearances: {
                primary: {
                    color: 'white',
                    backgroundColor: '#fc7ef8',
                    _hover: {
                        backgroundColor: '#fc03f0'
                    },
                    _focus: {
                        boxShadow: '0 0 0 2px #fccafa'
                    }
                },
                warning: {
                    color: 'white',
                    backgroundColor: '#fcef79'
                }
            }
        }
    }
};
// Test cases for default theme
(0, tsd_1.expectType)(_1.defaultTheme.colors.gray100);
(0, tsd_1.expectType)(_1.defaultTheme.fills.neutral);
(0, tsd_1.expectType)(_1.defaultTheme.fills.neutral.color);
(0, tsd_1.expectType)(_1.defaultTheme.fills.neutral.backgroundColor);
(0, tsd_1.expectType)(_1.defaultTheme.intents.info);
(0, tsd_1.expectType)(_1.defaultTheme.intents.danger);
(0, tsd_1.expectType)(_1.defaultTheme.intents.warning);
(0, tsd_1.expectType)(_1.defaultTheme.intents.success);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.baseStyle);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.sizes.small);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.sizes.medium);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.sizes.large);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.appearances.minimal);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.appearances.default);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.appearances.destructive);
(0, tsd_1.expectType)(_1.defaultTheme.components.Button.appearances.primary);
(0, tsd_1.expectType)(_1.defaultTheme.components.Text.sizes[300]);
(0, tsd_1.expectAssignable)((0, _1.mergeTheme)(_1.defaultTheme, themeOverridesOrAdditions));
// Test cases for a custom theme merged w/ default
const customTheme = (0, _1.mergeTheme)(_1.defaultTheme, themeOverridesOrAdditions);
// Ensure original theme values are still strongly typed
(0, tsd_1.expectAssignable)(customTheme.components.Button.appearances.minimal.backgroundColor);
// Ensure new values are strongly typed
(0, tsd_1.expectAssignable)(customTheme.components.Button.appearances.warning.backgroundColor);
// Ensure original theme values are still strongly typed
(0, tsd_1.expectType)(customTheme.colors.gray100);
(0, tsd_1.expectType)(customTheme.fills.neutral);
(0, tsd_1.expectType)(customTheme.fills.neutral.color);
(0, tsd_1.expectType)(customTheme.fills.neutral.backgroundColor);
(0, tsd_1.expectType)(customTheme.intents.info);
(0, tsd_1.expectType)(customTheme.intents.danger);
(0, tsd_1.expectType)(customTheme.intents.warning);
(0, tsd_1.expectType)(customTheme.intents.success);
(0, tsd_1.expectType)(customTheme.components.Button.baseStyle);
(0, tsd_1.expectType)(customTheme.components.Button.sizes.small);
(0, tsd_1.expectType)(customTheme.components.Button.sizes.medium);
(0, tsd_1.expectType)(customTheme.components.Button.sizes.large);
(0, tsd_1.expectType)(customTheme.components.Button.appearances.minimal);
(0, tsd_1.expectType)(customTheme.components.Button.appearances.default);
(0, tsd_1.expectType)(customTheme.components.Button.appearances.destructive);
(0, tsd_1.expectType)(customTheme.components.Button.appearances.primary);
(0, tsd_1.expectType)(customTheme.components.Text.sizes[300]);
// Ensure new values are strongly typed
(0, tsd_1.expectAssignable)(customTheme.fills.awesomeBlue);
(0, tsd_1.expectType)(customTheme.colors.speakers);
// Negative case - attempting to reference pseudoselector not defined in index.d.ts
const themeWithNonExistentPseudoSelector = {
    components: {
        Button: {
            baseStyle: {
                _doesNotExist: {
                    backgroundColor: '#fc03f0'
                }
            }
        }
    }
};
(0, tsd_1.expectError)((0, _1.mergeTheme)(_1.defaultTheme, themeWithNonExistentPseudoSelector));
// Negative case - attempting to assign colors property to string[] (should at least have a key wrapping it)
const themeWithTopLevelColorsArray = {
    colors: ['#0f4880', '#1d781d', '#db0a5b', '#8d6708', '#d43900']
};
(0, tsd_1.expectError)((0, _1.mergeTheme)(_1.defaultTheme, themeWithTopLevelColorsArray));
