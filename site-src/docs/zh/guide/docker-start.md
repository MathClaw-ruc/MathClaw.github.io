# 通道部署

<div class="lead-panel">
  <span class="kicker">生产运行时</span>
  <h1>把 MathClaw 部署成共享服务，而不是零散脚本</h1>
  <p>稳定部署的关键是让 gateway、console 和 workspace 分离但连通。这样，外部通道、计划页面、图谱记忆和自动总结都能依赖同一份学习状态。</p>
  <div class="badge-list">
    <span>Gateway</span>
    <span>Console</span>
    <span>Workspace</span>
    <span>Channels</span>
  </div>
</div>

<div class="deployment-grid">
  <div class="deployment-card">
    <h3>Gateway 服务</h3>
    <p>负责通道接入、代理执行，以及每轮会话后的记忆更新。</p>
  </div>
  <div class="deployment-card">
    <h3>Console 服务</h3>
    <p>提供运行状态、图谱、计划、心跳和 Skills 的管理界面。</p>
  </div>
  <div class="deployment-card">
    <h3>持久化 workspace</h3>
    <p>保存所有产品层面依赖的 sessions、memory、graphs 和 cron 状态。</p>
  </div>
</div>

## 推荐部署模式

<div class="topology-strip">
  <div class="topology-card">
    <strong>Channels</strong>
    企业微信、QQ、飞书或 Web 入口把任务送入运行时。
  </div>
  <div class="topology-card">
    <strong>Gateway</strong>
    共享代理循环负责执行，并把状态写入 workspace。
  </div>
  <div class="topology-card">
    <strong>Workspace</strong>
    会话、记忆、图谱和心跳状态都在这里累积。
  </div>
  <div class="topology-card">
    <strong>Console</strong>
    管理者通过控制台判断系统健康、计划质量和图谱状态。
  </div>
</div>

<div class="checklist-grid">
  <div class="checklist-card">
    <h3>运维习惯</h3>
    <ul>
      <li>把 workspace 放在持久化存储上。</li>
      <li>将 gateway 和 console 作为两个长期运行服务分别启动。</li>
      <li>只启用生产环境真正需要的通道。</li>
    </ul>
  </div>
  <div class="checklist-card">
    <h3>上线后优先检查</h3>
    <ul>
      <li>运行状态：服务、provider、通道是否健康。</li>
      <li>心跳：日总结和周总结是否按节律执行。</li>
      <li>记忆页：图谱是否刷新，信息是否可解释。</li>
    </ul>
  </div>
</div>

## 常见通道选择

<div class="callout-strip">
  <div class="callout-chip">
    <strong>企业微信</strong>
    适合真实教学运营和较稳定的企业环境。
  </div>
  <div class="callout-chip">
    <strong>QQ / 飞书</strong>
    适合作为次级学生入口或企业协作入口。
  </div>
  <div class="callout-chip">
    <strong>Web Console</strong>
    建议始终保留，作为管理和演示入口。
  </div>
</div>
