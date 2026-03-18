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

const heroTabs = ['编写报告', '图表编辑', '技能复用', '数据分析'];

const heroSteps = [
  '先清洗字段并确认统计口径',
  '生成可继续编辑的图表和表格',
  '整理结果摘要与后续复核点',
];

const demoPoints = ['同一任务上下文', '图表仍可编辑', '结果可继续打磨'];

const proofHighlights = [
  {
    title: '一站式做完，无需来回导出切换',
    body: '文件处理、脚本执行、图表编辑和结果说明都留在一个工作面里，减少被工具切换打断。',
  },
  {
    title: '和你一起修改，而不只是一次性生成',
    body: '更适合反复打磨的正式任务。你拿到的不是终点图，而是可以继续推进的中间成果。',
  },
  {
    title: '把图表、分析和说明一起往前推',
    body: '研究和分析工作真正麻烦的是上下文容易散。Inkly Cat 把图和结论尽量留在同一条线上。',
  },
  {
    title: '把方法收敛成可复用流程',
    body: '高频动作做成技能，边界清晰的步骤做成小程序，让下次工作不用重新搭一遍。',
  },
];

const templates = [
  {
    kicker: 'Report Template',
    title: '周度用户行为分析报告',
    body: '把埋点表整理、趋势图输出和结果摘要连成一张正式结果页。',
    chips: ['字段清洗', '趋势图', '摘要整理'],
    note: '适合接入真实任务入口',
    image: '/img/agent_chart_edit.png',
    visual: 'report',
  },
  {
    kicker: 'Automation Flow',
    title: 'CSV 批量标准化',
    body: '命名规则、格式转换和异常值检查可以固定成稳定流程。',
    chips: ['批处理', '格式转换', '复核占位'],
    note: '适合沉淀成小程序',
    image: '/img/agent_miniapps.png',
    visual: 'panel',
  },
  {
    kicker: 'Research Output',
    title: '实验统计结果页',
    body: '把检验路径、图表和结果段落放在一起，适合研究场景。',
    chips: ['统计检验', '图表编辑', '结果段落'],
    note: '适合研究和正式交付',
    image: '/img/agent_main.png',
    visual: 'dashboard',
  },
  {
    kicker: 'Coming Next',
    title: '案例中心占位',
    body: '后续可直接替换成真实案例、公开视频或模板入口，不需要再改版式。',
    chips: ['占位模块', '后续扩展', '素材待补'],
    note: '内容准备好后可直接替换',
    image: '',
    visual: 'placeholder',
  },
];

