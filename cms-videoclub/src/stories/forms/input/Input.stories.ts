import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from 'src/app/components/input/input.component';



const meta: Meta<InputComponent> = {
    title: 'Components/Forms/Input',
    component: InputComponent,
    args: {
        type: 'text',
        value: '',
        isFocus: false,
        isError: false,
        isDisabled: false,
        isReadOnly: false,
        isPassword: false,
        minValue: 0,
        maxValue: 20
    },
    argTypes: {
        type: {
            options: ['text', 'password', 'email', 'number'],
            control: { type: 'select' },
            description: 'Type of input',
            defaultValue: 'text',
        },
        value: {
            defaultValue: '',
            description: 'This argument accepts both strings and numbers.',
        },
        isFocus: {
            description: 'Focusing',
            defaultValue: false
        },
        isError: {
            description: 'State error',
            defaultValue: false
        },
        isDisabled: {
            description: 'State disabled',
            defaultValue: false
        },
        isReadOnly: {
            description: 'State read-only',
            defaultValue: false
        },
        isPassword: {
            description: 'Use when type password',
            defaultValue: false
        },
        minValue: {
            defaultValue: 0,
            control: {
                type: 'number',
            },
            description: 'Min value'
        },
        maxValue: {
            defaultValue: 20,
            control: {
                type: 'number',
            },
            description: 'Max value'
        }
    }
}

const template = `
    <ui-input
        [type]="type"
        [value]="value"
        [isFocus]="isFocus"
        [isError]="isError"
        [isDisabled]="isDisabled"
        [isReadOnly]="isReadOnly"
        [isPassword]="isPassword"
        [minValue]="minValue"
        [maxValue]="maxValue" />
`;

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
    render: (args) => ({
        props: {
            ...args
        },
        template: template,
    }),
    name: 'Default'
}

export const Number: Story = {
    render: (args) => ({
        props: {
            ...args,
            type: 'number',
            value: '0'
        },
        template: template,
    }),
    name: 'Number'
}

export const Passoword: Story = {
    render: (args) => ({
        props: {
            ...args,
            type: 'password',
            isPassword: true
        },
        template: template,
    }),
    name: 'Passoword'
}

export const Focus: Story = {
    render: (args) => ({
        props: {
            ...args,
            type: 'text',
            isFocus: true
        },
        template: template,
    }),
    name: 'Focus'
}

export const Error: Story = {
    render: (args) => ({
        props: {
            ...args,
            type: 'text',
            isError: true
        },
        template: template,
    }),
    name: 'Error'
}

export const ReadOnly: Story = {
    render: (args) => ({
        props: {
            ...args,
            type: 'text',
            isReadOnly: true
        },
        template: template,
    }),
    name: 'ReadOnly'
}

export const Disabled: Story = {
    render: (args) => ({
        props: {
            ...args,
            type: 'text',
            isDisabled: true
        },
        template: template,
    }),
    name: 'Disabled'
}