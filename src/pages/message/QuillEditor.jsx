import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }],
  ],
};

const QuillEditor = () => {
  return (
    <div>
      <ReactQuill theme="snow" modules={modules} className="h-full" />
    </div>
  );
};
export default QuillEditor;
