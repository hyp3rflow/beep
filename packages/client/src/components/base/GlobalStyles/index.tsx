import React from 'react';
import {Global, css} from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .emoji {
          display: inline-block;
          width: auto;
          height: 1em;
          vertical-align: -0.125em;
        }
      `}
    />
  );
};

export default React.memo(GlobalStyles);
