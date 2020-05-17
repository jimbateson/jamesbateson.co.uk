const {
  w3DateFilter,
  markdownFilter,
  dateFilter,
  helpers,
} = previewUtil;

const env = nunjucks.configure();

env.addFilter('w3DateFilter', w3DateFilter);
env.addFilter('markdownFilter', markdownFilter);
env.addFilter('dateFilter', dateFilter);

const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS());
  const html = env.render(path, { ...data, helpers });
  return <div dangerouslySetInnerHTML={{ __html: html }}/>
};

const Home = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/home.njk"
    context={({ title, bannerSummary, postsHeading, archiveButtonText, about }) => ({
      title,
	  bannerSummary,
      postsHeading,
      archiveButtonText,
	  about,
      collections: {
        postFeed: [{
          url: 'javascript:void(0)',
          date: new Date(),
          data: {
            title: 'Sample Post',
          },
        }],
      },
    })}
  />
);

const Article = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/post.njk"
    context={({ title, date, body }) => ({
      title,
      date,
      content: markdownFilter(body || ''),
    })}
  />
);

const Journal = ({ entry }) => (
	<Preview
		entry={entry}
		path="layouts/post.njk"
		context={({ title, date, body }) => ({
			title,
			date,
			content: markdownFilter(body || ''),
		})}
	/>
);

const Project = ({ entry }) => (
	<Preview
		entry={entry}
		path="layouts/project-single.njk"
		context={({ title, date, body }) => ({
			title,
			date,
			content: markdownFilter(body || ''),
		})}
	/>
);

const Page = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/page.njk"
    context={({ title, body }) => ({
      title,
      content: markdownFilter(body || ''),
    })}
  />
);

const SiteData = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/base.njk"
    context={({ name, shortDesc, showThemeCredit }) => ({
      site: {
        name,
        shortDesc,
        showThemeCredit,
      },
    })}
  />
);

const Nav = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/base.njk"
    context={({ items }) => ({
      navigation: {
        items,
      },
    })}
  />
);

CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('articles', Article);
CMS.registerPreviewTemplate('journal', Journal);
CMS.registerPreviewTemplate('project', Project);
CMS.registerPreviewTemplate('generic_pages', Page);
CMS.registerPreviewTemplate('site_data', SiteData);
CMS.registerPreviewTemplate('nav', Nav);
