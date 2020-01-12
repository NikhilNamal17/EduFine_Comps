module.exports = {
  siteMetadata: {
    title: `EduLearn`,
    name: `Nikhil Namal`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/NikhilNamal17`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/Nikhil_namal17`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/DC", "/HMI"],
      ignoreIndex: false
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` },
  ]
};
