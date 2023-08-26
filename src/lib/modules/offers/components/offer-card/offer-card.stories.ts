import StoryDecorator from './story-decorator.svelte';
import OfferCard from './offer-card.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'offers/offer card',
	component: OfferCard,
	decorators: [() => StoryDecorator] as any,
	tags: ['autodocs']
} satisfies Meta<OfferCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		company_name: 'Company Name',
		location: 'Location',
		logo: 'https://loremflickr.com/128/128',
		logo_background: '#fff',
		publishedAt: '2021-01-01',
		title: 'Title',
		type: 'full_time'
	},
	argTypes: {
		logo_background: {
			control: {
				type: 'color'
			}
		}
	}
};
