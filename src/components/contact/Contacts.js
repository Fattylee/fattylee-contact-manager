import React, { Fragment } from 'react';

import { Context } from '../context';

const Contacts = () => {
    return (
      <Context.Consumer>
        { state => {
          return (
            <Fragment>
              Contacts {console.log(state)}
            </Fragment>
           )
        }}
      </Context.Consumer>
    )
};

export default Contacts;

