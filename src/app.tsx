import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Default from './markdown/default.mdx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const App: React.FunctionComponent<{}> = () => {
    return (
        <>
            <GlobalStyle />
            <Default />
        </>
    );
}
