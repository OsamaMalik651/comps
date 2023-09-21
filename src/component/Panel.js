import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const Panel = ({ children, ...rest }) => {
    const classes = twMerge(classNames('border rounded p-3 shadow bg-white w-full', rest.className))
    return (
        <div {...rest} className={classes}>{children}</div>
    )
}

export default Panel