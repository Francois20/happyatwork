import sanityClient from '@sanity/client';
export const prerender = true;

const client = sanityClient({
	projectId: 'szdcwwtw',
	dataset: 'production',
	apiVersion: '2022-01-07',
	useCdn: true
});

export async function GET() {
	const querySettings = `*[_type == "siteSettings" && __i18n_lang == 'en-us']{
    "startPage": startPage -> seo.slug.current,
    "postPage": post.parentPage -> {
      "slug": seo.slug.current,
      "refs": __i18n_refs[]{
        _type == "reference" => {
          "slug": @ -> seo.slug.current,
        }
      }
    }
  }[0]`;

	const settings = await client.fetch(querySettings);

	const queryPages = `*[_type == 'page' && __i18n_lang == 'en-us' && seo.slug.current != ${settings.startPage}]{
    "slug": seo.slug.current,
    __i18n_lang,
    __i18n_refs[]{
      _type == "reference" => {
        "slug": @ -> seo.slug.current,
        "lang": @ -> __i18n_lang
      }
    }
  }`;

	const queryPosts = `*[_type == 'post' && __i18n_lang == 'en-us']{
    "slug": seo.slug.current,
    __i18n_lang,
    __i18n_refs[]{
      _type == "reference" => {
        "slug": @ -> seo.slug.current,
        "lang": @ -> __i18n_lang
      }
    }
  }`;

	const result = await Promise.all([client.fetch(queryPages), client.fetch(queryPosts)]);
	const BASE_URL = 'https://www.happyatwork.io';

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">
    <url>
      <loc>${BASE_URL}/</loc>
      <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/"/>
      <xhtml:link rel="alternate" hreflang="sv" href="${BASE_URL}/sv-se"/>
    </url>
    ${result[0]
			.map(function (item) {
				return `
          <url>
            <loc>${BASE_URL}/en-us/${item.slug}</loc>
            <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en-us/${item.slug}"/>
            ${
							item.__i18n_refs
								? `<xhtml:link rel="alternate" hreflang="sv" href="${BASE_URL}/sv-se/${item.__i18n_refs[0].slug}"/>`
								: ''
						}
          </url>
          ${
						item.__i18n_refs
							? `
          <url>
            <loc>${BASE_URL}/sv-se/${item.__i18n_refs[0].slug}</loc>
            <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en-us/${item.slug}"/>
            <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/sv-se/${item.__i18n_refs[0].slug}"/>
          </url>
          `
							: ''
					}
          `;
			})
			.join('')}
    ${result[1]
			.map(function (item) {
				return `
            <url>
              <loc>${BASE_URL}/en-us/${settings.postPage.slug}/${item.slug}</loc>
              <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en-us/${settings.postPage.slug}/${item.slug}"/>
              ${
								item.__i18n_refs
									? `<xhtml:link rel="alternate" hreflang="sv" href="${BASE_URL}/sv-se/${settings.postPage.refs[0].slug}/${item.__i18n_refs[0].slug}"/>`
									: ''
							}
            </url>
            ${
							item.__i18n_refs
								? `
            <url>
              <loc>${BASE_URL}/sv-se/${settings.postPage.refs[0].slug}/${item.__i18n_refs[0].slug}</loc>
              <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en-us/${settings.postPage.slug}/${item.slug}"/>
              <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/sv-se/${settings.postPage.refs[0].slug}/${item.__i18n_refs[0].slug}"/>
            </url>
            `
								: ''
						}
            `;
			})
			.join('')}
    </urlset>
`.trim();

	return new Response(xml, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
}
