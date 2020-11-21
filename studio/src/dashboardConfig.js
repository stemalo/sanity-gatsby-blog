export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb929deb3cc318f3e33175a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-q91w2w8h',
                  apiId: '41a62e1d-fcfa-4878-af1a-0d85068f3667'
                },
                {
                  buildHookId: '5fb929de8ed60ca4364eedb8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jdmw8qg5',
                  apiId: '3b543abd-83a7-4054-95b3-55507c2d815a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stemalo/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jdmw8qg5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
