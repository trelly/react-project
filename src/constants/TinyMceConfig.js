const CONFIG = {
    plugins: "textpattern preview, anchor, autosave, autoresize, picture, video, voice, addlink, commodity, vote, tel",
    menubar: false,
    toolbar: ['bold italic underline blockquote bullist numlist | picture video voice addlink commodity vote tel', ' preview | undo redo newdocument'],
    autosave_restore_when_empty: false,
    autosave_ask_before_unload: true,
    autosave_interval: "5s",
    statusbar: false,
    autoresize_bottom_margin: 50,
    min_height: 800,
    setup: function(editor) {},
    content_css: []
}

export default CONFIG
