import type { Meta, StoryObj } from '@storybook/angular';

import { AccordionComponent } from 'src/app/components/accordion/accordion.component';

const meta: Meta<AccordionComponent> = {
    title: 'Components/Accordion',
    component: AccordionComponent,
    tags: ['autodocs'],
    args: {
        title: 'Accordion',
        icon: 'verified',
        isExpand: false
    },
    argTypes: {
        title: {
            type: 'string',
            description: 'Title accordion.',
        },
        icon: {
            type: 'string',
            description: 'Accordion icon.'
        },
        isExpand: {
            type: 'boolean',
            description: 'Define if this open.'
        }
    }
}

const template = `
    <ui-accordion [title]="title" [icon]="icon" [isExpand]="isExpand">
        <h1 style="font-weight: bold; font-size: 1.25rem; line-height: 24px; margin-bottom: .5rem; color: #52565E;">Custom Content</h1>
        <p style="color: #CACCD1;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium, temporibus eum ducimus possimus ipsum, eveniet nihil dicta iusto error repellendus odio optio. Minus cum commodi dolorum nulla. Assumenda possimus eius neque voluptate fuga at mollitia, ducimus est iure ea.</p>
    </ui-accordion>
`;

export default meta;

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
    render: (args) => ({
        props: {
            ...args
        },
        template: template,
    }),
    name: 'Default'
}