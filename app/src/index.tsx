import * as React from 'react';
import { render } from 'react-dom';
import { createInstance, Piral } from 'piral-core';
import Layout from './Layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

const instance = createInstance({
  state: {
    components: {
      Layout,
    },
  },
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

render(<Piral instance={instance} />, document.querySelector('.todoapp'));
