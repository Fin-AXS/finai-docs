import { Link } from 'gatsby';
import React from 'react';

const SideMenuItemBuilder = ({itemName, subItems}) => {
  return (
    <div className='side-menu-item'>
      <h3>{itemName}</h3>
      {
        subItems &&
        subItems.length &&
        subItems.map((subItem) => (
          <Link
            key={subItem.frontmatter.slug}
            to={`/${subItem.frontmatter.tag}/${subItem.frontmatter.slug}`}
          >
            {subItem.frontmatter.title}
          </Link>)
        )}
    </div>
  );
};

export const SideMenuItem = ({itemName, link, subItems}) => {
  if (link) {
    return <Link to={link}><SideMenuItemBuilder itemName={itemName} subItems={subItems}/></Link>
  }
  return <SideMenuItemBuilder itemName={itemName} subItems={subItems} />
};
