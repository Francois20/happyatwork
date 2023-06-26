import { client } from '../../../../sanityClient';

export async function load({ params }) {
	const data = await client.fetch(`*[_type == "post" && seo.slug.current == "${params.slug}"]{
    ...,
    author->,
    category->,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 260 ),
    body[] {
      ...,
      asset->,
      markDefs[] {
        ...,
        item {
          _type == "reference" => {
            "slug": @ -> seo.slug.current,
            "lang": @ -> __i18n_lang
  }}}}}[0]`);

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
