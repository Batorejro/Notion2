
import React, { useEffect, useRef, useState } from 'react';
import './ContentEditor.scss';

const ContentEditor = () => {
    const [content, setContent] = useState('');
    const editorRef = useRef<HTMLDivElement>(null);

    // Po załadowaniu komponentu: pobierz dane z localStorage (lub później z API)
    useEffect(() => {
        const saved = localStorage.getItem('page-content');
        // W przyszłości zamiast tego localStorage można tu zrobić fetch do API
        // fetch('/api/get-content').then(res => res.json()).then(data => setContent(data.content));
        if (saved && editorRef.current) {
            editorRef.current.innerText = saved;
            setContent(saved);
        }
    }, []);

    // Obsługa zmian w edytorze
    const handleInput = () => {
        const text = editorRef.current?.innerText ?? '';
        setContent(text);

        // Zapis lokalny
        localStorage.setItem('page-content', text);

        // W przyszłości: tu można dodać np. saveToAPI(text)
        // await fetch('/api/save-content', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ content: text }),
        // });
    };

    // Alternatywnie: zapis debounce co 1 sekunda po każdej zmianie
    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     fetch('/api/save-content', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ content }),
    //     });
    //   }, 1000);
    //   return () => clearTimeout(timeout);
    // }, [content]);

    return (
        <div className="editor-container">
            <div
                ref={editorRef}
                className={`editor ${!content.trim() ? 'empty' : ''}`}
                contentEditable
                dir="ltr"
                spellCheck
                onInput={handleInput}
                suppressContentEditableWarning
            />
        </div>
    );
};

export default ContentEditor;
