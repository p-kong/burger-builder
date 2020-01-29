import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.BuildLabel}>{props.label}</div>
      <button className={classes.More} onClick={props.added}>
        +
      </button>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        -
      </button>
    </div>
  );
};

export default buildControl;
