import { client } from '../../../../sanityClient';
import { getPostQuery } from '$lib/queries';

export async function load({ params }) {
	const data = await client.fetch(getPostQuery(params.slug));

	if (data) {
		return {
			page: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
