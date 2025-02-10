import '../styles/editor.css'; // custom style
import '../styles/quill-snow.css';
import ReactQuill from 'react-quill-new';
import { useRef, useEffect } from 'react';

// Quill 폰트 등록
const Font = ReactQuill.Quill.import('formats/font');
Font.whitelist = ['NotoSans', 'Pretendard', 'NanumMyeongjo', 'NanumSonPyeonJiCe'];
ReactQuill.Quill.register(Font, true);

// 폰트 이름을 Quill 클래스 형식으로 매핑
const fontMap = {
  'Noto Sans': 'NotoSans',
  Pretendard: 'Pretendard',
  나눔명조: 'NanumMyeongjo',
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
  const editorRef = useRef(null);

  // 선택된 폰트를 에디터에 적용하는 함수
  const handleFontChange = () => {
    const editor = editorRef.current.getEditor();

    if (editorRef.current && selectedFont) {
      // 전체 텍스트에 폰트 적용
      editor.formatText(0, editor.getLength(), 'font', fontMap[selectedFont]);
    }
  };

  useEffect(() => {
    handleFontChange();
  }, [selectedFont]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        modules={modules}
        value={editorContent}
        onChange={handleEditorChange}
        onChangeSelection={handleFontChange}
      />
    </div>
  );
};

export default Editor;
