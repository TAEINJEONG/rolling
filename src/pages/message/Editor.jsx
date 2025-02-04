import ReactQuill from 'react-quill-new';
import './quill-snow.css';
import './editor.css'; // custom style
import { useCallback } from 'react';

// Toolbar options
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    [{ color: [] }],
  ],
};

const Editor = ({ editorContent, setEditorContent }) => {
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default Editor;
