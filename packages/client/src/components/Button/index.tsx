import React from 'react';
import {css} from '@emotion/react';

import Typography from '@src/components/Typography';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  backgroundColor?: React.CSSProperties['backgroundColor'];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({children, ...props}, ref) => {
  return (
    <button css={css``} ref={ref} {...props}>
      <Typography>{children}</Typography>
    </button>
  );
});

export default React.memo(Button);
