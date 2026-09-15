"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./playground.module.css";

export function EditableText({ as: Tag, value, label, className, onCommit }: {
  as: "h1" | "p" | "div";
  value: string;
  label: string;
  className?: string;
  onCommit?: (text: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const element = useRef<HTMLElement>(null);
  const lastClick = useRef(0);

  useEffect(() => {
    if (!editing || !element.current) return;
    element.current.focus({ preventScroll: true });
    const range = document.createRange();
    range.selectNodeContents(element.current);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }, [editing]);

  useEffect(() => {
    if (editing || !element.current) return;
    if (element.current.innerText !== value) element.current.innerText = value;
  }, [value, editing]);

  return <Tag ref={element as never} className={cn(className, styles.editableText)}
    data-editable-intro={label} tabIndex={0}
    contentEditable={editing ? "plaintext-only" : false} suppressContentEditableWarning
    role={editing ? "textbox" : undefined} aria-label={label} aria-multiline={editing ? true : undefined}
    title="Double-click to edit"
    onPointerDown={event => {
      if (editing) { event.stopPropagation(); return; }
      if (event.timeStamp - lastClick.current < 400) {
        event.stopPropagation();
        event.preventDefault();
        lastClick.current = 0;
        setEditing(true);
        return;
      }
      lastClick.current = event.timeStamp;
    }}
    onDoubleClick={event => { event.stopPropagation(); event.preventDefault(); setEditing(true); }}
    onBlur={event => {
      if (!editing) return;
      const text = event.currentTarget.innerText;
      const next = text.trim() ? text : "";
      setEditing(false);
      if (next !== value) onCommit?.(next);
    }}
    onKeyDown={event => {
      event.stopPropagation();
      if (event.nativeEvent.isComposing) return;
      if (!editing && event.key === "Enter") {
        event.preventDefault();
        setEditing(true);
      } else if (editing && event.key === "Escape") {
        event.preventDefault();
        event.currentTarget.innerText = value;
        event.currentTarget.blur();
      } else if (editing && event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        event.currentTarget.blur();
      }
    }}>{value}</Tag>;
}
