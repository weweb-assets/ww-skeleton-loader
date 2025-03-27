export default {
    editor: {
        label: {
            en: 'Skeleton Loader',
        },
        icon: 'loader',
    },
    properties: {
        animationType: {
            label: { en: 'Animation Type' },
            type: 'TextSelect',
            bindable: true,
            defaultValue: 'wave',
            section: 'settings',
            options: {
                options: [
                    { value: 'wave', label: { en: 'Wave' }, icon: 'animation' },
                    { value: 'pulse', label: { en: 'Pulse' }, icon: 'animation' },
                    { value: 'shimmer', label: { en: 'Shimmer' }, icon: 'animation' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'The type of animation to apply to the skeleton loader: "pulse", "wave", or "shimmer"',
            },
            propertyHelp: {
                tooltip:
                    'Choose the animation style for the skeleton loader. Pulse fades in and out, Wave shows a moving highlight, and Shimmer creates a left-to-right shine effect.',
            },
            /* wwEditor:end */
        },
    },
};
