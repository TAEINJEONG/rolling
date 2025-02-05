import './editor.css'; // custom style
import './quill-snow.css';
import ReactQuill from 'react-quill-new';
import { useRef, useEffect } from 'react';

// Quill 폰트 등록
const Font = ReactQuill.Quill.import('formats/font');
Font.whitelist = ['NotoSans', 'Pretendard', 'NanumMyeongjo', 'NanumSonPyeonJiCe'];
ReactQuill.Quill.register(Font, true);

// 폰트 이름을 Quill 클래스 형식으로 바로 변환
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

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      editor.formatText(0, editor.getLength(), 'font', fontMap[selectedFont]); // 폰트 적용
    }
  }, [selectedFont]);

  const handleEditorChange = (content) => {
    let modifiedContent = content.trim();
    const fontClass = 'ql-font-' + fontMap[selectedFont]; // 선택된 폰트 클래스 이름 생성

    modifiedContent = modifiedContent.replace(/<p>([\s\S]*?)<\/p>/g, (_, innerContent) => {
      // Quill 내부 동작으로 생기는 불필요한 줄바꿈 제거
      const textWithoutBr = innerContent.replace(/<br\s*\/?>/g, '').trim();
      if (textWithoutBr === '') {
        return '';
      }
      // 현재 선택된 폰트 적용
      if (/^\s*<span class="ql-font-/.test(innerContent)) {
        return `<p>${innerContent}</p>`;
      } else {
        return `<p><span class="${fontClass}">${innerContent}</span></p>`;
      }
    });

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
