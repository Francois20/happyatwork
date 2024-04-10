import { client } from '../sanityClient';
import {
	getLatestPostQuery,
	getTwoLatestPostsQuery,
	getStartPageQuery,
	getPageQuery
} from '$lib/queries';

export async function load({ params }) {
	let latestPosts = null;
	let latestPost = null;
	const lang = params.lang && params.lang !== 'undefined' ? params.lang : 'en-us';

	const startPage = await client.fetch(getStartPageQuery(lang));
	const data = await client.fetch(getPageQuery(startPage[0].slug));

	if (data.pageBuilder.some((x) => x._type === 'twoLatestPosts')) {
		latestPosts = await client.fetch(getTwoLatestPostsQuery(lang));
	}

	if (data.pageBuilder.some((x) => x._type === 'latestPost')) {
		latestPost = await client.fetch(getLatestPostQuery(lang));
	}

	if (data) {
		return {
			page: data,
			latestPosts: latestPosts,
			latestPost: latestPost
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
