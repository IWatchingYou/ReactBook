import React from 'react';

export class DesktopComponent extends React.Component{
  render(){
    return(
      <div>
        <div className="Desktop">
          {this.props.children}
        </div>
      </div>
    )
  }
}