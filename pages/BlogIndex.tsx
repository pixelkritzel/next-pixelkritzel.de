import * as React from 'react';
import { AppComponentContext } from 'next/app';

export default class BlogIndex extends React.Component<{ body: string }> {
  static async getInitialProps(context: AppComponentContext['ctx']) {
    console.log(context.asPath);
    return { body: 'Hallo, ich bin ein prop' };
  }

  render() {
    return (
      <>
        <h1>BlogIndex:</h1>
        {this.props.body}
      </>
    );
  }
}
