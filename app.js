const STORAGE_KEY = "chen-jiawen-coc-state-v1";

const DEFAULT_STATE = {
  version: 1,
  character: {
    name: "陈嘉文",
    englishName: "Kevin Chen",
    age: 24,
    role: "华文报撰稿人 / 社区翻译 / 野生鸟类摄影爱好者",
    profile: [
      "陈嘉文出生于松江，10岁随父母去了美国旧金山。1998年春，他因外婆林凤珍去世独自回到松江，暂住在机床厂家属区老楼。",
      "他习惯通过摄影和记录接近真相。面对危险时更倾向于躲开、观察、寻找证据，而不是正面对抗。",
      "外婆遗物中的圣经、圣埃里克教堂查经班卡片，以及那封只写到一半的信，让他怀疑外婆临终前听见的声音并不寻常。"
    ]
  },
  attributes: {
    STR: 40,
    DEX: 65,
    POW: 75,
    CON: 60,
    APP: 65,
    EDU: 80,
    SIZ: 55,
    INT: 80,
    LUCK: 85
  },
  vitals: {
    hp: { label: "HP", current: 11, max: 11 },
    san: { label: "SAN", current: 75, max: 75 },
    mp: { label: "MP", current: 17, max: 17 }
  },
  derivedStats: [
    { id: "idea", label: "灵感", value: 80 },
    { id: "move", label: "移动", value: 8 },
    { id: "damageBonus", label: "伤害加值", value: 0 },
    { id: "build", label: "体格", value: 0 }
  ],
  skills: [
    skill("摄影", 85, "主要技能"),
    skill("侦查", 85, "主要技能"),
    skill("母语（英文）", 80, "主要技能"),
    skill("图书馆", 65, "主要技能"),
    skill("心理学", 65, "主要技能"),
    skill("聆听", 60, "主要技能"),
    skill("说服", 60, "主要技能"),
    skill("闪避", 60, "主要技能"),
    skill("外语（中文）", 50, "主要技能"),
    skill("驾驶汽车", 45, "主要技能"),
    skill("急救", 38, "主要技能"),
    skill("信用评级", 25, "主要技能"),
    skill("斗殴", 25, "主要技能"),
    skill("历史", 20, "主要技能"),
    skill("手枪", 20, "主要技能"),
    skill("潜行", 20, "主要技能"),
    skill("游泳", 20, "主要技能"),
    skill("投掷", 20, "主要技能"),
    skill("人类学", 1, "其他技能"),
    skill("估价", 5, "其他技能"),
    skill("考古学", 1, "其他技能"),
    skill("取悦", 15, "其他技能"),
    skill("魅惑", 15, "其他技能"),
    skill("攀爬", 20, "其他技能"),
    skill("计算机使用", 5, "其他技能"),
    skill("克苏鲁神话", 0, "其他技能"),
    skill("乔装", 5, "其他技能"),
    skill("电气维修", 10, "其他技能"),
    skill("电子学", 10, "其他技能"),
    skill("话术", 5, "其他技能"),
    skill("法律", 5, "其他技能"),
    skill("开锁", 1, "其他技能"),
    skill("摄像", 1, "其他技能"),
    skill("机械维修", 10, "其他技能"),
    skill("医学", 1, "其他技能"),
    skill("博物学", 10, "其他技能"),
    skill("自然学", 10, "其他技能"),
    skill("领航", 10, "其他技能"),
    skill("导航", 10, "其他技能"),
    skill("神秘学", 5, "其他技能"),
    skill("重型机械操作", 1, "其他技能"),
    skill("精神分析", 1, "其他技能"),
    skill("骑术", 5, "其他技能"),
    skill("物理学", 1, "其他技能"),
    skill("妙手", 10, "其他技能"),
    skill("生存", 10, "其他技能"),
    skill("追踪", 10, "其他技能"),
    skill("驯兽", 5, "其他技能"),
    skill("潜水", 1, "其他技能"),
    skill("爆破", 1, "其他技能"),
    skill("读唇", 1, "其他技能"),
    skill("催眠", 1, "其他技能"),
    skill("炮术", 1, "其他技能")
  ],
  statuses: [
    status("重伤"),
    status("临时疯狂"),
    status("不定疯狂"),
    status("昏迷"),
    status("恐惧"),
    status("疲劳")
  ],
  statusNote: "",
  inventory: [
    item("Nikon F90X / N90s 胶片单反相机", "随身相机，记录真相的核心工具。"),
    item("300mm f/4 IF-ED 长焦镜头", "适合远距离观察和拍摄。"),
    item("50mm f/1.8 标准镜头", "日常拍摄镜头。"),
    item("Kodak 胶卷数卷", "注意剩余胶卷和冲洗机会。"),
    item("小型折叠三脚架", "长时间等待或夜间拍摄可用。"),
    item("相机包", "装相机、镜头、胶卷和笔记。"),
    item("笔记本与圆珠笔", "跑团中的文字记录。"),
    item("松江市旧地图", "查老厂区、家属区和教堂周边。"),
    item("身份证", "身份核验。"),
    item("一叠洗出来的鸟类照片", "个人纪念，也可能用于交流。")
  ],
  clues: [
    item("外婆未完成的信", "“嘉文，外婆这辈子什么都不怕。但最近，我每天晚上都听见……”"),
    item("圣埃里克教堂", "外婆似乎参加过查经班，邻居提起时态度含糊。"),
    item("查经班卡片", "夹在外婆遗物中，是接触老教堂的起点。"),
    item("机床厂地下工事", "小时候听说有封起来的防空洞、旧通道和管廊。"),
    item("刨锛队传闻", "邻居提醒天黑不要独自出门，街上有人从背后袭击抢钱。")
  ],
  lore: [
    item("外婆林凤珍", "机床厂退休工人。她是陈嘉文和松江之间最后、也是最真实的联系。"),
    item("父亲陈卫东", "原松江机床厂技术科制图员，后在旧金山经营五金店。"),
    item("母亲林秀琴", "原松江市第二百货公司售货员，现身体不好，无法回国。"),
    item("机床厂家属区老楼", "陈嘉文暂住之处，也是童年、遗物和未说出口秘密堆积的地方。"),
    item("松江", "熟悉又陌生的故乡，正在被下岗潮和旧工业衰败改变。")
  ],
  sessionLog: [],
  updatedAt: new Date().toISOString()
};

