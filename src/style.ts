export const styleTemplate = ` :root {
        font-family: "DM Sans", sans-serif;
        color: #181818;
        background: #e9e6df;
        font-synthesis: none;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
        background: #e9e6df;
      }
      .portfolio {
        width: 100%;
        max-width: 1700px;
        min-height: 1100px;
        margin: auto;
        background: var(--bg);
        color: var(--text);
        font-family: "DM Sans", sans-serif;
        overflow: hidden;
        transition: width 0.25s;
        box-shadow: 0 13px 38px rgba(26, 24, 20, 0.15);
      }
      .portfolio.preview-mobile {
        max-width: 460px;
      }
      .portfolio-content {
        min-height: 100%;
      }
      .portfolio-section {
        padding: 70px;
        border-bottom: 1px solid
          color-mix(in srgb, var(--muted) 25%, transparent);
        position: relative;
      }
      .section-kicker {
        display: flex;
        align-items: center;
        gap: 9px;
        color: var(--muted);
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 700;
        margin-bottom: 42px;
      }
      .section-kicker span {
        width: 24px;
        height: 1px;
        background: var(--accent);
      }
      .hero-section {
        padding-top: 100px;
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        align-items: center;
        min-height: 650px;
        position: relative;
        overflow: hidden;
      }
      .eyebrow {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--muted);
        margin: 0 0 25px;
      }
      .hero-copy h1 {
        font: 600 clamp(60px, 8vw, 94px)/0.87 "Manrope";
        letter-spacing: -6px;
        margin: 0;
        max-width: 700px;
      }
      .hero-title {
        color: var(--accent);
        font: 500 19px "Manrope";
        margin: 20px 0 25px;
      }
      .hero-tagline {
        max-width: 580px;
        color: var(--muted);
        font-size: 15px;
        line-height: 1.7;
      }
      .hero-actions {
        margin-top: 34px;
        display: flex;
        align-items: center;
        gap: 24px;
      }
      .hero-actions a {
        color: var(--text);
        text-decoration: none;
        font-size: 11px;
        font-weight: 600;
      }
      .hero-actions .primary-link {
        background: var(--text);
        color: var(--bg);
        padding: 12px 15px;
        border-radius: 3px;
      }
      .primary-link span {
        margin-left: 14px;
      }
      .hero-visual {
        position: relative;
        display: grid;
        place-items: center;
      }
      .portfolio-avatar {
        width: 220px;
        height: 220px;
        display: grid;
        place-items: center;
        overflow: hidden;
        background: var(--accent);
        color: white;
        border-radius: var(--avatar-shape);
        font: 600 54px "Manrope";
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.11);
      }
      .portfolio-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .availability-card {
        position: absolute;
        bottom: -5px;
        right: -5px;
        background: var(--surface);
        border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.09);
        padding: 10px 14px;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .availability-card span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #45a66d;
      }
      .availability-card p {
        margin: 0;
        font-size: 8px;
        color: var(--muted);
      }
      .availability-card strong {
        display: block;
        color: var(--text);
        font-size: 9px;
      }
      .hero-meta {
        position: absolute;
        bottom: 25px;
        left: 70px;
        right: 70px;
        display: flex;
        justify-content: space-between;
        color: var(--muted);
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }
      .about-section {
        background: var(--surface);
      }
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }
      .about-grid h2,
      .section-heading h2,
      .skills-layout h2,
      .contact-grid h2 {
        font: 600 38px/1.08 "Manrope";
        letter-spacing: -2px;
        margin: 0;
      }
      .about-grid > div {
        color: var(--muted);
        font-size: 12px;
        line-height: 1.7;
      }
      .about-grid .about-lead {
        color: var(--text);
        font-size: 17px;
        line-height: 1.55;
      }
      .about-grid a {
        color: var(--accent);
        font-weight: 600;
        text-decoration: none;
      }
      .section-heading {
        margin-bottom: 34px;
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 30px;
      }
      .section-heading p {
        color: var(--muted);
        font-size: 11px;
        max-width: 220px;
        line-height: 1.5;
      }
      .experience-list {
        border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
      }
      .experience-item {
        display: grid;
        grid-template-columns: 45px 1fr;
        gap: 20px;
        padding: 25px 0;
        border-bottom: 1px solid
          color-mix(in srgb, var(--muted) 25%, transparent);
      }
      .experience-item > span {
        color: var(--accent);
        font-size: 10px;
      }
      .experience-item h3 {
        font: 600 18px "Manrope";
        margin: 0 0 6px;
      }
      .experience-item p {
        color: var(--muted);
        font-size: 10px;
        margin: 0 0 9px;
      }
      .experience-item p strong {
        color: var(--text);
      }
      .experience-item small {
        display: block;
        color: var(--muted);
        font-size: 10px;
        line-height: 1.6;
      }
      .project-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
      }
      .project-card {
        background: var(--surface);
        border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
      }
      .project-art {
        height: 210px;
        position: relative;
        overflow: hidden;
        background: #ddd;
      }
      .project-art::before,
      .project-art::after {
        content: "";
        position: absolute;
        border-radius: 50%;
      }
      .project-art::before {
        width: 140px;
        height: 140px;
        background: var(--accent);
        top: 35px;
        left: 28px;
      }
      .project-art::after {
        width: 160px;
        height: 38px;
        background: var(--text);
        transform: rotate(-25deg);
        right: -10px;
        top: 90px;
      }
      .art-2::before {
        border-radius: 0;
        transform: rotate(35deg);
      }
      .art-2::after {
        border-radius: 5px;
        background: var(--accent);
      }
      .project-art span {
        position: absolute;
        z-index: 2;
        font-size: 9px;
        left: 14px;
        top: 13px;
      }
      .project-card > div:last-child {
        padding: 18px;
      }
      .project-card p {
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--muted);
      }
      .project-card h3 {
        font: 600 18px "Manrope";
        margin: 5px 0;
      }
      .project-card small {
        display: block;
        color: var(--muted);
        font-size: 9px;
        line-height: 1.5;
        min-height: 42px;
      }
      .project-card a {
        color: var(--accent);
        text-decoration: none;
        font-size: 9px;
        font-weight: 700;
        display: inline-block;
        margin-top: 12px;
      }
      .skills-section {
        background: var(--text);
        color: var(--bg);
      }
      .skills-section .section-kicker {
        color: color-mix(in srgb, var(--bg) 65%, transparent);
      }
      .skills-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: center;
      }
      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .skill-tags span {
        border: 1px solid color-mix(in srgb, var(--bg) 28%, transparent);
        border-radius: 30px;
        padding: 9px 14px;
        font-size: 10px;
      }
      .contact-section {
        background: var(--accent);
        color: white;
      }
      .contact-section .section-kicker {
        color: rgba(255, 255, 255, 0.75);
      }
      .contact-section .section-kicker span {
        background: white;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: end;
      }
      .contact-grid h2 {
        font-size: 50px;
      }
      .contact-grid p {
        font-size: 14px;
        opacity: 0.8;
      }
      .contact-grid > div > a {
        color: white;
        text-decoration: none;
        font: 600 18px "Manrope";
        font-size: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }
      .contact-details {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 40px;
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        opacity: 0.8;
      }
      .template-editorial .hero-copy h1 {
        font-family: "Playfair Display";
        font-style: italic;
        letter-spacing: -4px;
      }
      .template-editorial .hero-section {
        background: var(--surface);
      }
      .template-editorial .hero-copy {
        z-index: 1;
      }
      .template-editorial .hero-visual .portfolio-avatar {
        border-radius: 0;
        width: 170px;
        height: 260px;
      }
      .template-editorial .about-section {
        background: var(--bg);
      }
      .template-editorial .projects-section .project-art {
        height: 240px;
      }
      .template-bold .portfolio-section {
        border-color: color-mix(in srgb, var(--text) 15%, transparent);
      }
      .template-bold .hero-section {
        background: var(--accent);
        color: white;
      }
      .template-bold .hero-copy h1,
      .template-bold .hero-title,
      .template-bold .hero-tagline,
      .template-bold .eyebrow {
        color: white;
      }
      .template-bold .hero-actions .primary-link {
        color: var(--accent);
        background: white;
      }
      .template-bold .portfolio-avatar {
        background: var(--text);
      }
      .template-bold .about-section,
      .template-bold .experience-section,
      .template-bold .projects-section {
        background: var(--surface);
      }
      .template-bold .section-kicker,
      .template-bold .about-grid > div,
      .template-bold .about-grid .about-lead,
      .template-bold .section-heading p,
      .template-bold .experience-item small {
        color: var(--muted);
      }
      .template-bold .contact-section {
        background: var(--text);
      }
      @media (max-width: 900px) {
        .workspace {
          grid-template-columns: 360px minmax(0, 1fr);
        }
        .portfolio-section {
          padding: 45px;
        }
        .hero-section {
          padding-top: 80px;
        }
        .hero-copy h1 {
          font-size: 55px;
        }
        .portfolio-avatar {
          width: 170px;
          height: 170px;
        }
        .about-grid,
        .skills-layout,
        .contact-grid {
          gap: 35px;
        }
      }
      @media (max-width: 720px) {
        .topbar {
          padding: 0 15px;
        }
        .button {
          font-size: 0;
        }
        .button span {
          font-size: 14px;
          margin: 0;
        }
        .workspace {
          display: block;
        }
        .sidebar {
          position: static;
          height: auto;
          min-height: 0;
          border-right: 0;
          border-bottom: 1px solid #d6d1c7;
        }
        .panel-stack {
          padding: 0 18px 30px;
        }
        .preview-toolbar {
          padding: 0 13px;
        }
        .preview-stage {
          padding: 10px;
        }
        .portfolio-section {
          padding: 35px 25px;
        }
        .hero-section {
          min-height: 780px;
          grid-template-columns: 1fr;
          align-content: start;
        }
        .hero-copy h1 {
          font-size: 52px;
          letter-spacing: -3.5px;
        }
        .hero-visual {
          margin-top: 55px;
        }
        .portfolio-avatar {
          width: 180px;
          height: 180px;
        }
        .hero-meta {
          left: 25px;
          right: 25px;
        }
        .about-grid,
        .skills-layout,
        .contact-grid,
        .project-grid {
          grid-template-columns: 1fr;
        }
        .section-heading {
          display: block;
        }
        .section-heading p {
          margin-top: 10px;
        }
        .contact-grid {
          gap: 30px;
        }
      }`;
