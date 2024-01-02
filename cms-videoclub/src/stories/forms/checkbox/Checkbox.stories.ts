import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';

const meta: Meta<CheckboxComponent> = {
    title: 'Components/Forms/Checkbox',
    component: CheckboxComponent,
    tags: ['autodocs'],
    args: {},
    argTypes: {}
}
export default meta;

type Story =  StoryObj<CheckboxComponent>;

const template = `
    <ui-checkbox />
`;

export const Default: Story = {
    render: (args) => ({
        props: args,
        template: template,
    }),
    name: 'Default'
}