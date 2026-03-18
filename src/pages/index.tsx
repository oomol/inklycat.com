import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const capabilityCards = [
  {
    title: '处理表格和文件',
    body: '读取 CSV 和 Excel，整理字段、筛选数据、做转换，把原始数据变成可继续处理的输入。',
  },
  {
    title: '运行代码和脚本',
    body: '支持 coding 和 Bash 工作流。把已有脚本、命令和小工具接进来，减少重复劳动。',
  },
  {
    title: '生成图表和分析结果',
    body: '从数据里生成图表、表格和结构化结论，不只看到数据，也把结果整理出来。',
  },
  {
    title: '把结果说明白',
    body: '把关键发现、图表和结果说明放在一起，让交付内容更完整，不再停在一句话结论。',
  },
];

const workflowSteps = [
  '导入表格、文件或已有数据',
  '执行脚本、筛选、清洗和转换',
  '生成图表、摘要和关键发现',
  '整理成可以继续使用或交付的结果',
];

const exampleCards = [
  {
    title: '樱花观察',
    label: '生活里的小研究',
    body: '把天气、风速和温度放在一起，认真算一下这周适不适合出门看花。',
  },
  {
    title: '放风筝窗口',
    label: '风况判断',
    body: '把风向、阵风和降雨概率拆开看，给出比“凭感觉”更清楚的判断。',
  },
  {
    title: '实验组比较',
    label: '研究场景',
    body: '对比不同组别的关键指标，出图、标注差异，并把结果整理成可继续使用的内容。',
  },
  {
    title: '比赛表现拆解',
    label: '数据表达',
    body: '把最近表现、赛季平均和关键指标放在一起，生成图表和结构化结论。',
  },
];

const screenshotNeeds = [
  {
    title: '主界面截图',
    body: '需要一张完整的工作界面。左侧放分析说明，中间放图表画布，右侧放编辑面板。',
    note: '重点让用户一眼看出：这不是纯聊天，而是能工作的数据界面。',
  },
  {
    title: '表格处理截图',
    body: '需要一张表格导入和字段整理图。要看到列名、类型识别、筛选或转换动作。',
    note: '重点强调从原始表格到可分析数据的过渡。',
  },
  {
    title: '脚本执行截图',
    body: '需要一张脚本或 Bash 执行图。要看到命令、执行状态和输出结果。',
    note: '重点强调产品不只会回答，也能动手执行。',
  },
  {
    title: '结果整理截图',
    body: '需要一张图表和结果摘要联动图。最好同时出现关键发现、图表和可交付内容。',
    note: '重点强调分析最终会落成一个清楚的结果。',
  },
];

