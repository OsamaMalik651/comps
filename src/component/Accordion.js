import React, { useState } from 'react';
import { FaCaretDown, FaCaretLeft } from 'react-icons/fa'


const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    // const onHeadingClick = (id) => {
    //     setExpandedIndex(id);
    // }
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <div key={item.id} >
                <div
                    className='cursor-pointer flex gap-3 items-center border-b p-3 bg-gray-50 '
                    onClick={() => { isExpanded ? setExpandedIndex(-1) : setExpandedIndex(index) }}>
                    {item.label}

                    <span className='px-3 text-xl'>{isExpanded ? <FaCaretDown /> : <FaCaretLeft />}  </span>
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div >
        )

    });

    return (
        <div className='border-x-2 border-t-2 rounded'>
            {renderedItems}
        </div>
    )
}

export default Accordion