"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [seconds, setSeconds] = useState(1500);
  const [running, setRunning] = useState(false);

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    if (!running) return;

    const t = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(t);
  }, [running]);

  const format = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const r = (s % 60).toString().padStart(2, "0");
    return `${m}:${r}`;
  };

  const addNote = () => {
    if (!note.trim()) return;
    setNotes((prev) => [note, ...prev]);
    setNote("");
  };

  return (
    <div style={{ padding: 30, maxWidth: 800, margin: "0 auto" }}>
      <h1>📚 Study App</h1>

      {/* TIMER */}
      <div style={{ marginTop: 20, padding: 20, border: "1px solid #333", borderRadius: 10 }}>
        <h2>Timer</h2>

        <div style={{ fontSize: 40 }}>{format(seconds)}</div>

        <button onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>

        <button onClick={() => setSeconds(1500)} style={{ marginLeft: 10 }}>
          Reset
        </button>
      </div>

      {/* NOTES */}
      <div style={{ marginTop: 30, padding: 20, border: "1px solid #333", borderRadius: 10 }}>
        <h2>Notes</h2>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write note..."
          style={{ width: "100%", height: 80, marginTop: 10 }}
        />

        <button onClick={addNote} style={{ marginTop: 10 }}>
          Add
        </button>

        <ul>
          {notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
