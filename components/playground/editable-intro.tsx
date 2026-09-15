"use client";

import { playgroundIntro } from "@/content/playground";
import { playgroundLede } from "./classes";
import { EditableText } from "./editable-text";
import styles from "./playground.module.css";

export function EditableIntro() {
  return <div className={styles.introCopy}>
    <EditableText as="h1" value={playgroundIntro.title} label="Playground heading" />
    <EditableText as="p" value={playgroundIntro.description} label="Playground description" className={playgroundLede} />
    <EditableText as="p" value={playgroundIntro.invitation} label="Playground invitation" className={playgroundLede} />
  </div>;
}
