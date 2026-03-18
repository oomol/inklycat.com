import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const links = {
  webApp: 'https://app.oomol.com/',
  iosAppStore: 'https://apps.apple.com/cn/app/%E5%B0%8F%E5%A2%A8-oomol-ai/id6749377154',
  macArm: 'https://app-downloads.oomol.com/inkly-cat/darwin/arm64',
  windowsX64: 'https://app-downloads.oomol.com/inkly-cat/win32/x64',
};

const highlights = [
  {
    label: '同屏工作',
    title: '对话、图表、编辑器放在一处',
    body: '任务上下文不会在导出前断掉，适合需要持续判断和修改的数据分析工作。',
  },
  {
    label: '继续编辑',
    title: '图不是终点，而是可继续迭代的结果',
    body: '拿到的是可复核、可调整、可正式导出的图表资产，而不是一次性截图。',
  },
  {
    label: '沉淀方法',
    title: '高频分析动作可以被复用',
    body: '把常见分析动作收敛成技能，把稳定流程做成小程序，让方法留在团队里。',
  },
];

const workflowSteps = [
  {
    title: '导入原始材料',
    body: 'CSV、Excel、实验记录和既有结果都可以直接进入同一任务。',
  },
  {
    title: '保留分析过程',
    body: '清洗、计算、运行脚本时，不需要在不同工具之间反复切换。',
  },
  {
    title: '生成并编辑结果',
    body: '图表、表格和结构化结论生成后，可以继续修改，不会停在一次性输出。',
  },
  {
    title: '导出正式交付物',
    body: '把可复核的过程和可提交的结果一起整理出来，便于汇报与归档。',
  },
];

const featureCards = [
  {
    eyebrow: 'Skills',
    title: '把高频分析动作收敛成技能',
    body: '把常用动作固定下来，减少临时拼接，让方法可重复调用。',
    image: '/img/agent_skills.png',
    alt: 'Inkly Cat 技能界面截图',
  },
  {
    eyebrow: 'Mini Apps',
    title: '把稳定流程交给小程序执行',
    body: '适合文件转换、批处理和输入明确的流程，让结果更稳定，也更容易团队复用。',
    image: '/img/agent_miniapps.png',
    alt: 'Inkly Cat 小程序界面截图',
  },
];