const storyCards = [
  {
    label: 'Video Story',
    title: '案例视频占位',
    role: '研究工作流演示',
    body: '这里预留给 30 到 60 秒的真实工作录像，适合展示从表格到图表的连续操作。',
    action: '观看演示',
    tone: 'video',
  },
  {
    label: 'Customer Story',
    title: '客户证言占位',
    role: '正式结果交付',
    body: '这里预留给真实反馈，重点建议围绕“少了哪些来回切换”来写，而不是泛泛夸功能。',
    action: '查看反馈',
    tone: 'quote',
  },
  {
    label: 'Team Story',
    title: '团队协作占位',
    role: '流程复用',
    body: '如果未来要强调模板共享、结果复核或方法移交，这里已经有对应的呈现位置。',
    action: '了解场景',
    tone: 'team',
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
        <title>Inkly Cat | A different way to finish data work</title>
        <meta
          name="description"
          content="处理表格，运行脚本，生成图表，把结果整理清楚。Inkly Cat 面向研究与高要求分析任务，把数据工作真正推进到可复核、可交付的结果。"
        />
      </Head>
      <main id="top" className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Inkly Cat / Result-Oriented Data Workspace</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine}>
              让 AI 更<span className={styles.highlight}>深入</span>地参与
            </span>
            <span className={styles.heroLine}>把数据工作做完</span>
          </h1>
          <p className={styles.heroLead}>
            处理表格，运行脚本，生成图表，把结果整理清楚。不是停在建议，而是把研究和分析任务真正往前推进。
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={links.webApp} target="_blank" rel="noopener noreferrer">
              立即体验
            </a>
          </div>

          <div className={styles.heroTabs}>
            {heroTabs.map((tab, index) => (
              <button key={tab} className={index === 0 ? styles.heroTabActive : styles.heroTab} type="button">
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.heroStage}>
            <div className={styles.stageSidebar}>
              <div className={styles.stageUserMessage}>
                I want to turn this week&apos;s raw traffic table into a clean report I can share.
              </div>

              <div className={styles.stageAssistant}>
                <p>我会先完成三个阶段:</p>
                <ul>
                  {heroSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.stagePromptBox}>
                <span>Ask, clean, analyze anything</span>
              </div>
            </div>

            <div className={styles.stageCanvas}>
              <div className={styles.stageReportHero}>
                <div>
                  <strong>Weekly Data Result Page</strong>
                  <p>把图表、摘要和关键发现组织成正式结果页。</p>
                </div>
              </div>

              <div className={styles.stageCanvasImage}>
                <Screenshot src="/img/agent_chart_edit.png" alt="Inkly Cat 图表编辑界面截图" priority />
              </div>

              <div className={styles.stageResultRow}>
                <article>
                  <strong>字段清洗</strong>
                  <p>统一类型和命名</p>
                </article>
                <article>
                  <strong>图表输出</strong>
                  <p>继续编辑而非终稿截图</p>
                </article>
                <article>
                  <strong>结果摘要</strong>
                  <p>结论与复核点并排整理</p>
                </article>
              </div>
            </div>
          </div>

          <div className={styles.downloadLinks}>
            <a href={links.macArm}>macOS（ARM）</a>
            <a href={links.windowsX64}>Windows（x64）</a>
            <a href={links.iosAppStore} target="_blank" rel="noopener noreferrer">
              iOS App Store
            </a>
          </div>
        </section>

        <section className={styles.demoSection}>
          <div className={styles.demoFrame}>
            <div className={styles.demoMedia}>
              <div className={styles.demoBackdrop}>
                <div className={styles.demoScreen}>
                  <Screenshot src="/img/agent_main.png" alt="Inkly Cat 主工作台截图" />
                </div>
              </div>
              <button className={styles.demoPlay} type="button">
                Play Demo
              </button>
            </div>

            <div className={styles.demoSummary}>
              <h2>不止是会回答，而是能把数据工作继续做下去</h2>
              <p>处理文件、执行脚本、生成图表、整理说明，这些步骤尽量留在同一个工作面里，让任务不要在不同工具之间断掉。</p>
              <div className={styles.demoPoints}>
                {demoPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className={styles.differenceSection}>
          <h2>Inkly Cat，大不同</h2>

          <div className={styles.featureLead}>
            <div className={styles.featureVisual}>
              <Screenshot src="/img/agent_main.png" alt="Inkly Cat 主工作台截图" />
            </div>

            <div className={styles.featureCopy}>
              <p className={styles.eyebrow}>Workspace</p>
              <h3>图表、脚本和结果整理留在同一工作面</h3>
              <p>工作真正复杂的地方，不是某一步不会做，而是每一步都散在不同工具里。Inkly Cat 试图把这些断点重新接起来。</p>
              <button className={styles.inlineLink} type="button" onClick={() => scrollToSection('templates')}>
                看示例任务
              </button>
            </div>
          </div>

          <div id="workflow" className={styles.proofGrid}>
            {proofHighlights.map((item) => (
              <article key={item.title} className={styles.proofCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button className={styles.inlineLink} type="button" onClick={() => scrollToSection('contact')}>
                  去试试
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="templates" className={styles.templatesSection}>
          <div className={styles.templatesHeader}>
            <h2>把常见数据任务直接展示出来</h2>
            <p>比起堆功能点，更直接的方式是让用户看到这套工作流适合处理什么。真实案例还没补齐的部分继续先占位。</p>
            <a className={styles.primaryButton} href={links.webApp} target="_blank" rel="noopener noreferrer">
              限时试用 Web 版
            </a>
          </div>

          <div className={styles.templateGrid}>
            {templates.map((item) => (
              <article
                key={item.title}
                className={[
                  item.visual === 'report'
                    ? styles.templateCardWide
                    : item.visual === 'dashboard'
                      ? styles.templateCardTall
                      : styles.templateCard,
                  item.visual === 'report'
                    ? styles.templateCardReport
                    : item.visual === 'panel'
                      ? styles.templateCardPanel
                      : item.visual === 'dashboard'
                        ? styles.templateCardDashboard
                        : styles.templateCardPlaceholder,
                ].join(' ')}
              >
                <div className={styles.templateVisual}>
                  {item.image ? (
                    <Screenshot src={item.image} alt={item.title} />
                  ) : (
                    <div className={styles.templatePlaceholder}>
                      <span>Content Placeholder</span>
                    </div>
                  )}
                </div>

                <div className={styles.templateContent}>
                  <p className={styles.templateKicker}>{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className={styles.templateChips}>
                    {item.chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                  <div className={styles.templateNote}>{item.note}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reusable" className={styles.reuseSection}>
          <h2>把高频动作沉淀成技能，把稳定流程交给小程序</h2>
          <p>当一次工作流有效，就不应该下次再从头搭起。把方法留住，才会真正越用越顺。</p>

          <div className={styles.reuseGrid}>
            <article className={styles.reusePanel}>
              <div className={styles.reuseImage}>
                <Screenshot src="/img/agent_skills.png" alt="Inkly Cat 技能界面截图" />
              </div>
              <div className={styles.reuseCopy}>
                <p className={styles.eyebrow}>Skills</p>
                <h3>把高频分析方法做成技能</h3>
                <p>把常用清洗、分析和结果整理动作固定下来，下次可以直接复用，不必重新搭流程。</p>
              </div>
            </article>

            <article className={styles.reusePanel}>
              <div className={styles.reuseImage}>
                <Screenshot src="/img/agent_miniapps.png" alt="Inkly Cat 小程序界面截图" />
              </div>
              <div className={styles.reuseCopy}>
                <p className={styles.eyebrow}>Mini Apps</p>
                <h3>把输入明确的流程交给小程序</h3>
                <p>批处理、文件转换和边界清晰的分析任务适合沉淀成更稳定的工作单元，方便团队内复用。</p>
              </div>
            </article>
          </div>
        </section>

        <section id="use-cases" className={styles.storiesSection}>
          <h2>让团队更好更快地完成工作</h2>
          <p className={styles.storiesLead}>真实视频、用户证言和团队案例还没上，但这一段的展示容器已经先搭好了。</p>
          <div className={styles.storyGrid}>
            {storyCards.map((card) => (
              <article key={card.title} className={[styles.storyCard, styles[`storyCard${card.tone[0].toUpperCase()}${card.tone.slice(1)}`]].join(' ')}>
                <div className={[styles.storyVisual, styles[`storyVisual${card.tone[0].toUpperCase()}${card.tone.slice(1)}`]].join(' ')}>
                  <span>{card.action}</span>
                </div>
                <p className={styles.storyLabel}>{card.label}</p>
                <h3>{card.title}</h3>
                <strong>{card.role}</strong>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div id="contact" className={styles.footerActions}>
            <a className={styles.primaryButton} href={links.webApp} target="_blank" rel="noopener noreferrer">
              免费试用
            </a>
            <button className={styles.secondaryButton} type="button" onClick={() => scrollToSection('top')}>
              回到顶部
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