let state = loadState();
let currentSkillFilter = "all";
let currentRollMode = 0;
let isEditMode = false;
let deleteMode = false;
let toastTimer = null;
let pendingDelete = null;
let pendingDeleteTimer = null;

const nodes = {
  characterName: document.querySelector("#characterName"),
  characterMeta: document.querySelector("#characterMeta"),
  editModeButton: document.querySelector("#editModeButton"),
  attributeModeLabel: document.querySelector("#attributeModeLabel"),
  derivedModeLabel: document.querySelector("#derivedModeLabel"),
  vitalGrid: document.querySelector("#vitalGrid"),
  attributeGrid: document.querySelector("#attributeGrid"),
  derivedGrid: document.querySelector("#derivedGrid"),
  statusGrid: document.querySelector("#statusGrid"),
  statusNote: document.querySelector("#statusNote"),
  diceLast: document.querySelector("#diceLast"),
  customDice: document.querySelector("#customDice"),
  skillList: document.querySelector("#skillList"),
  skillSearch: document.querySelector("#skillSearch"),
  clueList: document.querySelector("#clueList"),
  inventoryList: document.querySelector("#inventoryList"),
  loreList: document.querySelector("#loreList"),
  quickLog: document.querySelector("#quickLog"),
  logList: document.querySelector("#logList"),
  saveStatus: document.querySelector("#saveStatus"),
  profileText: document.querySelector("#profileText"),
  toast: document.querySelector("#toast")
};

function skill(name, value, category) {
  return { id: makeId(name), name, value, category, checked: false };
}

function status(name) {
  return { id: makeId(name), name, active: false };
}

function item(title, note = "") {
  return { id: makeId(title), title, note };
}

