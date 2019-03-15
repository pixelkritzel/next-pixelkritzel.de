import * as React from 'react';

const CSS = require('./RootContent.scss');

export default class Root extends React.Component<{ body: string }> {
  render() {
    return (
      <>
        <h1 className={CSS.rootContent}>Root:</h1>
        {this.props.body}
      </>
    );
  }
}
