import React, { useState } from 'react'
import DropDown from '../component/DropDown'

const DropDownPage = () => {
    const [selection, setSelection] = useState(null);
    const options = [{
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }];
    const handleSelect = (option) => {
        setSelection(option)

    }
    return (
        <DropDown options={options} value={selection} onChange={handleSelect} />
    )
}

export default DropDownPage