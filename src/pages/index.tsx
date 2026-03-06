import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const capabilityCards = [
  {
    title: 'Semantic Data Intake',
    description:
      '接入 SQL、数据仓库、API 与文件后，Agent 自动识别字段含义、异常值和业务口径冲突。',
    metric: '15min 内完成首轮建模',
    bullets: ['Schema 自动对齐', '质量体检报告', '口径冲突提示'],
  },
  {
    title: 'Autonomous Analysis Chain',
    description:
      '从问题拆解、查询编排、统计检验到可视化叙事全链路自动执行，并保留可审计日志。',
    metric: '42% 分析耗时下降',
    bullets: ['自动生成假设树', '异常段定位', '结论溯源'],
  },
  {
    title: 'Decision-Ready Outputs',
    description:
      '自动生成业务报告、行动建议和复盘模板，支持多角色协同批注与版本追踪。',
    metric: '日报周报一键发布',
    bullets: ['图表 + 结论联动', '优先级建议', '团队协作流'],
  },
];

const workflowSteps = [
  {
    number: '01',
    title: 'Frame',
    description:
      '用自然语言描述业务问题，例如「最近 30 天北美渠道转化率下降的原因是什么？」',
  },
  {
    number: '02',
    title: 'Run',
    description:
      'Agent 自动构建查询计划，完成清洗、建模、检验与可视化，并标注异常区间。',
  },
  {
    number: '03',
    title: 'Align',
    description: '输出可执行策略、影响评估与复盘模板，让数据、运营、管理层同步决策。',
  },
];

const integrations = [
  'Snowflake',
  'BigQuery',
  'PostgreSQL',
  'MySQL',
  'Redshift',
  'CSV / Parquet',
  'Notion',
  'Slack',
];

const scenarios = [
  {
    title: '增长团队',
    value: '12x',
    detail: '问题定位速度提升',
  },
  {
    title: '运营团队',
    value: '83%',
    detail: '重复报表自动化覆盖率',
  },
  {
    title: '管理层',
    value: 'T+0',
    detail: '日报洞察即时生成',
  },
];

const faqs = [
  {
    question: 'Inklycat 会替代数据分析师吗？',
    answer:
      '不会。Inklycat 的定位是“分析加速器”，把重复且耗时的流程自动化，让分析师专注业务洞察与策略设计。',
  },
  {
    question: '是否支持私有化部署和权限隔离？',
    answer:
      '支持。可部署在企业 VPC 或私有云，支持行列级权限映射、审计日志与敏感字段脱敏策略。',
  },
  {
    question: '上线周期通常多长？',
    answer:
      '标准场景下 7 天可完成接入与首条分析链路，复杂组织可按域分阶段上线。',
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inklycat | AI Agent for Data Analysis</title>
        <meta
          name="description"
          content="Inklycat 是专注数据分析处理的 AI Agent，帮助团队从数据到决策更快、更稳、更可追溯。"
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>AI ANALYTICS AGENT</p>
            <h1>把数据处理与分析交给 Agent，团队专注决策</h1>
            <p>
              Inklycat 为数据密集型团队打造。它可以自动完成数据准备、分析建模、异常归因与报告生成，
              让每次业务讨论都从“事实一致”开始。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="mailto:hello@inklycat.com">
                预约产品演示
              </a>
              <a className={styles.secondaryButton} href="#capabilities">
                查看核心能力
              </a>
            </div>
            <div className={styles.heroStats}>
              <article>
                <strong>30%</strong>
                <span>平均决策周期缩短</span>
              </article>
              <article>
                <strong>99.9%</strong>
                <span>分析链路可追溯率</span>
              </article>
              <article>
                <strong>7 Days</strong>
                <span>典型上线周期</span>
              </article>
            </div>
          </div>
          <aside className={styles.terminalPanel}>
            <p>LIVE RUN / Growth Insight Session</p>
            <ul>
              <li>
                <span>09:40</span>
                自动清洗 14 张业务表并完成口径对齐
              </li>
              <li>
                <span>09:46</span>
                定位转化率异常时段：渠道 B 晚高峰下降 18%
              </li>
              <li>
                <span>09:51</span>
                输出策略建议：预算重分配 + 落地页实验计划
              </li>
            </ul>
            <code>inklycat run --window=30d --goal=conversion-drop</code>
          </aside>
        </section>

        <section className={styles.integrationStrip} aria-label="Integrations">
          {integrations.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </section>

        <section className={styles.section} id="capabilities">
          <div className={styles.sectionHead}>
            <p>Capabilities</p>
            <h2>面向真实业务的分析自动化能力</h2>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilityCards.map((card) => (
              <article key={card.title} className={styles.capabilityCard}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <strong>{card.metric}</strong>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="workflow">
          <div className={styles.sectionHead}>
            <p>Workflow</p>
            <h2>三步完成一次可复用的数据分析闭环</h2>
          </div>
          <div className={styles.workflowGrid}>
            {workflowSteps.map((step) => (
              <article key={step.number} className={styles.workflowCard}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="scenarios">
          <div className={styles.sectionHead}>
            <p>Scenarios</p>
            <h2>跨团队协作的一致分析语言</h2>
          </div>
          <div className={styles.scenarioGrid}>
            {scenarios.map((scenario) => (
              <article key={scenario.title} className={styles.scenarioCard}>
                <p>{scenario.title}</p>
                <strong>{scenario.value}</strong>
                <span>{scenario.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.sectionHead}>
            <p>FAQ</p>
            <h2>常见问题</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>让你的数据团队进入 Agent 协作时代</h2>
          <p>
            从“查数-对口径-做报告”转向“洞察-决策-落地”，每周多拿回可用于策略的时间。
          </p>
          <a href="mailto:hello@inklycat.com">联系销售团队</a>
        </section>
      </main>
    </Layout>
  );
}
