import * as React from 'react';
import { AppComponentContext } from 'next/app';

import RootContent from '../components/RootContent';

export default class Root extends React.Component<{ body: string }> {
  static async getInitialProps(context: AppComponentContext['ctx']) {
    console.log(context.asPath);
    return { body: 'Hallo, ich bin ein prop' };
  }

  render() {
    const { body } = this.props;
    return (
      <>
        <RootContent body={body} />
      </>
    );
  }
}
