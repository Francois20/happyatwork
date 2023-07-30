import { client } from '../../../sanityClient';
import {
	getPostsQuery,
	getLatestPostQuery,
	getTwoLatestPostsQuery,
	getPageQuery
} from '$lib/queries';

export async function load({ params }) {
	let posts = [];
	let latestPost = null;
	let latestPosts = null;

	const data = await client.fetch(getPageQuery(params.page));

	if (data.pageBuilder.some((x) => x._type === 'posts')) {
		posts = await client.fetch(getPostsQuery(params.lang));
	}

	if (data.pageBuilder.some((x) => x._type === 'latestPost')) {
		latestPost = await client.fetch(getLatestPostQuery(params.lang));
	}

	if (data.pageBuilder.some((x) => x._type === 'twoLatestPosts')) {
		latestPosts = await client.fetch(getTwoLatestPostsQuery(params.lang));
	}

	if (data) {
		return {
			page: data,
			posts: posts,
			latestPost: latestPost,
			latestPosts: latestPosts
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
