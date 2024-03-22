import { client } from '../../sanityClient';
import { error } from '@sveltejs/kit';
import {
	getLatestPostQuery,
	getTwoLatestPostsQuery,
	getPageQuery,
	getStartPageQuery
} from '$lib/queries';

export async function load({ params }) {
	let latestPost = null;
	let latestPosts = null;
	const lang = params.lang && params.lang !== 'undefined' ? params.lang : 'en-us';

	const startPage = await client.fetch(getStartPageQuery(lang));
	const data = await client.fetch(getPageQuery(startPage[0].slug));

	if (!data) throw error(404);

	if (data.pageBuilder.some((x) => x._type === 'latestPost')) {
		latestPost = await client.fetch(getLatestPostQuery(params.lang));
	}

	if (data.pageBuilder.some((x) => x._type === 'twoLatestPosts')) {
		latestPosts = await client.fetch(getTwoLatestPostsQuery(params.lang));
	}

	return {
		page: data,
		latestPost: latestPost,
		latestPosts: latestPosts
	};
}
