import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.summary}>
            <div className={styles.profile}>
              {/* @ts-ignore */}
              <img src={siteConfig.themeConfig.navbar.logo.src as string} alt="profile"/>
            </div>
            <div className={styles.name}>Hiroki Takizawa</div>
            <div>Software Engineer<br/>Engineering Manager</div>
          </div>
          <div className={styles.chronological}>
            <div className={styles.work_experience}>
              <div className={styles.section_name}>職歴</div>
              <dl>
                <dt>2023 - 現在</dt>
                <dd>株式会社Schoo<br/>エンジニアリングマネージャー</dd>
                <dt>2019 - 2023</dt>
                <dd>株式会社ビズリーチ<br/>ソフトウェアエンジニア</dd>
                <dt>2012 - 2019</dt>
                <dd>チームラボ株式会社<br/>ソフトウェアエンジニア</dd>
              </dl>
              <div style={{margin: "1rem 0"}}>
                <Link to="/job-description">
                  詳細
                </Link>
              </div>
            </div>
            <div className={styles.education}>
              <div className={styles.section_name}>学歴</div>
              <dl>
                <dt>2010 - 2012</dt>
                <dd>長野高専 専攻科<br/>電気情報システム専攻</dd>
                <dt>2005 - 2010</dt>
                <dd>長野工業高等専門学校<br/>電子情報工学科</dd>
              </dl>
            </div>
            <div className={styles.qualification}>
              <div className={styles.section_name}>資格</div>
              <ul style={{marginTop: "1rem"}}>
                <li>2015/10 応用情報技術者試験 合格</li>
                <li>2020/11 HSK漢語水平考試 5級 取得 (191点/300点)</li>
              </ul>
            </div>
          </div>
          <div className={styles.functional}>
            <div className={styles.section_name}>スキル</div>
            <dl>
              <dt>言語</dt>
              <dd>
                <ul>
                  <li>C/C++</li>
                  <li>Objective-C/Swift</li>
                  <li>Java/Scala/Kotlin</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Rust</li>
                </ul>
              </dd>
              <dt>フレームワーク</dt>
              <dd>
                <ul>
                  <li>Play Framework/Spring Boot</li>
                  <li>React/Angular/SolidJS</li>
                  <li>Axum/Tokio</li>
                  <li>Tauri</li>
                </ul>
              </dd>
              <dt>インフラ</dt>
              <dd>
                <ul>
                  <li>AWS</li>
                  <li>Dokcer/Kubernetes</li>
                </ul>
              </dd>
              <dt>ツール</dt>
              <dd>
                <ul>
                  <li>Git</li>
                  <li>Jenkins/GitHub Actions</li>
                  <li>Terraform</li>
                </ul>
              </dd>
              <dt>その他</dt>
              <dd>
                <ul>
                  <li>ユースケース駆動開発</li>
                  <li>ドメイン駆動設計</li>
                  <li>スクラム開発 開発者/スクラムマスター</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
