import type { Meta, StoryObj } from '@storybook/svelte';
import Paragraph from './paragraph.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'globals/paragraph',
	component: Paragraph,
	tags: ['autodocs']
} satisfies Meta<Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {};