function makeId(seed = "id") {
  const clean = String(seed).toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, "-").replace(/^-|-$/g, "");
  return `${clean || "id"}-${Math.random().toString(36).slice(2, 8)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return clone(DEFAULT_STATE);
    return mergeState(clone(DEFAULT_STATE), JSON.parse(stored));
  } catch {
    return clone(DEFAULT_STATE);
  }
}

function mergeState(base, incoming) {
  const merged = { ...base, ...incoming };
  merged.character = { ...base.character, ...(incoming.character || {}) };
  merged.attributes = { ...base.attributes, ...(incoming.attributes || {}) };
  if (!incoming.attributes?.LUCK && incoming.vitals?.luck?.current !== undefined) {
    merged.attributes.LUCK = incoming.vitals.luck.current;
  }
  const incomingVitals = incoming.vitals || {};
  merged.vitals = Object.fromEntries(
    Object.entries(base.vitals).map(([key, value]) => [key, { ...value, ...(incomingVitals[key] || {}) }])
  );
  merged.derivedStats = Array.isArray(incoming.derivedStats) ? incoming.derivedStats : base.derivedStats;
  merged.skills = (Array.isArray(incoming.skills) ? incoming.skills : base.skills).map((entry) => ({
    ...entry,
    checked: Boolean(entry.checked)
  }));
  merged.statuses = Array.isArray(incoming.statuses) ? incoming.statuses : base.statuses;
  merged.inventory = Array.isArray(incoming.inventory) ? incoming.inventory : base.inventory;
  merged.clues = Array.isArray(incoming.clues) ? incoming.clues : base.clues;
  merged.lore = Array.isArray(incoming.lore) ? incoming.lore : base.lore;
  merged.sessionLog = Array.isArray(incoming.sessionLog) ? incoming.sessionLog : base.sessionLog;
  return merged;
}

function saveState(message = "已自动保存") {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  nodes.saveStatus.textContent = `${message} · ${formatTime(state.updatedAt)}`;
}

function render() {
  syncEditModeUI();
  syncDeleteModeUI();
  nodes.characterName.textContent = state.character.name;
  nodes.characterMeta.textContent = `${state.character.englishName} · ${state.character.age}岁 · 摄影爱好者`;
  renderVitals();
  renderAttributes();
  renderDerivedStats();
  renderStatuses();
  renderSkills();
  renderEditableList("clues", nodes.clueList);
  renderEditableList("inventory", nodes.inventoryList);
  renderLore();
  renderLog();
  renderProfile();
  nodes.statusNote.value = state.statusNote || "";
  nodes.saveStatus.textContent = state.updatedAt ? `最后保存 · ${formatTime(state.updatedAt)}` : "尚未保存";
}

function setEditMode(nextValue) {
  isEditMode = Boolean(nextValue);
  if (!isEditMode && deleteMode) {
    deleteMode = false;
    clearPendingDelete();
  }
  render();
  showToast(isEditMode ? "编辑模式已开启。" : "已回到跑团模式。");
}

function syncEditModeUI() {
  document.body.classList.toggle("edit-mode", isEditMode);
  nodes.editModeButton.textContent = isEditMode ? "完成" : "编辑";
  nodes.editModeButton.setAttribute("aria-pressed", String(isEditMode));
  nodes.attributeModeLabel.textContent = isEditMode ? "可直接修改" : "检定速查";
  nodes.derivedModeLabel.textContent = isEditMode ? "可手动修正" : "规则速查";
}

function renderVitals() {
  nodes.vitalGrid.innerHTML = "";
  Object.entries(state.vitals).forEach(([key, vital]) => {
    const card = document.createElement("article");
    card.className = "vital-card";
    const maxControl = isEditMode
      ? `<input type="number" inputmode="numeric" data-vital="${key}" data-vital-field="max" value="${vital.max}" aria-label="${vital.label}上限">`
      : `<strong class="vital-max-readout">${escapeHtml(vital.max)}</strong>`;
    card.innerHTML = `
      <div class="vital-top">
        <strong>${escapeHtml(vital.label)}</strong>
        <span>${getVitalHint(key)}</span>
      </div>
      <div class="vital-values">
        <input type="number" inputmode="numeric" data-vital="${key}" data-vital-field="current" value="${vital.current}" aria-label="${vital.label}当前值">
        <span>/</span>
        ${maxControl}
      </div>
      <div class="adjust-row">
        <button type="button" data-adjust-vital="${key}" data-delta="-5">-5</button>
        <button type="button" data-adjust-vital="${key}" data-delta="-1">-1</button>
        <button type="button" data-adjust-vital="${key}" data-delta="1">+1</button>
        <button type="button" data-adjust-vital="${key}" data-delta="5">+5</button>
      </div>
    `;
    nodes.vitalGrid.append(card);
  });
}

function getVitalHint(key) {
  return {
    hp: "伤势",
    san: "理智",
    mp: "魔法"
  }[key] || "";
}

function renderAttributes() {
  const labels = {
    STR: "力量",
    DEX: "敏捷",
    POW: "意志",
    CON: "体质",
    APP: "外貌",
    EDU: "教育",
    SIZ: "体型",
    INT: "智力",
    LUCK: "幸运"
  };
  nodes.attributeGrid.innerHTML = "";
  Object.entries(labels).forEach(([key, label]) => {
    const value = Number(state.attributes[key] || 0);
    const card = document.createElement("article");
    card.className = "attr-card";
    const playActions = `
      <div class="attr-play-score">
        <strong>${value}</strong>
        <button class="primary-button" type="button" data-roll-attribute="${key}">掷</button>
      </div>
    `;
    const editActions = `
      <div class="attr-actions">
        <input type="number" inputmode="numeric" data-attr="${key}" value="${value}" aria-label="${label}">
        <button class="primary-button" type="button" data-roll-attribute="${key}">掷</button>
      </div>
    `;
    card.innerHTML = `
      <div class="attr-head">
        <strong>${label}</strong>
        <span>${key}</span>
      </div>
      <div class="attr-breakpoints">
        <span>困难 ${Math.floor(value / 2)}</span>
        <span>极难 ${Math.floor(value / 5)}</span>
      </div>
      ${isEditMode ? editActions : playActions}
      ${key === "LUCK" ? `
        <div class="adjust-row attr-adjust-row" aria-label="消耗或恢复幸运">
          <button type="button" data-adjust-attr="LUCK" data-delta="-5">-5</button>
          <button type="button" data-adjust-attr="LUCK" data-delta="-1">-1</button>
          <button type="button" data-adjust-attr="LUCK" data-delta="1">+1</button>
          <button type="button" data-adjust-attr="LUCK" data-delta="5">+5</button>
        </div>
      ` : ""}
    `;
    nodes.attributeGrid.append(card);
  });
}

function renderDerivedStats() {
  nodes.derivedGrid.innerHTML = "";
  state.derivedStats.forEach((entry) => {
    const card = document.createElement(isEditMode ? "label" : "article");
    card.className = "derived-card";
    card.innerHTML = isEditMode
      ? `
        <span>${escapeHtml(entry.label)}</span>
        <input type="number" inputmode="numeric" data-derived="${entry.id}" value="${entry.value}" aria-label="${escapeAttr(entry.label)}">
      `
      : `
        <span>${escapeHtml(entry.label)}</span>
        <strong>${escapeHtml(entry.value)}</strong>
      `;
    nodes.derivedGrid.append(card);
  });
}

function renderStatuses() {
  nodes.statusGrid.innerHTML = "";
  state.statuses.forEach((entry) => {
    const label = document.createElement("label");
    label.className = "check-tile";
    label.innerHTML = `
      <input type="checkbox" data-status="${entry.id}" ${entry.active ? "checked" : ""}>
      <span>${escapeHtml(entry.name)}</span>
    `;
    nodes.statusGrid.append(label);
  });
}

function renderSkills() {
  const query = nodes.skillSearch.value.trim().toLowerCase();
  const skills = state.skills.filter((entry) => {
    const matchesText = !query || entry.name.toLowerCase().includes(query);
    const matchesGroup = currentSkillFilter === "all" || entry.category === currentSkillFilter;
    return matchesText && matchesGroup;
  });
  nodes.skillList.innerHTML = "";
  if (!skills.length) {
    nodes.skillList.innerHTML = `<section class="panel"><p class="body-copy">没有匹配的技能。</p></section>`;
    return;
  }
  skills.forEach((entry) => {
    const value = clampNumber(entry.value, 0, 999);
    const card = document.createElement("article");
    card.className = "skill-card";
    card.dataset.skillId = entry.id;
    card.innerHTML = isEditMode
      ? `
        <div class="skill-main">
          <input data-skill-name="${entry.id}" value="${escapeAttr(entry.name)}" aria-label="技能名称">
          <input type="number" inputmode="numeric" data-skill-value="${entry.id}" value="${value}" aria-label="${escapeAttr(entry.name)}数值">
          <button class="primary-button" type="button" data-roll-skill="${entry.id}">掷</button>
        </div>
        <div class="skill-meta">
          <label class="skill-check">
            <input type="checkbox" data-skill-checked="${entry.id}" ${entry.checked ? "checked" : ""}>
            <span>已用</span>
          </label>
          <span>困难 ${Math.floor(value / 2)} · 极难 ${Math.floor(value / 5)}</span>
          <select data-skill-category="${entry.id}" aria-label="技能分组">
            <option value="主要技能" ${entry.category === "主要技能" ? "selected" : ""}>主要技能</option>
            <option value="其他技能" ${entry.category === "其他技能" ? "selected" : ""}>其他技能</option>
          </select>
          <button class="skill-delete" type="button" data-delete-skill="${entry.id}">删</button>
        </div>
      `
      : `
        <div class="skill-play-row">
          <label class="skill-check">
            <input type="checkbox" data-skill-checked="${entry.id}" ${entry.checked ? "checked" : ""}>
            <span>已用</span>
          </label>
          <div class="skill-play-main">
            <strong>${escapeHtml(entry.name)}</strong>
            <span>${value} · 困难 ${Math.floor(value / 2)} · 极难 ${Math.floor(value / 5)}</span>
          </div>
          <button class="primary-button" type="button" data-roll-skill="${entry.id}">掷</button>
        </div>
      `;
    nodes.skillList.append(card);
  });
}

function renderEditableList(key, container) {
  container.innerHTML = "";
  state[key].forEach((entry) => {
    const card = document.createElement("article");
    card.className = "editable-card";
    card.innerHTML = `
      <input data-list-title="${key}:${entry.id}" value="${escapeAttr(entry.title)}" aria-label="标题">
      <textarea rows="2" data-list-note="${key}:${entry.id}" aria-label="备注">${escapeHtml(entry.note || "")}</textarea>
      <div class="card-actions">
        <button class="danger-button" type="button" data-delete-list="${key}:${entry.id}">删除</button>
      </div>
    `;
    container.append(card);
  });
}

function renderLore() {
  if (isEditMode) {
    renderEditableList("lore", nodes.loreList);
    return;
  }
  nodes.loreList.innerHTML = "";
  state.lore.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "lore-card";
    card.innerHTML = `<h3>${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.note)}</p>`;
    nodes.loreList.append(card);
  });
}

function renderLog() {
  nodes.logList.innerHTML = "";
  if (!state.sessionLog.length) {
    nodes.logList.innerHTML = `<article class="log-card"><p>还没有流程记录。</p></article>`;
    return;
  }
  state.sessionLog
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((entry) => {
      const card = document.createElement("article");
      card.className = "log-card";
      card.innerHTML = `
        <time>${formatTime(entry.createdAt)}</time>
        <textarea rows="3" data-log-note="${entry.id}">${escapeHtml(entry.note)}</textarea>
        <div class="card-actions">
          <button class="danger-button" type="button" data-delete-log="${entry.id}">删除</button>
        </div>
      `;
      nodes.logList.append(card);
    });
}

function renderProfile() {
  if (isEditMode) {
    nodes.profileText.innerHTML = `
      <label class="field">
        <span>角色简介</span>
        <textarea id="profileEditor" rows="7" placeholder="每段之间留一行">${escapeHtml(state.character.profile.join("\n\n"))}</textarea>
      </label>
    `;
    return;
  }
  nodes.profileText.innerHTML = state.character.profile.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

function updateVital(key, field, value) {
  if (!state.vitals[key]) return;
  state.vitals[key][field] = clampNumber(value, 0, 999);
  if (field === "max" && state.vitals[key].current > state.vitals[key].max) {
    state.vitals[key].current = state.vitals[key].max;
  }
  saveState();
}

function adjustVital(key, delta) {
  if (!state.vitals[key]) return;
  const vital = state.vitals[key];
  vital.current = clampNumber(Number(vital.current || 0) + Number(delta), 0, 999);
  saveState();
  renderVitals();
}

function adjustAttribute(key, delta) {
  state.attributes[key] = clampNumber(Number(state.attributes[key] || 0) + Number(delta), 0, 999);
  saveState();
  renderAttributes();
}

function recalcDerived() {
  const con = Number(state.attributes.CON || 0);
  const siz = Number(state.attributes.SIZ || 0);
  const pow = Number(state.attributes.POW || 0);
  const int = Number(state.attributes.INT || 0);
  state.vitals.hp.max = Math.floor((con + siz) / 10);
  state.vitals.mp.max = Math.floor(pow / 5);
  state.vitals.san.max = pow;
  const idea = state.derivedStats.find((entry) => entry.id === "idea");
  if (idea) idea.value = int;
  saveState("已重算上限");
  render();
  showToast("已按规则重算上限；当前值没有被覆盖。");
}

function rollDice(expression) {
  const match = String(expression).trim().toLowerCase().match(/^(\d{1,2})d(\d{1,4})([+-]\d{1,4})?$/);
  if (!match) {
    showToast("骰式格式不对，例如 1d100 或 2d6+1。");
    return null;
  }
  const count = clampNumber(match[1], 1, 50);
  const sides = clampNumber(match[2], 2, 1000);
  const modifier = Number(match[3] || 0);
  const rolls = Array.from({ length: count }, () => randomInt(1, sides));
  const total = rolls.reduce((sum, value) => sum + value, 0) + modifier;
  const suffix = modifier ? ` ${modifier > 0 ? "+" : "-"} ${Math.abs(modifier)}` : "";
  const message = `${expression}: ${rolls.join(", ")}${suffix} = ${total}`;
  nodes.diceLast.textContent = message;
  showToast(message);
  return { rolls, total };
}

function rollD100WithMode(mode = 0) {
  const ones = randomInt(0, 9);
  const tensRolls = Array.from({ length: Math.abs(mode) + 1 }, () => randomInt(0, 9) * 10);
  const chosenTens = mode > 0 ? Math.max(...tensRolls) : Math.min(...tensRolls);
  const total = chosenTens + ones === 0 ? 100 : chosenTens + ones;
  return { total, tensRolls, ones };
}

function rollSkill(id) {
  const entry = state.skills.find((candidate) => candidate.id === id);
  if (!entry) return;
  rollCheck(entry.name, Number(entry.value || 0), "检定");
}

function rollAttribute(key) {
  const labels = {
    STR: "力量",
    DEX: "敏捷",
    POW: "意志",
    CON: "体质",
    APP: "外貌",
    EDU: "教育",
    SIZ: "体型",
    INT: "智力",
    LUCK: "幸运"
  };
  rollCheck(labels[key] || key, Number(state.attributes[key] || 0), "属性检定");
}

function rollCheck(name, value, logPrefix) {
  const mode = currentRollMode;
  const roll = rollD100WithMode(mode);
  const result = getSuccessLevel(roll.total, value);
  const modeLabel = mode === 0 ? "" : mode > 0 ? ` · ${mode}个惩罚骰` : ` · ${Math.abs(mode)}个奖励骰`;
  const tensText = mode === 0 ? "" : `（十位骰 ${roll.tensRolls.join("/")}，个位 ${roll.ones}）`;
  const message = `${name} ${value}: ${roll.total} · ${result}${modeLabel}${tensText}`;
  nodes.diceLast.textContent = message;
  addLog(`${logPrefix}：${message}`);
  showToast(message);
}

function getSuccessLevel(roll, target) {
  if (roll === 1) return "大成功";
  if (target < 50 && roll >= 96) return "大失败";
  if (target >= 50 && roll === 100) return "大失败";
  if (roll <= Math.floor(target / 5)) return "极难成功";
  if (roll <= Math.floor(target / 2)) return "困难成功";
  if (roll <= target) return "成功";
  return "失败";
}

function addSkill() {
  state.skills.unshift(skill("新技能", 1, currentSkillFilter === "其他技能" ? "其他技能" : "主要技能"));
  saveState("已新增技能");
  renderSkills();
}

function addListItem(key) {
  const defaults = {
    clues: ["新线索", "已新增线索"],
    inventory: ["新物品", "已新增物品"],
    lore: ["新人物", "已新增人物"]
  };
  const [title, message] = defaults[key] || ["新条目", "已新增"];
  state[key].unshift(item(title, ""));
  saveState(message);
  renderEditableList(key, key === "clues" ? nodes.clueList : key === "inventory" ? nodes.inventoryList : nodes.loreList);
}

function addLog(note = "") {
  const text = note || nodes.quickLog.value.trim();
  if (!text) {
    showToast("先写一点记录内容。");
    return;
  }
  state.sessionLog.unshift({ id: makeId("log"), note: text, createdAt: new Date().toISOString() });
  nodes.quickLog.value = "";
  saveState("已添加日志");
  renderLog();
}

function requestDelete(kind, id, button, onConfirm) {
  const token = `${kind}:${id}`;
  if (pendingDelete === token) {
    clearPendingDelete();
    onConfirm();
    return;
  }
  clearPendingDelete();
  pendingDelete = token;
  button.dataset.originalText = button.textContent;
  button.textContent = "确认删除";
  button.classList.add("confirm-delete");
  showToast("再点一次才会删除。");
  pendingDeleteTimer = setTimeout(clearPendingDelete, 3500);
}

function clearPendingDelete() {
  if (pendingDeleteTimer) {
    clearTimeout(pendingDeleteTimer);
    pendingDeleteTimer = null;
  }
  document.querySelectorAll(".confirm-delete").forEach((button) => {
    button.textContent = button.dataset.originalText || "删除";
    button.classList.remove("confirm-delete");
    delete button.dataset.originalText;
  });
  pendingDelete = null;
}

function setDeleteMode(nextValue) {
  if (!isEditMode) return;
  deleteMode = nextValue;
  clearPendingDelete();
  syncDeleteModeUI();
  showToast(deleteMode ? "删除模式已开启，仍需二次确认。" : "删除模式已关闭。");
}

function syncDeleteModeUI() {
  document.body.classList.toggle("delete-mode", deleteMode);
  document.querySelectorAll("[data-delete-mode-toggle]").forEach((button) => {
    button.textContent = deleteMode ? "删除模式：开" : "删除模式：关";
    button.classList.toggle("is-active", deleteMode);
  });
}

function syncRollModeButtons() {
  document.querySelectorAll("[data-roll-mode]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.rollMode) === currentRollMode);
  });
}

function exportBackup() {
  saveState("已导出前保存");
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `chen-jiawen-coc-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("备份 JSON 已导出。");
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      state = mergeState(clone(DEFAULT_STATE), imported);
      saveState("已导入备份");
      render();
      showToast("备份已导入。");
    } catch {
      showToast("导入失败：JSON 文件无法读取。");
    }
  };
  reader.readAsText(file);
}

