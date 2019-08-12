import React from 'react';
import { createPortal } from 'react-dom';
import './modal.css'
export default class Dialog extends React.Component {
  constructor(props) {
    super(props);

    this.node = document.createElement('div');
    this.node.setAttribute('class', 'modal')
    document.body.appendChild(this.node);
  }

  render() {
    return createPortal(
      <div>
        {this.props.children}
      </div>,
      this.node
    );
  }
}