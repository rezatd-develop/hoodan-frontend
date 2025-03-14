import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import HoPrimaryButton from '../button/HoPrimaryButton';

export default function HoTextEditor(props) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            props?.contentChanged(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                apiKey='nbf3meeuiaqpol0f7304ol4a7bma7klxm03itd668frasdyk'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={props?.initialValue}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <HoPrimaryButton onClick={log} className='mt-3'>Finish Writing</HoPrimaryButton>
        </>
    );
}