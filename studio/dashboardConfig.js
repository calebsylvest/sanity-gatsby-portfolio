export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e0ed2ca15c28a1098e57250',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9pimo4dq',
                  apiId: '2b664a3c-ae44-4ce8-91b5-b7c7a652b2e5'
                },
                {
                  buildHookId: '5e0ed2cad4acdbda6c9d8f2c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xuq9yuy4',
                  apiId: 'fde35652-1de8-4d12-9d44-1629670cc5c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/calebsylvest/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xuq9yuy4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
