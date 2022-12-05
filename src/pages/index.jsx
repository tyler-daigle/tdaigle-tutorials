import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

import robotComputer from "../../static/img/monitor_illustration.svg";

export default function Index() {
  return (
    <Layout
      title="tdaigle.com - front end web development"
      description="Tutorials and articles about front end web development."
    >
      <header>
        <h1 className={`${styles.largeHeader} ${styles.centerHeader}`}>
          tdaigle.com
        </h1>
        <span className={styles.textTagLine}>Front end web development</span>
      </header>

      <div className={styles.frontPageSectionContainer}>
        <section className={styles.frontPageSection}>
          <img
            src="/img/javascript_illustration.svg"
            height="130"
            className={styles.frontPageImage}
            alt="Robot peeking over a computer monitor"
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.smallHeader}>Welcome!</h2>
            <p>
              My name is Tyler, I am a front end web developer. This site is a
              collection of articles and tutorials that I have written about web
              development. I enjoy helping other people learn about web
              development and have written about everything from basic{" "}
              <span className={styles.greenText}>HTML</span> to{" "}
              <span className={styles.greenText}>CSS</span> to full projects
              using <span className={styles.greenText}>React</span>.
            </p>
          </div>
        </section>

        <section className={styles.frontPageSection}>
          <img
            src="/img/monitor_illustration.svg"
            height="130"
            className={styles.frontPageImage}
            alt="Little bird sitting on top of a monitor."
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.smallHeader}>
              Learning web development can be difficult
            </h2>
            <p>
              I try to break topics down in ways that I know helped me while
              learning. I also know what it is like to be a career switcher
              later in life and how difficult that can be. If you are interested
              in learning about web development and are interested in possibly
              making a career out of it, I hope that some of the things I write
              will help you, regardless of your age or background.
            </p>
            <Link className={styles.button} href="/docs/intro">
              View Tutorials
            </Link>
          </div>
        </section>

        <section className={styles.frontPageSection}>
          <img
            src="/img/browser_icon_3.svg"
            height="130"
            className={styles.frontPageImage}
            alt="Robot peeking over a computer monitor"
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.smallHeader}>My Projects</h2>
            <p>
              You can also find some links to some of my projects that I have
              worked on as well as a collection of many useful resources related
              to web development.
            </p>
            <Link className={styles.button} href="/projects">
              My Projects
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
