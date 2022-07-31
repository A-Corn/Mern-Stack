import React from 'react'
import { useParams } from 'react-router-dom'

const FullDesign = () => {
    const {word, textColor, backgroundColor} = useParams()

    return (
        <div>

            {
                isNaN(word) ?
                    <h1 style={
                        
                        textColor ?
                            { color: textColor, backgroundColor: backgroundColor }
                            : null
                    }>
                        This is a word: {word}
                    </h1>
                    : //If the word param IS a number:
                    <h1>
                        This is a number: {word}
                    </h1>
            }

        </div>
    )
}

export default FullDesign