function AppMock() {
  return (
    <div className={styles.mockWindow}>
      <div className={styles.mockTopbar}>
        <div className={styles.mockLights}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.mockTitle}>Inkly Cat / 数据工作界面</div>
        <div className={styles.mockActions}>
          <span>撤销</span>
          <span>导出</span>
        </div>
      </div>
      <div className={styles.mockBody}>
        <aside className={styles.mockSidebar}>
          <div className={styles.mockPrompt}>最近一周是否适合去公园看樱花？顺便比较周末两天的风况和温度。</div>
          <div className={styles.mockPanel}>
            <div className={styles.mockPanelTitle}>关键发现</div>
            <ul className={styles.mockList}>
              <li>周六温度更稳定，体感更舒适</li>
              <li>周日午后阵风偏大，不利于长时间停留</li>
              <li>建议上午出行，拍摄和观赏条件更好</li>
            </ul>
          </div>
          <div className={styles.mockSources}>数据源：天气数据、风速记录、历史观赏窗口</div>
        </aside>
        <section className={styles.mockCanvas}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTag}>对比图</span>
            <h3>周六 vs 周日观赏条件</h3>
            <p>温度、阵风和降雨概率对比</p>
          </div>
          <div className={styles.chart}>
            <div className={styles.chartGrid}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.barGroup}>
              <div className={styles.barColumn}>
                <div className={`${styles.bar} ${styles.barPrimary}`} style={{ height: '72%' }} />
                <div className={`${styles.bar} ${styles.barSecondary}`} style={{ height: '58%' }} />
                <label>温度</label>
              </div>
              <div className={styles.barColumn}>
                <div className={`${styles.bar} ${styles.barPrimary}`} style={{ height: '62%' }} />
                <div className={`${styles.bar} ${styles.barSecondary}`} style={{ height: '79%' }} />
                <label>阵风</label>
              </div>
              <div className={styles.barColumn}>
                <div className={`${styles.bar} ${styles.barPrimary}`} style={{ height: '26%' }} />
                <div className={`${styles.bar} ${styles.barSecondary}`} style={{ height: '48%' }} />
                <label>降雨</label>
              </div>
            </div>
            <div className={styles.chartLegend}>
              <span><i className={styles.legendPrimary} /> 周六</span>
              <span><i className={styles.legendSecondary} /> 周日</span>
            </div>
          </div>
        </section>
        <aside className={styles.mockInspector}>
          <div className={styles.inspectorHeader}>图表设置</div>
          <div className={styles.inspectorField}>
            <span>图表类型</span>
            <strong>柱状图</strong>
          </div>
          <div className={styles.inspectorField}>
            <span>X 轴</span>
            <strong>指标类别</strong>
          </div>
          <div className={styles.inspectorField}>
            <span>Y 轴</span>
            <strong>标准化分数</strong>
          </div>
          <div className={styles.inspectorField}>
            <span>系列</span>
            <strong>周六 / 周日</strong>
          </div>
          <div className={styles.inspectorFooter}>这里后续替换成真实产品截图</div>
        </aside>
      </div>
      <div className={styles.floatingCards}>
        <div className={styles.floatingCard}>
          <span className={styles.floatingLabel}>生活里的小研究</span>
          <strong>看樱花指数</strong>
          <p>把温度、风速和降雨放在一起看。</p>
        </div>
        <div className={styles.floatingCard}>
          <span className={styles.floatingLabel}>动手做</span>
          <strong>脚本与图表连起来</strong>
          <p>不是只给建议，也把事情往下做。</p>
        </div>
      </div>
    </div>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inkly Cat</title>
        <meta name="description" content="面向数据工作的专业 agent" />
      </Head>
      <main id="top" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Inkly Cat</p>
            <h1>面向数据工作的专业 agent</h1>
            <p className={styles.lead}>
              处理表格，运行脚本，生成图表，把结果整理清楚。
              <br />
              用研究的态度，处理真实问题。
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton} type="button" onClick={() => scrollToSection('workflow')}>
                开始了解
              </button>
              <button className={styles.secondaryButton} type="button" onClick={() => scrollToSection('screenshots')}>
                查看截图需求
              </button>
            </div>
            <ul className={styles.heroPoints}>
              <li>不只分析，也能处理</li>
              <li>从表格、脚本到结果</li>
              <li>把图表和结论一起做出来</li>
            </ul>
          </div>
          <div className={styles.heroVisual}>
            <AppMock />
          </div>
        </section>

        <section className={styles.statement}>
          <p>很多数据工作，不复杂，但很耗人。</p>
          <p>
            真正耗时间的，往往不是某一步不会做，而是总要在表格、脚本、图表和结果整理之间来回切换。
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Capabilities</p>
            <h2>把常见的数据工作连成一条线</h2>
            <p>
              Inkly Cat 不想只停在对话里。它更适合接住那些真实的数据任务，把过程往下推到结果。
            </p>
          </div>
          <div className={styles.cardGrid}>
            {capabilityCards.map((card) => (
              <article key={card.title} className={styles.card}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className={`${styles.section} ${styles.workflowSection}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Workflow</p>
            <h2>从数据到结果，少一点来回切换</h2>
            <p>
              一条更清楚的路径，比一堆零散工具更重要。
            </p>
          </div>
          <div className={styles.workflow}>
            {workflowSteps.map((step, index) => (
              <div key={step} className={styles.workflowStep}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.brandSection}`}>
          <div className={styles.brandCopy}>
            <p className={styles.eyebrow}>Brand</p>
            <h2>很多问题，其实都值得认真研究一下</h2>
            <p>
              有些人会把天气、行程、消费、实验、比赛表现这些看起来不大的问题，也当成值得分析的事情来处理。
            </p>
            <p>
              不是因为复杂，而是因为想看清楚一点，想让判断更有依据一点。Inkly Cat 想服务的，正是这种做事方式。
            </p>
          </div>
          <div className={styles.exampleGrid}>
            {exampleCards.map((card) => (
              <article key={card.title} className={styles.exampleCard}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="screenshots" className={`${styles.section} ${styles.screenshotSection}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Assets</p>
            <h2>官网还需要这几类真实截图</h2>
            <p>
              这一版首页先用界面 mockup 占位。后续替换素材时，优先准备下面四张图。
            </p>
          </div>
          <div className={styles.screenshotGrid}>
            {screenshotNeeds.map((item) => (
              <article key={item.title} className={styles.screenshotCard}>
                <div className={styles.placeholderFrame}>
                  <div className={styles.placeholderBar} />
                  <div className={styles.placeholderBody}>
                    <div className={styles.placeholderSidebar} />
                    <div className={styles.placeholderCanvas} />
                    <div className={styles.placeholderSidebar} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaPanel}>
            <p className={styles.eyebrow}>Inkly Cat</p>
            <h2>把数据工作真正做完</h2>
            <p>
              先把首页立住，再继续往真实截图、示例任务和产品细节推进。
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton} type="button" onClick={() => scrollToSection('top')}>
                回到顶部
              </button>
              <button className={styles.secondaryButton} type="button" onClick={() => scrollToSection('screenshots')}>
                继续准备素材
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
