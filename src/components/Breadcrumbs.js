import React, { memo } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import * as css from './Breadcrumbs.module.css';

const Breadcrumbs = ({ breadcrumbs, variant }) => {
  return (
    <div className={cn(css.root, { [css[variant]]: css[variant] })}>
      {breadcrumbs.map((breadcrumb, i) => {
        const isString = typeof item === 'string';
        return (
          <span key={i} className={css.crumb}>
            {isString ? (
              breadcrumb.name
            ) : (
              <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
            )}
            {i < breadcrumbs.length - 1 && (
              <span className={css.arrow}>&gt;</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default memo(Breadcrumbs);