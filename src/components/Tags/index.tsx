import React from 'react'

import * as styles from './tags.module.css'

// props
type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) =>
  tags?.length > 0 && (
    <small className={styles.tags}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
