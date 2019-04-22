import * as React from 'react';
import * as ReactDom from 'react-dom';

import Default from './default.mdx';

ReactDom.render(
    <div>
        <h1>Hola</h1>
        <Default />
    </div>,
    document.getElementById('app')
);
