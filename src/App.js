import React from 'react'
import Button from './component/Button'
import { FaStar } from 'react-icons/fa'
const App = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
                <Button >
                    <FaStar />
                    Click Me!</Button>
            </div>
            <div>
                <Button rounded secondary>
                    <FaStar />
                    Click Me!</Button>
            </div>
            <div>
                <Button success rounded>
                    <FaStar />
                    Click Me!</Button>
            </div>
            <div>
                <Button rounded outline warning> <FaStar />Click Me!</Button>
            </div>
            <div>
                <Button rounded danger>  <FaStar />Click Me!</Button>
            </div>
        </div>
    )
}

export default App