import React from 'react'
import type { ReactNode } from 'react';

// props
type LayoutProps = {
  children: ReactNode;
  as: string;
};

const Container = ({ children, as = 'div' }: LayoutProps) => {
  const Tag = as

  return (
    <Tag
      style={{
        maxWidth: 'var(--size-max-width)',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--size-gutter)',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
