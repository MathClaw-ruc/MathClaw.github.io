# 工作区与记忆

<div class="lead-panel">
  <span class="kicker">持久化学习状态</span>
  <h1>workspace 就是产品的记忆层</h1>
  <p>MathClaw 不把记忆当作可有可无的附加项。workspace 保存对话轨迹、日记忆、周记忆、图谱数据和定时任务状态，并驱动控制台中的计划、图谱和心跳页面。</p>
  <div class="badge-list">
    <span>sessions</span>
    <span>daily_memory</span>
    <span>weekly_memory</span>
    <span>graphs</span>
    <span>cron</span>
  </div>
</div>

<div class="topology-strip">
  <div class="topology-card">
    <strong>Sessions</strong>
    原始会话和附件上下文最先落在这里。
  </div>
  <div class="topology-card">
    <strong>Daily / Weekly memory</strong>
    学习状态被整理成计划信号和阶段性总结。
  </div>
  <div class="topology-card">
    <strong>Graphs</strong>
    知识图谱与错题图谱从记忆层持续刷新。
  </div>
  <div class="topology-card">
    <strong>Operator pages</strong>
    学习计划、心跳和记忆页都从同一份运行状态读取数据。
  </div>
</div>

## 各层职责

<div class="story-grid">
  <div class="story-card">
    <h3>sessions</h3>
    <p>原始对话归档层，后续所有记忆更新都从这里开始。</p>
  </div>
  <div class="story-card">
    <h3>daily_memory / weekly_memory</h3>
    <p>整理学习状态，并生成优先复习点、纠错方向和计划面板。</p>
  </div>
  <div class="story-card">
    <h3>graphs</h3>
    <p>控制台中知识图谱与错题图谱的直接 JSON 数据源。</p>
  </div>
  <div class="story-card">
    <h3>daily_conversations</h3>
    <p>按天整理后的事件流，适合日总结生成和管理复盘。</p>
  </div>
  <div class="story-card">
    <h3>cron</h3>
    <p>保存定时任务状态，供心跳页和自动总结监控使用。</p>
  </div>
  <div class="story-card">
    <h3>console 视图</h3>
    <p>控制台不另造一份数据源，而是直接读取同一个 workspace。</p>
  </div>
</div>

<div class="split-spotlight">
  <div class="split-spotlight__copy">
    <span class="section-kicker">控制台视角</span>
    <h3>同一个 workspace 驱动全部产品页面</h3>
  <p>解题工作台、学习计划、心跳、运行状态、知识图谱、错题图谱和附加输出 Skill 页面都依赖同一个目录结构。只有这样，整个产品才能在时间维度上保持一致。</p>
  </div>
  <div class="split-spotlight__visual">
    <img src="/screenshots/study_plan.png" alt="由记忆驱动的学习计划">
  </div>
</div>

## 界面预览

<div class="preview-grid">
  <figure class="preview-card">
    <img src="/screenshots/workspace.png" alt="解题工作台">
    <figcaption>解题工作台</figcaption>
  </figure>
  <figure class="preview-card">
    <img src="/screenshots/study_plan.png" alt="学习计划">
    <figcaption>学习计划</figcaption>
  </figure>
  <figure class="preview-card">
    <img src="/screenshots/runtime_status.png" alt="运行状态">
    <figcaption>运行状态</figcaption>
  </figure>
  <figure class="preview-card">
    <img src="/screenshots/heartbeat.png" alt="心跳">
    <figcaption>心跳与自动任务</figcaption>
  </figure>
  <figure class="preview-card">
    <img src="/screenshots/knowledge_graph.png" alt="知识图谱">
    <figcaption>知识图谱</figcaption>
  </figure>
  <figure class="preview-card">
    <img src="/screenshots/error_graph.png" alt="错题图谱">
    <figcaption>错题图谱</figcaption>
  </figure>
  <figure class="preview-card preview-wide">
    <img src="/screenshots/skills.png" alt="附加输出 Skill">
    <figcaption>附加输出 Skill</figcaption>
  </figure>
</div>
