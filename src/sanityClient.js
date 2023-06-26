import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: 'szdcwwtw',
	dataset: 'production',
	apiVersion: '2022-01-07',
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
