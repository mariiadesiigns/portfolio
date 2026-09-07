"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Instagram, Linkedin } from "lucide-react";
import { homepageContact, projectEmail } from "@/content/homepage";
import styles from "./homepage.module.css";

export function HomeContact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(homepageContact.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Select the email address to copy it.");
    }
  }
  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2>
          Let’s bring your
          <br />
          <em>vision to life.</em>
        </h2>
        <div className={styles.contactActions}>
          <a href={projectEmail()} className={styles.primaryButton}>
            Let’s talk <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <div className={styles.contactSocials}>
            <a
              className={styles.socialButton}
              href={homepageContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              title="Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              className={styles.socialButton}
              href={homepageContact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
          {homepageContact.bookingUrl && (
            <a
              className={styles.textLink}
              href={homepageContact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>
        <div className={styles.emailLine}>
          <a href={`mailto:${homepageContact.email}`}>
            {homepageContact.email}
          </a>
          <button onClick={copyEmail} aria-label="Copy email address">
            {copyStatus === "Email copied" ? (
              <Check size={14} aria-hidden="true" />
            ) : (
              <Copy size={14} aria-hidden="true" />
            )}
          </button>
        </div>
        <span className={styles.copyStatus} role="status">
          {copyStatus}
        </span>
      </section>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerRow}`}>
          <a href="#homepage" className={styles.wordmark}>
            mariia<span>.desiigns</span>
          </a>
          <span className={styles.footerCopy}>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
