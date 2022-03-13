import React from 'react';
import twemoji from 'twemoji';

export type TypographyProps = React.ComponentPropsWithoutRef<'span'>;

const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(({children, ...props}, ref) => {
  return (
    <span {...props} ref={ref}>
      {getTwemojiChildren(children)}
    </span>
  );
});

function getTwemojiChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return getTwemojiChildren(child.props.children);
    }
    if (typeof child === 'string') {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: twemoji.parse(child, {folder: 'svg', ext: '.svg'}) as unknown as string,
          }}
        />
      );
    }
    return child;
  });
}

export default React.memo(Typography);
