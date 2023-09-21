import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa';
import Panel from './Panel';

const DropDown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option)
    }
    const renderedOptions = options.map((option, index) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1'
                key={option.value}
                onClick={() => handleOptionClick(option)}>{option.label}</div>
        );
    });

    return (
        <div>
            <div>DropDown</div>
            <div className='w-48 relative'>

                {/* <div
                    className='flex justify-between items-center cursor-pointer '
                    onClick={() => setIsOpen(!isOpen)}>{value?.label || "Select..."}<FaCaretDown className='text-lg' /> </div> */}
                {/* {isOpen && <div className='absolute top-full border rounded p-3 shadow-bg-white w-full'>{renderedOptions}</div>} */}
                <Panel className='flex justify-between items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)} >
                    {value?.label || "Select..."}<FaCaretDown className='text-lg' />
                </Panel>
                {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}

            </div>

        </div>
    )
}

export default DropDown