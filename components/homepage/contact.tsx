"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Instagram, Linkedin } from "lucide-react";
import { homepageContact, projectEmail } from "@/content/homepage";
import { cn } from "@/lib/utils";
import {
  contactActions,
  contactSection,
  contactSocials,
  copyStatus as copyStatusClass,
  emailLine,
  homeCta,
  homeContainer,
  homeFooter,
  homeFooterCopy,
  homeFooterRow,
  homeWordmark,
  socialButton,
  textLink,
} from "./classes";

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
      <section id="contact" className={contactSection}>
        <h2>
          Let’s bring your
          <br />
          <em>vision to life.</em>
        </h2>
        <div className={contactActions}>
          <a href={projectEmail()} className={homeCta}>
            Let’s talk <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <div className={contactSocials}>
            <a
              className={socialButton}
              href={homepageContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              title="Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              className={socialButton}
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
              className={textLink}
              href={homepageContact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>
        <div className={emailLine}>
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
        <span className={copyStatusClass} role="status">
          {copyStatus}
        </span>
      </section>
      <footer className={homeFooter}>
        <div className={cn(homeContainer, homeFooterRow)}>
          <a href="#homepage" className={homeWordmark}>
            mariia<span>.desiigns</span>
          </a>
          <span className={homeFooterCopy}>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
