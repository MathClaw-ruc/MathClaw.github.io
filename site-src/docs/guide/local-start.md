# 本地安装

<div class="lead-panel">
  <span class="kicker">开发者启动路径</span>
  <h1>用四步拉起一套本地 MathClaw 运行时</h1>
  <p>本地启动不应该像追脚本，而应该像启动一套产品。先安装包，再准备 workspace，然后启动 gateway，最后让 console 接到同一份运行时状态。</p>
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
    <p>创建虚拟环境，并以 editable 模式安装 MathClaw。</p>
  </div>
  <div class="flow-card">
    <span class="flow-step">02</span>
    <h3>准备 workspace</h3>
    <p>创建 sessions、memory 和 cron 所需的最小目录结构。</p>
  </div>
  <div class="flow-card">
    <span class="flow-step">03</span>
    <h3>启动 gateway</h3>
    <p>用共享 workspace 和指定通道拉起代理运行时。</p>
  </div>
  <div class="flow-card">
    <span class="flow-step">04</span>
    <h3>打开 console</h3>
    <p>让 Web 界面连接到同一个 workspace，保证计划和图谱能读到真实数据。</p>
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
    <h3>启动后要确认什么</h3>
    <ul>
      <li>gateway 启动时没有模型或通道错误。</li>
      <li>console 能正常打开运行状态、心跳和记忆页面。</li>
      <li>进行真实交互后，workspace 中会生成 session 和 memory 文件。</li>
    </ul>
  </div>
  <div class="checklist-card">
    <h3>为什么要显式传入 workspace</h3>
    <ul>
      <li>避免 console 指向另一份机器本地目录。</li>
      <li>只有读取同一份运行状态，所有产品页才会一致。</li>
      <li>仓库相对路径比机器绝对路径更可移植。</li>
    </ul>
  </div>
</div>
