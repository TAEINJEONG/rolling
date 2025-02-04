import './editor.css'; // custom style
import './quill-snow.css';
import ReactQuill from 'react-quill-new';
import { useRef, useEffect } from 'react';

// Quill 폰트 등록
const Font = ReactQuill.Quill.import('formats/font');
Font.whitelist = ['NotoSans', 'Pretendard', 'NanumMyeongjo', 'NanumSonPyeonJiCe'];
ReactQuill.Quill.register(Font, true);

const fontMap = {
  'Noto Sans': 'Noto Sans',
  Pretendard: 'Pretendard',
  나눔명조: 'Nanum Myeongjo',
  '나눔손글씨 손편지체': 'NanumSonPyeonJiCe',
};

// Toolbar options
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    [{ color: [] }],
  ],
};

const Editor = ({ editorContent, setEditorContent, selectedFont }) => {
  const editorRef = useRef(null); // 에디터에 접근하기 위한 ref

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      editor.removeFormat(0, editor.getLength()); // 에디터 텍스트 포맷 초기화
      const quillFont = fontMap[selectedFont]; // Select 폼 option -> quillFont 매핑
      editor.formatText(0, editor.getLength(), 'font', quillFont.split(' ').join('')); // 폰트 적용
    }
  }, [selectedFont]);

  const handleEditorChange = (content) => {
    let modifiedContent = content;

    // 폰트가 선택되지 않은 경우 <span class="ql-font-NotoSans"> 를 자동 추가
    if (!content.includes('ql-font')) {
      modifiedContent = content.replace(
        /<p>(.*?)<\/p>/g,
        '<p><span class="ql-font-NotoSans">$1</span></p>'
      );
    }
    setEditorContent(modifiedContent);
  };

  return (
    <div>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        modules={modules}
        value={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
