import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { env } from '$env/dynamic/public';

export const client = sanityClient({
	projectId: env.PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2022-01-07',
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
