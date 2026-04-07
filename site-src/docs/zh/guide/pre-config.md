# 预配置

<div class="lead-panel">
  <span class="kicker">首次启动之前</span>
  <h1>确认工作区、配置文件和通道凭据</h1>
  <p>MathClaw 是一套持续运行的学习系统。启动前请确保 workspace、配置路径和通道凭据指向同一个环境，避免启动后各页面数据不一致。</p>
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
    <span>个统一 workspace，保存会话、记忆、图谱和定时任务状态。</span>
  </div>
  <div class="stat-chip">
    <strong>1</strong>
    <span>个主配置路径：<code>~/.mathclaw/config.json</code>。</span>
  </div>
  <div class="stat-chip">
    <strong>3</strong>
    <span>项关键检查：路径可写、模型可用、通道凭据有效。</span>
  </div>
</div>

## 运行时基线

<div class="doc-grid">
  <div class="doc-card">
    <h3>workspace 结构</h3>
    <p>所有页面共享同一个 workspace，确保读取到一致的学习历史。</p>
    <ul>
      <li>原始会话日志</li>
      <li>日记忆与周记忆快照</li>
      <li>知识图谱与错题图谱 JSON</li>
      <li>定时任务状态</li>
    </ul>
  </div>
  <div class="doc-card">
    <h3>配置解析</h3>
    <p>控制台默认读取标准用户配置目录，支持跨机器迁移。</p>
    <ul>
      <li>主路径：<code>~/.mathclaw/config.json</code></li>
      <li>从 <code>console/</code> 启动时可显式传入 workspace</li>
      <li>建议使用仓库相对路径，避免机器专属的绝对路径</li>
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
      <li>确认主模型和 provider 可连通</li>
      <li>确认 API Key 已加载到预期配置源</li>
      <li>如需解析 PDF / 图片，确认附件解析模型也可用</li>
    </ul>
  </div>
  <div class="checklist-card">
    <h3>通道层</h3>
    <ul>
      <li>只启用实际需要的通道</li>
      <li>先检查凭据，再启动 gateway</li>
      <li>建议始终保留 console 作为管理入口</li>
    </ul>
  </div>
</div>

## 启动后优先检查的页面

<div class="callout-strip">
  <div class="callout-chip">
    <strong>运行状态</strong>
    确认 gateway、console、provider 和通道是否正常。
  </div>
  <div class="callout-chip">
    <strong>定时任务</strong>
    查看日总结、周总结等自动任务是否在正常执行。
  </div>
  <div class="callout-chip">
    <strong>图谱与技能面板</strong>
    确认记忆页和技能配置是否按预期工作。
  </div>
</div>
