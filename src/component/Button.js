import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';



const Button = ({ children, outline, rounded, primary, secondary, success, warning, danger, ...rest }) => {

    const classes = twMerge(classNames('flex items-center', 'px-3', 'py-1.5', 'border', rest.className, {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
    }));
    return (
        <button
            {...rest}
            className={`${classes}`}

        > {children}</button >

    )
}

Button.propTypes = {
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    checkVariation: ({ primary, secondary, success, warning, danger, }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning and danger can be used.')
        }

    }

}

export default Button;