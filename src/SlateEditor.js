// Import React Dependncies
import { useEffect, useMemo, useState } from 'react'

// Import Slate Editor Factory and Components
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const SlateEditor = () => {
    // Create Slate editor
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])
    return (
        <div>
            <Slate
                editor={editor}
                value={value}
                onChange={newValue => setValue(newValue)}
            >
                <Editable />
            </Slate>
        </div>
    )
}

export default SlateEditor
