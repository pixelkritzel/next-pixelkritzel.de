import * as React from 'react';
import { AppComponentContext } from 'next/app';

export default class BlogArticle extends React.Component<{ body: string }> {
  static async getInitialProps(context: AppComponentContext['ctx']) {
    console.log(context.asPath);
    return { body: 'Hallo, ich bin ein prop' };
  }

  render() {
    return (
      <>
        <h1>BlogArticle:</h1>
        {this.props.body}
      </>
    );
  }
}
