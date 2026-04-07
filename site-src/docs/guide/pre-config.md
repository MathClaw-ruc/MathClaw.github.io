# 预配置

<div class="lead-panel">
  <span class="kicker">首次启动之前</span>
  <h1>先把工作区、配置文件和通道范围对齐</h1>
  <p>MathClaw 更像一套持续运行的产品，而不是一个单独脚本。只要 workspace、配置路径和通道凭据指向同一个环境，首次启动就会顺得多。</p>
  <div class="badge-list">
    <span>workspace</span>
    <span>配置文件</span>
    <span>模型</span>
    <span>通道</span>
  </div>
</div>

<div class="stat-strip">
  <div class="stat-chip">
    <strong>1</strong>
    <span>统一 workspace，保存会话、记忆、图谱和定时任务状态。</span>
  </div>
  <div class="stat-chip">
    <strong>1</strong>
    <span>主配置路径使用 <code>~/.mathclaw/config.json</code>。</span>
  </div>
  <div class="stat-chip">
    <strong>3</strong>
    <span>关键检查项：路径可写、模型可用、通道凭据有效。</span>
  </div>
</div>

## 运行时基线

<div class="doc-grid">
  <div class="doc-card">
    <h3>workspace 结构</h3>
    <p>共享工作区让所有管理页面都能读到同一份学习历史。</p>
    <ul>
      <li>原始会话日志。</li>
      <li>日记忆与周记忆快照。</li>
      <li>知识图谱与错题图谱 JSON。</li>
      <li>心跳所需的 cron 状态。</li>
    </ul>
  </div>
  <div class="doc-card">
    <h3>配置解析</h3>
    <p>控制台默认读取标准用户配置目录，同时保持跨机器可移植。</p>
    <ul>
      <li>主路径：<code>~/.mathclaw/config.json</code>。</li>
      <li>从 <code>console/</code> 启动时可显式传入 workspace。</li>
      <li>优先使用仓库相对路径，而不是机器专属绝对路径。</li>
    </ul>
  </div>
</div>

典型 workspace 结构：

```text
workspace/
  sessions/
  memory/
    daily_conversations/
    daily_memory/
    weekly_memory/
    graphs/
  cron/
```

从仓库内启动控制台时，建议显式传入 workspace：

```bash
cd console
MATHCLAW_CONSOLE_WORKSPACE=../workspace python serve.py
```

## 首次启动检查清单

<div class="checklist-grid">
  <div class="checklist-card">
    <h3>模型层</h3>
    <ul>
      <li>确认主模型和 provider 可连通。</li>
      <li>确认 API Key 已加载到预期配置源。</li>
      <li>如果要解析 PDF / 图片，确认附件解析模型也可用。</li>
    </ul>
  </div>
  <div class="checklist-card">
    <h3>通道层</h3>
    <ul>
      <li>只启用真正需要暴露的通道。</li>
      <li>先检查凭据，再启动 gateway。</li>
      <li>即使外部通道开启，也建议保留 console 作为管理入口。</li>
    </ul>
  </div>
</div>

## 启动后优先检查的页面

<div class="callout-strip">
  <div class="callout-chip">
    <strong>运行状态</strong>
    确认 gateway、console、provider 和通道是否健康。
  </div>
  <div class="callout-chip">
    <strong>心跳</strong>
    查看日总结、周总结和定时任务是否仍在正常执行。
  </div>
  <div class="callout-chip">
    <strong>图谱与附加输出 Skill</strong>
    确认记忆页和附件输出 Skill 是否按预期工作。
  </div>
</div>
