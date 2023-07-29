import { client } from '../sanityClient';

export async function load({ params }) {
	let latestPosts = null;
	let latestPost = null;
	const lang = params.lang || 'en-us';
	const data = await client.fetch(`*[_type == "siteSettings" && __i18n_lang == "${lang}"]{
    post -> {
      ...,
      parentPage {
        _type == "reference" => {
          "slug": @ -> seo.slug.current,
          "lang": @ -> __i18n_lang
        }
      }
    },
    startPage -> {
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
           prices[] {
             ...,
           organizationSize ->
           }
         }
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
        _type == 'faq' => {
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
          faqList[]{
            ...,
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
    }}}}}}}}[0]`);

	if (data.startPage.pageBuilder.some((x) => x._type === 'twoLatestPosts')) {
		latestPosts =
			await client.fetch(`*[_type == "post" && __i18n_lang == "${lang}"] | order(publishedAt desc)[0...2]{
      ...,
      category->,
      author->
    }`);
	}

	if (data.startPage.pageBuilder.some((x) => x._type === 'latestPost')) {
		latestPost =
			await client.fetch(`*[_type == "post" && __i18n_lang == "${lang}"] | order(publishedAt desc)[0]{
      ...,
      category->,
      author->
    }`);
	}

	if (data) {
		return {
			page: data.startPage,
			latestPosts: latestPosts,
			latestPost: latestPost
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
