import { client } from '../../../../sanityClient';
import { getPostQuery } from '$lib/queries';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const data = await client.fetch(getPostQuery(params.slug));

	if (!data) throw error(404);

	if (data) {
		return {
			page: data
		};
	}
}
