import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css'; // custom style

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
