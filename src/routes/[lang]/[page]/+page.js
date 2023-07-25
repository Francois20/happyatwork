import { client } from '../../../sanityClient';

export async function load({ params }) {
	let posts = [];
	let latestPost = null;

	const data = await client.fetch(`*[_type == "page" && seo.slug.current == "${params.page}"]{
      ...,
      pageBuilder[] {
        ...,
        _type == 'hero' => {
          link {
            ...,
            internalLink {
              _type == "reference" => {
                "slug": @ -> seo.slug.current,
                "lang": @ -> __i18n_lang
              }
            }
          }
        },
        _type == 'ctaBanner' => {
          link {
            ...,
            internalLink {
              _type == "reference" => {
                "slug": @ -> seo.slug.current,
                "lang": @ -> __i18n_lang
              }
            }
          }
        },
        _type == 'contentExtended' => {
          ...,
          paragraphs[]{
            ...,
            link {
              ...,
              internalLink {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
                }
              }
            }
          }
        },
        _type == 'pricing' => {
          ...,
          items[] -> {
            ...,
            link {
              ...,
              internalLink {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
                }
              }
            },
            prices[] {
              ...,
            organizationSize ->
            }
          }
        },
        _type == 'faq' => {
          ...,
          faqList[]{
            ...,
            answer[] {
              ...,
              markDefs[] {
                ...,
                item {
                  _type == "reference" => {
                    "slug": @ -> seo.slug.current,
                    "lang": @ -> __i18n_lang
                  } 
                }
              }
            },
            tags[] {
              tag {
                _type == "reference" => {
                  "title": @ -> title
                }
              } 
            }
          }
        },
        _type == 'customerStories' => {
          ...,
          items[]{
            ...,
            link {
              ...,
              internalLink {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
                }
              }
            }
          }
        },
        _type == 'contentMulti' => {
          ...,
          items[]{
            ...,
            text[] {
              ...,
              markDefs[] {
                ...,
                item {
                  _type == "reference" => {
                    "slug": @ -> seo.slug.current,
                    "lang": @ -> __i18n_lang
                  } 
                }
              }
            },
            link {
              ...,
              internalLink {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
                }
              }
            }      
          }
        },
        _type == 'freeText' => {
          ...,
          text[] {
            ...,
             markDefs[] {
              ...,
              item {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
                } 
              }
            }
          },
        },
        _type == 'pipedriveForm' => {
          ...,
          text[] {
            ...,
             markDefs[] {
              ...,
              item {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
                } 
              }
            }
          },
        },
        _type == 'latestPost' => {
          ...,
          parentPage {
            _type == "reference" => {
              "slug": @ -> seo.slug.current,
              "lang": @ -> __i18n_lang
            }
          }
        },
        _type == 'twoLatestPosts' => {
          ...,
          parentPage {
            _type == "reference" => {
              "slug": @ -> seo.slug.current,
              "lang": @ -> __i18n_lang
            }
          }
        },
        _type == 'contentBasic' => {
          ...,
          link {
            ...,
            internalLink {
              _type == "reference" => {
                "slug": @ -> seo.slug.current,
                "lang": @ -> __i18n_lang
              }
            }
          },
          text[] {
            ...,
            markDefs[] {
              ...,
              item {
                _type == "reference" => {
                  "slug": @ -> seo.slug.current,
                  "lang": @ -> __i18n_lang
    }}}}}}}[0]`);

	if (data.pageBuilder.some((x) => x._type === 'posts')) {
		posts =
			await client.fetch(`*[_type == "post" && __i18n_lang == "${params.lang}"] | order(publishedAt desc){
      ...,
      category->,
      author->
    }`);
	}

	if (data.pageBuilder.some((x) => x._type === 'latestPost')) {
		latestPost =
			await client.fetch(`*[_type == "post" && __i18n_lang == "${params.lang}"] | order(publishedAt desc)[0]{
      ...,
      category->,
      author->
    }`);
	}

	if (data) {
		return {
			page: data,
			posts: posts,
			latestPost: latestPost
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
