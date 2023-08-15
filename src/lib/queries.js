export const getSiteSettingsQuery = (lang) => {
	return `*[_type == "siteSettings" && __i18n_lang == "${lang}"]{
    post {
      ...,
      parentPage {
        _type == "reference" => {
          "slug": @ -> seo.slug.current,
          "lang": @ -> __i18n_lang
        }
      }
    },
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
    }}[0]`;
};

export const getStartPageQuery = (lang) => {
	return `*[_type == "siteSettings" && __i18n_lang == "${lang}"]{
    "slug": startPage -> seo.slug.current,
  }`;
};

export const getPostQuery = (slug) => {
	return `*[_type == "post" && seo.slug.current == "${slug}"]{
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
  }}}}}[0]`;
};

export const getPostsQuery = (lang) => {
	return `*[_type == "post" && __i18n_lang == "${lang}"] | order(publishedAt desc){
  ...,
  category->,
  author->
}`;
};

export const getLatestPostQuery = (lang) => {
	return `*[_type == "post" && __i18n_lang == "${lang}"] | order(publishedAt desc)[0]{
    ...,
    category->,
    author->
  }`;
};

export const getTwoLatestPostsQuery = (lang) => {
	return `*[_type == "post" && __i18n_lang == "${lang}"] | order(publishedAt desc)[0...2]{
    ...,
    category->,
    author->
  }`;
};

export const getPageQuery = (page) => {
	return `*[_type == "page" && seo.slug.current == "${page}"]{
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
          internalLink {
            _type == "reference" => {
              "slug": @ -> seo.slug.current,
              "lang": @ -> __i18n_lang
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
  }}}}}}}[0]`;
};
