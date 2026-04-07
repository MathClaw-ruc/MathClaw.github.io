# 本地安装

<div class="lead-panel">
  <span class="kicker">开发者启动路径</span>
  <h1>四步启动本地 MathClaw 运行环境</h1>
  <p>安装依赖、准备 workspace、启动 gateway、打开 console，四步完成本地部署。</p>
  <div class="badge-list">
    <span>Python 包</span>
    <span>共享 workspace</span>
    <span>Gateway</span>
    <span>Console</span>
  </div>
</div>

<div class="workflow-ribbon">
  <div class="flow-card">
    <span class="flow-step">01</span>
    <h3>安装依赖</h3>
    <p>创建虚拟环境，以 editable 模式安装 MathClaw。</p>
  </div>
  <div class="flow-card">
    <span class="flow-step">02</span>
    <h3>准备 workspace</h3>
    <p>创建 sessions、memory 和 cron 所需的目录结构。</p>
  </div>
  <div class="flow-card">
    <span class="flow-step">03</span>
    <h3>启动 gateway</h3>
    <p>指定 workspace 和通道，启动代理运行时。</p>
  </div>
  <div class="flow-card">
    <span class="flow-step">04</span>
    <h3>打开 console</h3>
    <p>让控制台连接到同一个 workspace，确保数据一致。</p>
  </div>
</div>

## 1. 安装依赖

```bash
python -m venv .venv
. .venv/bin/activate
pip install -e .
```

## 2. 准备工作区

```bash
mkdir -p workspace/sessions
mkdir -p workspace/memory
mkdir -p workspace/cron
```

## 3. 启动 gateway

```bash
mathclaw gateway \
  --workspace ./workspace \
  --channel wecom
```

## 4. 启动控制台

```bash
cd console
MATHCLAW_CONSOLE_WORKSPACE=../workspace python serve.py
```

默认控制台地址：

```text
http://127.0.0.1:6006
```

<div class="checklist-grid">
  <div class="checklist-card">
    <h3>启动后确认事项</h3>
    <ul>
      <li>gateway 启动时无模型或通道报错</li>
      <li>console 能正常打开运行状态、定时任务和记忆页面</li>
      <li>进行一次真实交互后，workspace 中生成 session 和 memory 文件</li>
    </ul>
  </div>
  <div class="checklist-card">
    <h3>为什么要显式传入 workspace</h3>
    <ul>
      <li>避免 console 和 gateway 指向不同目录</li>
      <li>所有页面读取同一份数据，保证一致性</li>
      <li>使用仓库相对路径，方便在不同机器间迁移</li>
    </ul>
  </div>
</div>
