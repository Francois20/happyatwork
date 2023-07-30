import { client } from '../sanityClient';
import { getSiteSettingsQuery } from '$lib/queries';

export async function load({ params }) {
	const lang = params.lang || 'en-us';
	const data = await client.fetch(getSiteSettingsQuery(lang));

	if (data) {
		return {
			navigation: data.navigation,
			footer: data.footer,
			post: data.post,
			error: data.error
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
