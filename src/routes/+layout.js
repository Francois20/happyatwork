import { client } from '../sanityClient';

export async function load({ params }) {
	const lang = params.lang || 'en-us';
	const data = await client.fetch(`*[_type == "siteSettings" && __i18n_lang == "${lang}"]{
    post,
    error,
    footer {
      ...,
      links[] {
        ...,
        internalLink {
          _type == "reference" => {
                      "slug": @ -> seo.slug.current,
                      "lang": @ -> __i18n_lang
    }}},
      secondaryLinks[] {
        ...,
        internalLink {
          _type == "reference" => {
                      "slug": @ -> seo.slug.current,
                      "lang": @ -> __i18n_lang
    }}}},
    navigation {
      ...,
      links[] {
        ...,
        internalLink {
          _type == "reference" => {
                      "slug": @ -> seo.slug.current,
                      "lang": @ -> __i18n_lang
      }}}
    }}[0]`);

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
