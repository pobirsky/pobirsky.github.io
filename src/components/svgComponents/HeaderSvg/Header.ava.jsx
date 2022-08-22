import React from 'react';
import styles from '../../../styles/styles-svg.module.scss';

const HeaderAva = () => {
  return (
    <img
      className={styles.HeaderAva}
      alt='ava'
      src="https://sun4-10.userapi.com/s/v1/if2/w9Vqn-tvJDaWzNK5kex5Riw_E2C9s-QhJJbVS2bd0aArieUcPm7J-JuXmzj4qbWJQo8vMECvM1WDtcDygZ25T9O2.jpg?size=50x50&quality=96&crop=0,119,720,720&ava=1"/>
  );
};

export default React.memo(HeaderAva);
