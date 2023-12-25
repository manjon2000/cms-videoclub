import type { Meta, StoryObj } from '@storybook/angular';
import { ChipsComponent } from 'src/app/components/chips/chips.component';

const meta: Meta<ChipsComponent> =  {
    title: 'Components/Chips',
    component: ChipsComponent,
    tags: ['autodocs'],
    args: {
        type: 'success',
        title: 'Label',
        isCustom: false,
        background: 'red',
        textColor: 'white'
    },
    argTypes: {
        type: {
            options: ['success', 'danger', 'warning', 'neutral'],
            control: { type: 'select' },
            description: 'Type of chips',
            defaultValue: 'success',
        },
        title: {
            description: 'Title of chips',
            control: { type: 'text' },
            defaultValue: 'Label'
        },
        isCustom: {
            description: 'It does not allow us to customize the chip at will',
            control: { type: 'boolean' },
            defaultValue: false
        },
        background: {
            description: 'Background chip',
            control: { type: 'color'},
            defaultValue: 'red'
        },
        textColor: {
            description: 'Text color chip',
            control: { type: 'color'},
            defaultValue: 'white'
        }
    }
}

export default meta;

const template = `
    <ui-chips 
        [type]="type" 
        [title]="title" 
        [isCustom]="isCustom" 
        [background]="background" [textColor]="textColor" 
    />
`;

type Story = StoryObj<ChipsComponent>;

export const Default: Story = {
    render: (args) => ({
        props: args,
        template: template,
    }),
    name: 'Default'
}