function clearLocalData() {
  if (!confirm("确定清空本机保存的跑团记录？建议先导出备份。")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = clone(DEFAULT_STATE);
  saveState("已清空并恢复默认");
  render();
  showToast("已清空本地记录。");
}

function resetCharacter() {
  if (!confirm("确定恢复初始角色卡？当前编辑和跑团记录会被覆盖。")) return;
  state = clone(DEFAULT_STATE);
  saveState("已恢复初始角色卡");
  render();
  showToast("已恢复初始角色卡。");
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((entry) => entry.classList.remove("is-active"));
      document.querySelectorAll(".tab-panel").forEach((entry) => entry.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`#${tab.dataset.tab}`).classList.add("is-active");
    });
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.matches("[data-vital]")) {
      updateVital(target.dataset.vital, target.dataset.vitalField, target.value);
    }
    if (target.matches("[data-attr]")) {
      state.attributes[target.dataset.attr] = clampNumber(target.value, 0, 999);
      saveState();
      const card = target.closest(".attr-card");
      const value = Number(state.attributes[target.dataset.attr] || 0);
      const breakpoints = card?.querySelectorAll(".attr-breakpoints span");
      if (breakpoints?.length === 2) {
        breakpoints[0].textContent = `困难 ${Math.floor(value / 2)}`;
        breakpoints[1].textContent = `极难 ${Math.floor(value / 5)}`;
      }
    }
    if (target.matches("[data-derived]")) {
      const entry = state.derivedStats.find((candidate) => candidate.id === target.dataset.derived);
      if (entry) {
        entry.value = clampNumber(target.value, -99, 999);
        saveState();
      }
    }
    if (target.matches("#statusNote")) {
      state.statusNote = target.value;
      saveState();
    }
    if (target.matches("#profileEditor")) {
      state.character.profile = target.value
        .split(/\n\s*\n/g)
        .map((text) => text.trim())
        .filter(Boolean);
      saveState();
    }
    if (target.matches("[data-skill-name]")) {
      const entry = state.skills.find((candidate) => candidate.id === target.dataset.skillName);
      if (entry) {
        entry.name = target.value;
        saveState();
      }
    }
    if (target.matches("[data-skill-value]")) {
      const entry = state.skills.find((candidate) => candidate.id === target.dataset.skillValue);
      if (entry) {
        entry.value = clampNumber(target.value, 0, 999);
        saveState();
        const meta = target.closest(".skill-card")?.querySelector(".skill-meta span");
        if (meta) {
          meta.textContent = `困难 ${Math.floor(entry.value / 2)} · 极难 ${Math.floor(entry.value / 5)}`;
        }
      }
    }
    if (target.matches("[data-list-title]")) {
      const [key, id] = target.dataset.listTitle.split(":");
      const entry = state[key]?.find((candidate) => candidate.id === id);
      if (entry) {
        entry.title = target.value;
        saveState();
      }
    }
    if (target.matches("[data-list-note]")) {
      const [key, id] = target.dataset.listNote.split(":");
      const entry = state[key]?.find((candidate) => candidate.id === id);
      if (entry) {
        entry.note = target.value;
        saveState();
      }
    }
    if (target.matches("[data-log-note]")) {
      const entry = state.sessionLog.find((candidate) => candidate.id === target.dataset.logNote);
      if (entry) {
        entry.note = target.value;
        saveState();
      }
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("[data-status]")) {
      const entry = state.statuses.find((candidate) => candidate.id === target.dataset.status);
      if (entry) {
        entry.active = target.checked;
        saveState();
      }
    }
    if (target.matches("[data-skill-checked]")) {
      const entry = state.skills.find((candidate) => candidate.id === target.dataset.skillChecked);
      if (entry) {
        entry.checked = target.checked;
        saveState();
      }
    }
    if (target.matches("[data-skill-category]")) {
      const entry = state.skills.find((candidate) => candidate.id === target.dataset.skillCategory);
      if (entry) {
        entry.category = target.value;
        saveState();
        renderSkills();
      }
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.adjustVital) adjustVital(target.dataset.adjustVital, target.dataset.delta);
    if (target.dataset.adjustAttr) adjustAttribute(target.dataset.adjustAttr, target.dataset.delta);
    if (target.dataset.roll) rollDice(target.dataset.roll);
    if (target.dataset.rollAttribute) rollAttribute(target.dataset.rollAttribute);
    if (target.dataset.rollSkill) rollSkill(target.dataset.rollSkill);
    if (target.dataset.deleteSkill) {
      if (!isEditMode || !deleteMode) return;
      requestDelete("skill", target.dataset.deleteSkill, target, () => {
        state.skills = state.skills.filter((entry) => entry.id !== target.dataset.deleteSkill);
        saveState("已删除技能");
        renderSkills();
      });
    }
    if (target.dataset.deleteList) {
      if (!isEditMode || !deleteMode) return;
      const [key, id] = target.dataset.deleteList.split(":");
      requestDelete(key, id, target, () => {
        state[key] = state[key].filter((entry) => entry.id !== id);
        saveState("已删除");
        renderEditableList(key, key === "clues" ? nodes.clueList : key === "inventory" ? nodes.inventoryList : nodes.loreList);
      });
    }
    if (target.dataset.deleteLog) {
      if (!isEditMode || !deleteMode) return;
      requestDelete("log", target.dataset.deleteLog, target, () => {
        state.sessionLog = state.sessionLog.filter((entry) => entry.id !== target.dataset.deleteLog);
        saveState("已删除日志");
        renderLog();
      });
    }
  });

  nodes.skillSearch.addEventListener("input", renderSkills);
  document.querySelectorAll("[data-skill-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentSkillFilter = button.dataset.skillFilter;
      document.querySelectorAll("[data-skill-filter]").forEach((entry) => entry.classList.remove("is-active"));
      button.classList.add("is-active");
      renderSkills();
    });
  });
  document.querySelectorAll("[data-roll-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      currentRollMode = Number(button.dataset.rollMode);
      syncRollModeButtons();
      showToast(`检定模式：${button.textContent.trim()}`);
    });
  });
  document.querySelectorAll("[data-delete-mode-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!isEditMode) return;
      setDeleteMode(!deleteMode);
    });
  });

  nodes.editModeButton.addEventListener("click", () => setEditMode(!isEditMode));
  document.querySelector("#recalcButton").addEventListener("click", recalcDerived);
  document.querySelector("#resetButton").addEventListener("click", resetCharacter);
  document.querySelector("#customRollButton").addEventListener("click", () => rollDice(nodes.customDice.value));
  document.querySelector("#addSkillButton").addEventListener("click", addSkill);
  document.querySelector("#addClueButton").addEventListener("click", () => addListItem("clues"));
  document.querySelector("#addItemButton").addEventListener("click", () => addListItem("inventory"));
  document.querySelector("#addLoreButton").addEventListener("click", () => addListItem("lore"));
  document.querySelector("#addLogButton").addEventListener("click", () => addLog());
  document.querySelector("#exportButton").addEventListener("click", exportBackup);
  document.querySelector("#importInput").addEventListener("change", (event) => importBackup(event.target.files[0]));
  document.querySelector("#clearButton").addEventListener("click", clearLocalData);
}

function clampNumber(value, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return min;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

function showToast(message) {
  nodes.toast.textContent = message;
  nodes.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => nodes.toast.classList.remove("is-visible"), 2800);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js?v=10").catch(() => {});
  });
}

bindEvents();
render();
saveState("已准备好");
