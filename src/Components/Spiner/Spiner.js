import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import style from './Spiner.module.scss';

class Spiner extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <Loader
        className={style.Loader}
        type="BallTriangle"
        color="#00BFFF"
        height={80}
        width={80}
        visible={isLoading}
      />
    );
  }
}

export default Spiner;
