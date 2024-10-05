import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export default function App() {

	const editor = useRef(null);
	const [content, setContent] = useState('');

  console.log(content);


  return (
    <div>

<JoditEditor
			ref={editor}
			value={content}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => setContent(newContent)}
		/>
      
    </div>
  )
}
