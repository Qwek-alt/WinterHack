import { useState } from 'react'
import { SlatePlugins } from '@udecode/slate-plugins'

const FieldEdit = ({ id }) => {

    const editableProps = {
        placeholder: 'Type...',
        style: {
          padding: '15px',
        },
      };

      const [debugValue, setDebugValue] = useState('')

    return (
        <div>
            <SlatePlugins 
                id={id}
                editableProps={editableProps}
                onChange={(newValue) => {
                    setDebugValue(newValue)
                }}
            />
        </div>
    )
}

export default FieldEdit
