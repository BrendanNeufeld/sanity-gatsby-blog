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
                  buildHookId: '5ff4d4ecc6c16e0a59c747ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h1bj22x3',
                  apiId: '0321f010-4cb1-4a2f-8286-c7d6787befef'
                },
                {
                  buildHookId: '5ff4d4eddd13fc0e351c1d10',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j9rfb5ft',
                  apiId: '048588b8-1740-4a4d-805f-9f396e97fc74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BrendanNeufeld/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j9rfb5ft.netlify.app', category: 'apps' }
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
