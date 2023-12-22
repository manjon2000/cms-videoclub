import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from 'src/app/components/alert/alert.component';



const meta: Meta<AlertComponent> = {
    title: 'Components/Alert',
    component: AlertComponent,
    tags: ['autodocs'],
    args: {
        label: 'User created successfully'
    },
    argTypes: {
        label: {
            description: 'Label',
            defaultValue: 'User created successfully',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'User created successfully' },
            },
            control: 'text'
        },
        state: {
            description: 'Differents state to components',
            control: 'select',
            options: [
                'success',
                'danger',
                'warning',
                'info',
            ],
            defaultValue: 'success',
            table: {
                defaultValue: { summary: 'success' },
            },
        },
        icon: {
            description: 'Add icon',
            defaultValue: 'check_circle',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'info' },
            },
            control: 'text'
        }
    }
}

const template = `
    <ui-alert [label]="label" [state]="state" [icon]="icon" />
`;

export default meta;

type Story = StoryObj<AlertComponent>;

export const Default: Story = {
    render: (args) => ({
        props: args,
        template: template,
    }),
    name: 'Default'
}