const scenarios = [
  {
    title: '数据分析与专业工作',
    body: '不只看懂数据，还要把图表、结论和说明整理成正式结果。',
  },
  {
    title: '表格与文件预处理',
    body: '处理字段、格式、类型和批量转换，把原始文件整理成可直接分析的输入。',
  },
  {
    title: '图表与结果整理',
    body: '不仅生成图，还能组织关键发现和结果说明，便于复核、汇报与提交。',
  },
  {
    title: '团队与流程复用',
    body: '把重复工作沉淀成技能与小程序，让常见分析流程变成可复用资产。',
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Screenshot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const imageUrl = useBaseUrl(src);

  return <img src={imageUrl} alt={alt} loading={priority ? 'eager' : 'lazy'} />;
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inkly Cat</title>
        <meta
          name="description"
          content="面向数据分析工作的专业 agent，把表格处理、脚本执行、图表编辑和结果整理接成一条可复核、可交付的工作线。"
        />
      </Head>
      <main id="top" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Inkly Cat / Data Analysis Workspace</p>
            <h1>
              <span className={styles.heroHeadingLine}>面向数据分析工作的</span>
              <span className={styles.heroHeadingLine}>专业 agent</span>
            </h1>
            <p className={styles.lead}>
              把表格处理、脚本执行、图表生成与编辑、结果说明放在同一工作台里，
              让原始数据更顺地推进成可复核、可交付的分析结果。
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={links.webApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                打开 Web 版
              </a>
              <button className={styles.secondaryButton} type="button" onClick={() => scrollToSection('showcase')}>
                看工作界面
              </button>
            </div>
            <div className={styles.platformLinks}>
              <span>下载客户端</span>
              <a href={links.macArm}>macOS（ARM）</a>
              <a href={links.windowsX64}>Windows（x64）</a>
              <a href={links.iosAppStore} target="_blank" rel="noopener noreferrer">
                iOS App Store
              </a>
            </div>
            <p className={styles.downloadMeta}>macOS 仅支持 Apple Silicon（ARM）。如果你先想判断工作方式，直接打开 Web 版就够了。</p>
            <div className={styles.heroSummary}>
              <div>
                <strong>适合的任务</strong>
                <p>需要反复分析、编辑图表、整理结论并最终交付的数据工作。</p>
              </div>
              <div>
                <strong>不想再发生的事</strong>
                <p>在表格、脚本、图表工具和结果文档之间来回切换，导致上下文被打散。</p>
              </div>
            </div>
          </div>

          <div className={styles.heroStage}>
            <div className={styles.heroStageFrame}>
              <div className={styles.heroStageMeta}>
                <span>Live Workspace</span>
                <span>Prompt / Analysis / Chart / Delivery</span>
              </div>
              <div className={styles.heroImageWrap}>
                <Screenshot src="/img/agent_main.png" alt="Inkly Cat 主工作台截图" priority />
              </div>
            </div>

            <div className={styles.heroAnnotationPrimary}>
              <strong>同一任务上下文</strong>
              <p>对话、生成结果和后续修改没有断层。</p>
            </div>

            <div className={styles.heroAnnotationSecondary}>
              <span>结果仍可编辑</span>
              <p>不是结束页，而是下一步工作的起点。</p>
            </div>
          </div>
        </section>

        <section className={styles.highlightBand}>
          {highlights.map((item) => (
            <article key={item.title} className={styles.highlightCard}>
              <p className={styles.highlightLabel}>{item.label}</p>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <section id="showcase" className={styles.showcaseSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Product View</p>
            <h2>从数据分析到图表编辑，工作流在一个界面里接起来</h2>
            <p>产品最强的地方不是“能回答”，而是能把对话、图表和编辑动作留在同一条工作线上。</p>
          </div>

          <div className={styles.showcaseFrame}>
            <div className={styles.showcaseVisual}>
              <Screenshot src="/img/agent_chart_edit.png" alt="Inkly Cat 图表编辑工作台截图" />
            </div>
            <div className={styles.showcaseNarrative}>
              <div className={styles.featureCopy}>
                <p className={styles.eyebrow}>Chart Editor</p>
                <h3>分析过程、图表本体和编辑面板并排展开</h3>
                <p>
                  左边保留任务上下文，中间是图表，右边是编辑面板。你拿到的不是一张结束的图，而是一份可以继续调整并正式导出的分析图表结果。
                </p>
              </div>
              <div id="workflow" className={styles.workflowRail}>
                {workflowSteps.map((step, index) => (
                  <article key={step.title} className={styles.workflowStep}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reusable" className={styles.featureSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Reusable Layers</p>
            <h2>把一次任务沉淀成可复用方法</h2>
            <p>把高频动作变成技能，把稳定流程变成小程序，让下一次分析不必重新搭一遍。</p>
          </div>

          <div className={styles.featureShowcase}>
            {featureCards.map((card, index) => (
              <article
                key={card.title}
                className={index === 0 ? styles.featureCardPrimary : styles.featureCardSecondary}
              >
                <div className={styles.featureCardImage}>
                  <Screenshot src={card.image} alt={card.alt} />
                </div>
                <div className={styles.featureCardCopy}>
                  <p className={styles.eyebrow}>{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="use-cases" className={styles.scenarioSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Use Cases</p>
            <h2>更适合那些对结果质量和可复核性有要求的数据分析任务</h2>
            <p>Inkly Cat 不是万能 agent，它更适合那些既要分析，也要把结果整理清楚的数据工作。</p>
          </div>

          <div className={styles.scenarioList}>
            {scenarios.map((scenario, index) => (
              <article key={scenario.title} className={styles.scenarioRow}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.ctaSection}>
          <div className={styles.ctaPanel}>
            <div className={styles.ctaLead}>
              <p className={styles.eyebrow}>Inkly Cat</p>
              <h2>先打开工作台，再决定要不要装客户端</h2>
              <p>如果你关心的是分析结果能不能持续推进、修改和整理，先看真实工作界面会比看一串功能点更有效。</p>
            </div>
            <div className={styles.ctaAside}>
              <div className={styles.ctaActions}>
                <a
                  className={styles.primaryButton}
                  href={links.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  打开 Web 版
                </a>
                <button className={styles.secondaryButton} type="button" onClick={() => scrollToSection('showcase')}>
                  看工作界面
                </button>
              </div>
              <div className={styles.ctaDownloads}>
                <a href={links.macArm}>macOS（ARM）</a>
                <a href={links.windowsX64}>Windows（x64）</a>
                <a href={links.iosAppStore} target="_blank" rel="noopener noreferrer">
                  iOS App Store
                </a>
              </div>
              <p className={styles.downloadMeta}>macOS 仅支持 Apple Silicon（ARM），Windows 提供 x64 版本，iOS 通过 App Store 安装。</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
