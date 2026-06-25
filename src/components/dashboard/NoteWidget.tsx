import { useState } from "react";
import { useDashboardStore } from "../../store/dashboardStore";

function NoteWidget() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const { notes, addNote, deleteNote, updateNote } = useDashboardStore();

  const handleSave = () => {
    if (title.trim() === "" || content.trim() === "") return;

    if (editingId !== null) {
      updateNote(editingId, title, content);
      setEditingId(null);
    } else {
      addNote(title, content);
    }

    setTitle("");
    setContent("");
  };

  const handleEdit = (id: number, noteTitle: string, noteContent: string) => {
    setEditingId(id);
    setTitle(noteTitle);
    setContent(noteContent);
  };

  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setContent("");
  };

  return (
    <div className="note-widget">
      <h3 className="chart-title">Notes</h3>

      <div className="note-form">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input__field"
        />
        <textarea
          placeholder="Note content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="note-textarea"
        />
        <div className="note-form__buttons">
          <button className="button button-primary" onClick={handleSave}>
            {editingId !== null ? "Update" : "Add Note"}
          </button>
          {editingId !== null && (
            <button className="button button-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="note-list">
  {notes.length === 0 ? (
    <div className="empty-state">
      <p>No notes yet. Add one above!</p>
    </div>
  ) : (
    notes.map((note) => (
      <div key={note.id} className="note-item">
        <div className="note-item__content">
          <h4 className="note-item__title">{note.title}</h4>
          <p className="note-item__text">{note.content}</p>
        </div>
        <div className="note-item__actions">
          <button
            className="button button-secondary"
            onClick={() => handleEdit(note.id, note.title, note.content)}
          >
            Edit
          </button>
          <button
            className="task-delete"
            onClick={() => deleteNote(note.id)}
          >
            ✕
          </button>
        </div>
      </div>
    ))
  )}
</div>
    </div>
  );
}

export default NoteWidget;