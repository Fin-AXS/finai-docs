import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SideMenuItem } from './SideMenuItem';

export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query FetchAllMdFiles {
      site {
        siteMetadata {
          description
          title
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
            tag
          }
          fileAbsolutePath
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  const developerDocs = [];
  const adminDocs = [];
  const miscDocs = [];
  const {nodes} = data.allMarkdownRemark;
  nodes.forEach((node) => {
    const {fileAbsolutePath} = node;
    const category = fileAbsolutePath.match(/^.+docs\/(\w+)\/.+/)[1];
    if (category === 'admin') {
      adminDocs.push(node);
    } else if (category === 'developer') {
      developerDocs.push(node);
    } else {
      miscDocs.push(node);
    }
  });
  return (
    <div className='sidebar'>
      <div><a href="/" id='logo'>{title}</a></div>
      <div className="sidemenu-container">
        <SideMenuItem itemName='Home' link='/' />
        <SideMenuItem itemName='Admin Guide' subItems={adminDocs} />
        <SideMenuItem itemName='Developer Guide' subItems={developerDocs}/>
        <SideMenuItem itemName='Other Guides' subItems={miscDocs}/>
      </div>
    </div>
  );
}
