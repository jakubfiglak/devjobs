<script lang="ts">
	export let logo: string;
	export let logo_background: string;
	export let publishedAt: string;
	export let type: 'full_time' | 'part_time';
	export let title: string;
	export let company_name: string;
	export let location: string;
</script>

<div class="card">
	<div class="logo" style:--background={logo_background}>
		<img src={logo} alt={`${company_name} logo`} />
	</div>
	<div class="details">
		<div>
			<time datetime="">{publishedAt}</time>
			&middot;
			<span class="type">
				{type.replace('_', ' ')}
			</span>
		</div>
		<h3>{title}</h3>
		<p>{company_name}</p>
	</div>
	<p class="location">{location}</p>
</div>

<style>
	.card {
		position: relative;
		background: var(--card-background);
		padding: 3rem 2rem 2rem 2rem;
		border-radius: 0.375rem;
	}

	.logo {
		position: absolute;
		left: 2rem;
		top: 0;
		transform: translateY(-50%);
		width: 3.125rem;
		height: 3.125rem;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--background, 'red');
	}

	.logo img {
		width: 60%;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 2rem;
	}

	.type {
		text-transform: capitalize;
	}

	.location {
		color: var(--primary);
		font-weight: 700;
		font-size: 0.875rem;
	}
</style>
