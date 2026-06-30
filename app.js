const SUPABASE_URL = "https://iovqxqivtkbrtgtbnwdw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_axV4_pCMxkusWi2EJ95LiA_Y_U8T8en";
const COLLECTION_TABLE = "sticker_collections";
const AUTH_EMAIL_DOMAIN = "figurinhas.app";

const teams = [
  { name: "FWC - Especiais", code: "FWC", flag: "🏆", icon: "🏆", special: true },
  { name: "México", code: "MEX", flag: "🇲🇽" },
  { name: "África do Sul", code: "RSA", flag: "🇿🇦" },
  { name: "Coreia do Sul", code: "KOR", flag: "🇰🇷" },
  { name: "Rep. Tcheca", code: "CZE", flag: "🇨🇿" },
  { name: "Canadá", code: "CAN", flag: "🇨🇦" },
  { name: "Bósnia", code: "BIH", flag: "🇧🇦" },
  { name: "Catar", code: "QAT", flag: "🇶🇦" },
  { name: "Suíça", code: "SUI", flag: "🇨🇭" },
  { name: "Brasil", code: "BRA", flag: "🇧🇷" },
  { name: "Marrocos", code: "MAR", flag: "🇲🇦" },
  { name: "Haiti", code: "HAI", flag: "🇭🇹" },
  { name: "Escócia", code: "SCO", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}" },
  { name: "Estados Unidos", code: "USA", flag: "🇺🇸" },
  { name: "Paraguai", code: "PAR", flag: "🇵🇾" },
  { name: "Austrália", code: "AUS", flag: "🇦🇺" },
  { name: "Turquia", code: "TUR", flag: "🇹🇷" },
  { name: "Alemanha", code: "GER", flag: "🇩🇪" },
  { name: "Curaçao", code: "CUW", flag: "🇨🇼" },
  { name: "Costa do Marfim", code: "CIV", flag: "🇨🇮" },
  { name: "Equador", code: "ECU", flag: "🇪🇨" },
  { name: "Holanda", code: "NED", flag: "🇳🇱" },
  { name: "Japão", code: "JPN", flag: "🇯🇵" },
  { name: "Suécia", code: "SWE", flag: "🇸🇪" },
  { name: "Tunísia", code: "TUN", flag: "🇹🇳" },
  { name: "Bélgica", code: "BEL", flag: "🇧🇪" },
  { name: "Egito", code: "EGY", flag: "🇪🇬" },
  { name: "Irã", code: "IRN", flag: "🇮🇷" },
  { name: "Nova Zelândia", code: "NZL", flag: "🇳🇿" },
  { name: "Espanha", code: "ESP", flag: "🇪🇸" },
  { name: "Cabo Verde", code: "CPV", flag: "🇨🇻" },
  { name: "Arábia Saudita", code: "KSA", flag: "🇸🇦" },
  { name: "Uruguai", code: "URU", flag: "🇺🇾" },
  { name: "França", code: "FRA", flag: "🇫🇷" },
  { name: "Senegal", code: "SEN", flag: "🇸🇳" },
  { name: "Iraque", code: "IRQ", flag: "🇮🇶" },
  { name: "Noruega", code: "NOR", flag: "🇳🇴" },
  { name: "Argentina", code: "ARG", flag: "🇦🇷" },
  { name: "Argélia", code: "ALG", flag: "🇩🇿" },
  { name: "Áustria", code: "AUT", flag: "🇦🇹" },
  { name: "Jordânia", code: "JOR", flag: "🇯🇴" },
  { name: "Portugal", code: "POR", flag: "🇵🇹" },
  { name: "Congo", code: "COD", flag: "🇨🇩" },
  { name: "Uzbequistão", code: "UZB", flag: "🇺🇿" },
  { name: "Colômbia", code: "COL", flag: "🇨🇴" },
  { name: "Inglaterra", code: "ENG", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}" },
  { name: "Croácia", code: "CRO", flag: "🇭🇷" },
  { name: "Gana", code: "GHA", flag: "🇬🇭" },
  { name: "Panamá", code: "PAN", flag: "🇵🇦" },
];

const stickerNumbers = Array.from({ length: 20 }, (_, index) => index + 1);
const specialStickerNumbers = Array.from({ length: 20 }, (_, index) => index);
const storageKey = "figurinhas-faltantes-copa-2026";
const fileName = "figurinhas-faltantes-copa-2026.txt";
const flagImageCodes = {
  MEX: "mx",
  RSA: "za",
  KOR: "kr",
  CZE: "cz",
  CAN: "ca",
  BIH: "ba",
  QAT: "qa",
  SUI: "ch",
  BRA: "br",
  MAR: "ma",
  HAI: "ht",
  SCO: "gb-sct",
  USA: "us",
  PAR: "py",
  AUS: "au",
  TUR: "tr",
  GER: "de",
  CUW: "cw",
  CIV: "ci",
  ECU: "ec",
  NED: "nl",
  JPN: "jp",
  SWE: "se",
  TUN: "tn",
  BEL: "be",
  EGY: "eg",
  IRN: "ir",
  NZL: "nz",
  ESP: "es",
  CPV: "cv",
  KSA: "sa",
  URU: "uy",
  FRA: "fr",
  SEN: "sn",
  IRQ: "iq",
  NOR: "no",
  ARG: "ar",
  ALG: "dz",
  AUT: "at",
  JOR: "jo",
  POR: "pt",
  COD: "cd",
  UZB: "uz",
  COL: "co",
  ENG: "gb-eng",
  CRO: "hr",
  GHA: "gh",
  PAN: "pa",
};
const localFlagImages = {
  SCO: "./icons/flag-scotland.png",
  ENG: "./icons/flag-england.png",
};

function getStickerNumbers(team) {
  return team.special ? specialStickerNumbers : stickerNumbers;
}

function formatStickerNumber(team, number) {
  return team.special && number === 0 ? "00" : String(number);
}

const dom = {
  authShell: document.querySelector("#authShell"),
  appShell: document.querySelector("#appShell"),
  actionBar: document.querySelector("#actionBar"),
  authForm: document.querySelector("#authForm"),
  authUsername: document.querySelector("#authUsername"),
  authPassword: document.querySelector("#authPassword"),
  passwordToggle: document.querySelector("#passwordToggle"),
  authStatus: document.querySelector("#authStatus"),
  userEmail: document.querySelector("#userEmail"),
  syncStatus: document.querySelector("#syncStatus"),
  logoutButton: document.querySelector("#logoutButton"),
  searchInput: document.querySelector("#searchInput"),
  filterInputs: document.querySelectorAll("[name='stickerFilter']"),
  sortInputs: document.querySelectorAll("[name='teamSort']"),
  totalMissingCount: document.querySelector("#totalMissingCount"),
  totalMissingLabel: document.querySelector("#totalMissingLabel"),
  teamsList: document.querySelector("#teamsList"),
  albumScanButton: document.querySelector("#albumScanButton"),
  exportButton: document.querySelector("#exportButton"),
  clearButton: document.querySelector("#clearButton"),
  emptyExportNote: document.querySelector("#emptyExportNote"),
  exportModal: document.querySelector("#exportModal"),
  exportTitle: document.querySelector("#exportTitle"),
  closeExportButton: document.querySelector("#closeExportButton"),
  exportText: document.querySelector("#exportText"),
  copyButton: document.querySelector("#copyButton"),
  shareButton: document.querySelector("#shareButton"),
  downloadButton: document.querySelector("#downloadButton"),
  scannerModal: document.querySelector("#scannerModal"),
  scannerTitle: document.querySelector("#scannerTitle"),
  closeScannerButton: document.querySelector("#closeScannerButton"),
  closeScannerSecondaryButton: document.querySelector("#closeScannerSecondaryButton"),
  scannerVideo: document.querySelector("#scannerVideo"),
  scannerCanvas: document.querySelector("#scannerCanvas"),
  scannerStatus: document.querySelector("#scannerStatus"),
  scannerResults: document.querySelector("#scannerResults"),
  scanCaptureButton: document.querySelector("#scanCaptureButton"),
  toast: document.querySelector("#toast"),
};

let missing = {};
let searchQuery = "";
let stickerFilter = "all";
let teamSort = "album";
let expandedTeamCode = Object.keys(missing)[0] || "";
let toastTimer;
let syncTimer;
let currentUser = null;
let supabaseClient = null;
let scannerStream = null;
let scannerBusy = false;
let ocrScriptPromise = null;
let ocrWorkerPromise = null;
let activeExportText = "";
let activeExportTitle = "Figurinhas Faltantes - Copa 2026";
let activeExportFileName = fileName;

function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

function getLocalStorageKey() {
  return currentUser?.id ? `${storageKey}:${currentUser.id}` : storageKey;
}

function normalizeUsername(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

function isValidUsername(username) {
  return /^[a-z0-9._-]{3,32}$/.test(username);
}

function getAuthEmail(username) {
  return `${username}@${AUTH_EMAIL_DOMAIN}`;
}

function getDisplayUsername(user) {
  return user?.user_metadata?.username || user?.email?.split("@")[0] || "Conta conectada";
}

function setAuthStatus(message) {
  dom.authStatus.textContent = message || "";
}

function getFriendlyAuthError(error) {
  const message = error?.message || "";
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("email not confirmed")) {
    return "A confirmacao de e-mail esta ativa no Supabase. Desative em Authentication > Sign In / Providers > Email para usar apenas usuario e senha.";
  }

  if (normalizedMessage.includes("invalid login credentials")) {
    return "Usuario ou senha incorretos.";
  }

  if (normalizedMessage.includes("already registered") || normalizedMessage.includes("already exists")) {
    return "Esse usuario ja existe. Use Entrar com o mesmo usuario e senha.";
  }

  if (normalizedMessage.includes("password")) {
    return "Confira a senha. Ela precisa seguir as regras configuradas no Supabase.";
  }

  return message || "Nao foi possivel entrar agora.";
}

function setSyncStatus(message) {
  dom.syncStatus.textContent = message || "";
}

function setAuthFormDisabled(disabled) {
  dom.authForm
    .querySelectorAll("input, button")
    .forEach((element) => {
      element.disabled = disabled;
    });
}

function togglePasswordVisibility() {
  const isPasswordHidden = dom.authPassword.type === "password";

  dom.authPassword.type = isPasswordHidden ? "text" : "password";
  dom.passwordToggle.classList.toggle("is-visible", isPasswordHidden);
  dom.passwordToggle.setAttribute("aria-label", isPasswordHidden ? "Ocultar senha" : "Mostrar senha");
}

function showAuth() {
  dom.authShell.hidden = false;
  dom.appShell.hidden = true;
  dom.actionBar.hidden = true;
  document.body.classList.remove("is-app-ready");
  dom.authUsername.focus();
}

function showApp() {
  dom.authShell.hidden = true;
  dom.appShell.hidden = false;
  dom.actionBar.hidden = false;
  document.body.classList.add("is-app-ready");
}

function initializeSupabase() {
  if (!isSupabaseConfigured()) {
    setAuthStatus("Configure SUPABASE_URL e SUPABASE_ANON_KEY no app.js.");
    setAuthFormDisabled(true);
    showAuth();
    return false;
  }

  if (!window.supabase?.createClient) {
    setAuthStatus("Não foi possível carregar o Supabase.");
    setAuthFormDisabled(true);
    showAuth();
    return false;
  }

  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return true;
}

async function loadCloudCollection() {
  if (!supabaseClient || !currentUser) {
    missing = loadMissing();
    return;
  }

  setSyncStatus("Carregando dados");

  const { data, error } = await supabaseClient
    .from(COLLECTION_TABLE)
    .select("data")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (error) {
    missing = loadMissing();
    setSyncStatus("Dados locais");
    showToast("Não foi possível carregar do Supabase.");
    return;
  }

  missing = sanitizeMissing(data?.data || {});
  expandedTeamCode = Object.keys(missing)[0] || "";
  saveLocalMissing();
  setSyncStatus("Dados salvos");
}

async function saveCloudCollection() {
  if (!supabaseClient || !currentUser) {
    return;
  }

  setSyncStatus("Salvando");

  const { error } = await supabaseClient.from(COLLECTION_TABLE).upsert(
    {
      user_id: currentUser.id,
      data: missing,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );

  if (error) {
    setSyncStatus("Pendente");
    showToast("Não foi possível salvar no Supabase agora.");
    return;
  }

  setSyncStatus("Dados salvos");
}

function scheduleCloudSave() {
  if (!currentUser || !supabaseClient) {
    return;
  }

  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(() => {
    saveCloudCollection();
  }, 450);
}

async function startUserSession(user) {
  currentUser = user;
  dom.userEmail.textContent = getDisplayUsername(user);
  showApp();
  await loadCloudCollection();
  render();
}

async function handleAuthSubmit(event) {
  event.preventDefault();

  if (!supabaseClient) {
    setAuthStatus("Supabase não configurado.");
    return;
  }

  const action = event.submitter?.dataset.authAction || "login";
  const username = normalizeUsername(dom.authUsername.value);
  const password = dom.authPassword.value;

  if (!isValidUsername(username)) {
    setAuthStatus("Use 3 a 32 caracteres: letras, números, ponto, hífen ou underline.");
    dom.authUsername.focus();
    return;
  }

  setAuthFormDisabled(true);
  setAuthStatus(action === "signup" ? "Criando conta..." : "Entrando...");

  const email = getAuthEmail(username);
  const authCall =
    action === "signup"
      ? supabaseClient.auth.signUp({
          email,
          password,
          options: { data: { username } },
        })
      : supabaseClient.auth.signInWithPassword({ email, password });
  const { data, error } = await authCall;

  setAuthFormDisabled(false);

  if (error) {
    setAuthStatus(getFriendlyAuthError(error));
    return;
  }

  if (data.session?.user) {
    setAuthStatus("");
    await startUserSession(data.session.user);
    return;
  }

  setAuthStatus("Conta criada, mas o Supabase esta pedindo confirmacao de e-mail. Desative essa confirmacao ou confirme o usuario em Authentication > Users.");
}

async function handleLogout() {
  if (!dom.scannerModal.hidden) {
    closeScanner();
  }

  if (supabaseClient) {
    await supabaseClient.auth.signOut();
  }

  currentUser = null;
  missing = {};
  expandedTeamCode = "";
  setSyncStatus("");
  showAuth();
}

async function initializeApp() {
  if (!initializeSupabase()) {
    return;
  }

  const { data } = await supabaseClient.auth.getSession();

  if (data.session?.user) {
    await startUserSession(data.session.user);
    return;
  }

  showAuth();
}

function loadMissing() {
  try {
    const stored = window.localStorage.getItem(getLocalStorageKey());
    return sanitizeMissing(stored ? JSON.parse(stored) : {});
  } catch {
    return {};
  }
}

function sanitizeMissing(value) {
  if (!value || typeof value !== "object") {
    return {};
  }

  const teamByCode = new Map(teams.map((team) => [team.code, team]));
  const clean = {};

  Object.entries(value).forEach(([code, numbers]) => {
    const team = teamByCode.get(code);

    if (!team || !Array.isArray(numbers)) {
      return;
    }

    const allowedNumbers = new Set(getStickerNumbers(team));
    const sortedNumbers = [...new Set(numbers.map(Number))]
      .filter((number) => Number.isInteger(number) && allowedNumbers.has(number))
      .sort((first, second) => first - second);

    if (sortedNumbers.length > 0) {
      clean[code] = sortedNumbers;
    }
  });

  return clean;
}

function saveLocalMissing() {
  window.localStorage.setItem(getLocalStorageKey(), JSON.stringify(missing));
}

function saveMissing() {
  saveLocalMissing();
  scheduleCloudSave();
}

function getSelectedNumbers(code) {
  return missing[code] || [];
}

function setSelectedNumbers(code, numbers) {
  const sortedNumbers = [...new Set(numbers)].sort((first, second) => first - second);

  if (sortedNumbers.length > 0) {
    missing[code] = sortedNumbers;
  } else {
    delete missing[code];
  }

  saveMissing();
}

function toggleSticker(code, number) {
  const selected = new Set(getSelectedNumbers(code));

  if (selected.has(number)) {
    selected.delete(number);
  } else {
    selected.add(number);
  }

  setSelectedNumbers(code, [...selected]);
  render();
}

function completeMissingSticker(button) {
  const code = button.dataset.code;
  const number = Number(button.dataset.number);

  button.classList.add("is-leaving");
  button.disabled = true;

  window.setTimeout(() => {
    const selected = new Set(getSelectedNumbers(code));
    selected.add(number);
    setSelectedNumbers(code, [...selected]);
    render();
  }, 190);
}

function toggleTeamExpansion(code) {
  expandedTeamCode = expandedTeamCode === code ? "" : code;
  renderTeams();
}

function formatNumberList(team, numbers) {
  return numbers.map((number) => formatStickerNumber(team, number)).join(", ");
}

function getTeamByCode(code) {
  return teams.find((team) => team.code === code);
}

function getMissingNumbers(team) {
  const selectedSet = new Set(getSelectedNumbers(team.code));
  return getStickerNumbers(team).filter((number) => !selectedSet.has(number));
}

function setScannerStatus(message) {
  dom.scannerStatus.textContent = message || "";
}

function setScannerResults(html = "") {
  dom.scannerResults.innerHTML = html;
}

function setScannerBusy(isBusy) {
  scannerBusy = isBusy;
  dom.scanCaptureButton.disabled = isBusy;
}

function loadOcrScript() {
  if (window.Tesseract?.createWorker) {
    return Promise.resolve();
  }

  if (!ocrScriptPromise) {
    ocrScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("ocr-load-failed"));
      document.head.appendChild(script);
    });
  }

  return ocrScriptPromise;
}

async function getOcrWorker() {
  await loadOcrScript();

  if (!ocrWorkerPromise) {
    ocrWorkerPromise = window.Tesseract.createWorker("eng").then(async (worker) => {
      if (typeof worker.setParameters === "function") {
        await worker.setParameters({
          tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        });
      }

      return worker;
    });
  }

  return ocrWorkerPromise;
}

function prepareScannerCanvas() {
  const video = dom.scannerVideo;
  const canvas = dom.scannerCanvas;
  const sourceWidth = video.videoWidth;
  const sourceHeight = video.videoHeight;

  if (!sourceWidth || !sourceHeight) {
    return false;
  }

  const cropWidth = Math.round(sourceWidth * 0.72);
  const cropHeight = Math.round(sourceHeight * 0.38);
  const cropX = Math.round((sourceWidth - cropWidth) / 2);
  const cropY = Math.round((sourceHeight - cropHeight) / 2);
  const scale = 1.8;

  canvas.width = Math.round(cropWidth * scale);
  canvas.height = Math.round(cropHeight * scale);

  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.imageSmoothingEnabled = true;
  context.drawImage(
    video,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    canvas.width,
    canvas.height,
  );

  return true;
}

function extractScannedSticker(text) {
  const normalizedText = text.replace(/[oO]/g, "0").replace(/[iIl|]/g, "1");
  const searchableText = normalizeText(normalizedText).toUpperCase();
  const matchedTeam = teams.find((team) => searchableText.includes(team.code));
  const numberTokens = normalizedText.match(/\d+/g) || [];
  const allNumbers = [];

  numberTokens.forEach((token) => {
    if (token.length > 2) {
      return;
    }

    const number = Number(token);

    if (Number.isInteger(number) && number >= 0 && number <= 20) {
      allNumbers.push(number);
    }
  });

  const uniqueNumbers = [...new Set(allNumbers)];

  if (!matchedTeam) {
    return {
      team: null,
      numbers: uniqueNumbers.filter((number) =>
        teams.some((team) => getStickerNumbers(team).includes(number)),
      ),
      text: searchableText,
    };
  }

  const allowedNumbers = new Set(getStickerNumbers(matchedTeam));

  return {
    team: matchedTeam,
    numbers: uniqueNumbers.filter((number) => allowedNumbers.has(number)),
    text: searchableText,
  };
}

function registerScannedSticker(team, number) {
  const selected = new Set(getSelectedNumbers(team.code));
  const label = formatStickerNumber(team, number);

  if (selected.has(number)) {
    const message = `${team.code} ${label}: voce ja tem essa figurinha.`;
    setScannerStatus(message);
    showToast(message);
    return;
  }

  selected.add(number);
  setSelectedNumbers(team.code, [...selected]);
  render();

  const message = `${team.code} ${label}: voce nao tinha. Marquei como tenho.`;
  setScannerStatus(message);
  showToast(message);
}

function showScannerTeamChoices(number) {
  const candidateTeams = teams.filter((team) => getStickerNumbers(team).includes(number));
  const label = String(number).padStart(number === 0 ? 2 : 1, "0");

  if (candidateTeams.length === 0) {
    setScannerStatus(`Numero ${label} nao existe no album.`);
    setScannerResults("");
    return;
  }

  setScannerStatus(`Numero ${label} encontrado. Escolha a selecao para conferir ou marcar.`);
  setScannerResults(
    candidateTeams
      .map((team) => {
        const selected = getSelectedNumbers(team.code).includes(number);
        return `
          <button
            class="scanner-choice${selected ? " is-owned" : ""}"
            type="button"
            data-scanner-choice-code="${team.code}"
            data-scanner-choice-number="${number}"
          >
            <span>
              <strong>${team.code}</strong>
              ${team.name}
            </span>
            <em>${selected ? "Tenho" : "Nao tenho"}</em>
          </button>
        `;
      })
      .join(""),
  );
}

async function openScanner() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("Camera nao disponivel neste navegador.");
    return;
  }

  dom.scannerTitle.textContent = "Escanear album";
  setScannerStatus("Aponte para o codigo e numero da figurinha, como BRA 8. Se ler so o numero, eu mostro as selecoes.");
  setScannerResults("");
  dom.scannerModal.hidden = false;
  document.body.classList.add("modal-open");

  try {
    scannerStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });

    dom.scannerVideo.srcObject = scannerStream;
    await dom.scannerVideo.play();
  } catch {
    setScannerStatus("Nao foi possivel abrir a camera. Use HTTPS e permita o acesso.");
  }
}

function closeScanner() {
  if (scannerStream) {
    scannerStream.getTracks().forEach((track) => track.stop());
  }

  scannerStream = null;
  setScannerBusy(false);
  setScannerResults("");
  dom.scannerVideo.srcObject = null;
  dom.scannerModal.hidden = true;
  document.body.classList.remove("modal-open");
}

async function scanStickerNumber() {
  if (scannerBusy) {
    return;
  }

  if (!prepareScannerCanvas()) {
    setScannerStatus("A camera ainda esta carregando. Tente de novo em instantes.");
    return;
  }

  setScannerBusy(true);
  setScannerStatus("Lendo numero...");
  setScannerResults("");

  try {
    const worker = await getOcrWorker();
    const result = await worker.recognize(dom.scannerCanvas);
    const scanned = extractScannedSticker(result?.data?.text || "");

    if (dom.scannerModal.hidden) {
      return;
    }

    if (scanned.numbers.length === 0) {
      setScannerStatus("Nao consegui identificar um numero valido. Aproxime e tente novamente.");
      return;
    }

    if (scanned.numbers.length > 1) {
      setScannerStatus(`Encontrei ${scanned.numbers.join(", ")}. Aponte para apenas uma figurinha.`);
      return;
    }

    const [number] = scanned.numbers;

    if (scanned.team) {
      registerScannedSticker(scanned.team, number);
      return;
    }

    showScannerTeamChoices(number);
  } catch {
    setScannerStatus("Nao foi possivel ler o numero agora. Tente novamente.");
  } finally {
    setScannerBusy(false);
  }
}

function addBulkNumbers(form) {
  const code = form.dataset.bulkCode;
  const team = teams.find((currentTeam) => currentTeam.code === code);
  const input = form.elements.numbers;
  const value = input?.value || "";

  if (!team || !input) {
    return;
  }

  const parsed = parseBulkNumbers(team, value);
  const validNumbers = [...parsed.valid].sort((first, second) => first - second);
  const invalidNumbers = [...parsed.invalid].sort((first, second) => first - second);

  if (validNumbers.length === 0 && invalidNumbers.length === 0) {
    showToast("Digite pelo menos um número.");
    input.focus();
    return;
  }

  const selected = new Set(getSelectedNumbers(code));
  const addedNumbers = validNumbers.filter((number) => !selected.has(number));

  validNumbers.forEach((number) => selected.add(number));

  if (addedNumbers.length > 0) {
    expandedTeamCode = code;
    setSelectedNumbers(code, [...selected]);
    render();

    const plural = addedNumbers.length === 1 ? "" : "s";
    const invalidText =
      invalidNumbers.length > 0
        ? ` Fora da lista: ${formatNumberList(team, invalidNumbers)}.`
        : "";
    showToast(`${addedNumbers.length} figurinha${plural} adicionada${plural}.${invalidText}`);
    return;
  }

  if (invalidNumbers.length > 0 && validNumbers.length === 0) {
    showToast(`Fora da lista: ${formatNumberList(team, invalidNumbers)}.`);
    input.focus();
    return;
  }

  showToast("Essas figurinhas já estavam marcadas.");
  input.focus();
}

function getTotals() {
  return teams.reduce(
    (totals, team) => {
      const ownedCount = getSelectedNumbers(team.code).length;
      const totalCount = getStickerNumbers(team).length;

      totals.owned += ownedCount;
      totals.missing += totalCount - ownedCount;
      totals.total += totalCount;

      if (ownedCount > 0) {
        totals.teams += 1;
      }

      return totals;
    },
    { owned: 0, missing: 0, total: 0, teams: 0 },
  );
}

function getTeamStickerCounts(team) {
  const owned = getSelectedNumbers(team.code).length;
  const total = getStickerNumbers(team).length;

  return {
    owned,
    missing: total - owned,
    total,
  };
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getVisibleTeams() {
  const normalizedQuery = normalizeText(searchQuery);

  const visibleTeams = teams.filter((team) => {
    const counts = getTeamStickerCounts(team);
    const matchesStickerFilter =
      stickerFilter === "all" ||
      (stickerFilter === "owned" && counts.owned > 0) ||
      (stickerFilter === "missing" && counts.missing > 0);
    const searchableText = normalizeText(`${team.name} ${team.code}`);
    const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);

    return matchesStickerFilter && matchesSearch;
  });

  if (teamSort !== "alpha") {
    return visibleTeams;
  }

  return [...visibleTeams].sort((firstTeam, secondTeam) =>
    firstTeam.name.localeCompare(secondTeam.name, "pt-BR", { sensitivity: "base" }),
  );
}

function getExportText() {
  const lines = teams
    .map((team) => {
      const numbers = getMissingNumbers(team);
      return numbers.length > 0 ? `${team.code} ${team.flag}: ${formatNumberList(team, numbers)}` : "";
    })
    .filter(Boolean);

  return lines.length > 0 ? `Faltantes\n\n${lines.join("\n")}` : "";
}

function getTeamExportText(team) {
  const numbers = getMissingNumbers(team);

  if (numbers.length === 0) {
    return "";
  }

  return `Faltantes - ${team.name}\n\n${team.code} ${team.flag}: ${formatNumberList(team, numbers)}`;
}

function getFlagImageUrl(team) {
  if (localFlagImages[team.code]) {
    return localFlagImages[team.code];
  }

  return `https://flagcdn.com/w80/${flagImageCodes[team.code]}.png`;
}

function renderTeamVisual(team) {
  if (team.icon) {
    return `<span class="team-flag team-symbol" aria-hidden="true">${team.icon}</span>`;
  }

  const flagImageUrl = getFlagImageUrl(team);

  return `
    <span class="team-flag" aria-hidden="true">
      <img
        class="team-flag-img"
        src="${flagImageUrl}"
        alt=""
        width="40"
        height="30"
        loading="lazy"
      />
    </span>
  `;
}

function renderStats() {
  const totals = getTotals();
  dom.totalMissingCount.textContent = String(totals.missing);
  dom.totalMissingLabel.textContent =
    totals.missing === 1 ? "figurinha faltante" : "figurinhas faltantes";
  dom.exportButton.disabled = totals.missing === 0;
  dom.exportButton.setAttribute("aria-disabled", totals.missing === 0 ? "true" : "false");
  dom.emptyExportNote.hidden = totals.missing !== 0;
}

function renderTeams() {
  const visibleTeams = getVisibleTeams();

  if (visibleTeams.length === 0) {
    dom.teamsList.innerHTML = `
      <article class="empty-state">
        <h2>Nada encontrado</h2>
        <p>Ajuste a busca ou escolha outro filtro.</p>
      </article>
    `;
    return;
  }

  dom.teamsList.innerHTML = visibleTeams.map(renderTeamCard).join("");
}

function renderTeamCard(team) {
  const selectedNumbers = getSelectedNumbers(team.code);
  const selectedSet = new Set(selectedNumbers);
  const allStickers = getStickerNumbers(team);
  const stickerList =
    stickerFilter === "owned"
      ? selectedNumbers
      : stickerFilter === "missing"
        ? allStickers.filter((number) => !selectedSet.has(number))
        : allStickers;
  const counts = getTeamStickerCounts(team);
  const expanded = expandedTeamCode === team.code;
  const stickerListId = `stickers-${team.code}`;

  return `
    <article class="team-card${expanded ? " is-expanded" : ""}">
      <header class="team-header">
        <button
          class="team-toggle"
          type="button"
          data-expand-code="${team.code}"
          aria-expanded="${expanded ? "true" : "false"}"
          aria-controls="${stickerListId}"
          aria-label="${expanded ? "Recolher" : "Ampliar"} ${team.name}"
        >
          <div class="team-identity">
            ${renderTeamVisual(team)}
            <div>
              <h2>${team.name}</h2>
              <p>${team.code} · ${counts.missing} faltante${counts.missing === 1 ? "" : "s"}</p>
            </div>
          </div>
          <span class="expand-indicator" aria-hidden="true">${expanded ? "-" : "+"}</span>
        </button>
      </header>

      <form
        class="bulk-add-form"
        data-bulk-code="${team.code}"
        ${expanded && stickerFilter === "all" ? "" : "hidden"}
      >
        <label class="bulk-add-label" for="bulkNumbers-${team.code}">Adicionar números</label>
        <div class="bulk-add-row">
          <input
            class="bulk-add-input"
            id="bulkNumbers-${team.code}"
            name="numbers"
            type="text"
            inputmode="numeric"
            autocomplete="off"
            placeholder="${team.special ? "Ex: 00, 4, 12" : "Ex: 8, 17, 20"}"
          />
          <button class="bulk-add-button" type="submit">Adicionar</button>
        </div>
      </form>

      <div class="team-share-actions" ${expanded ? "" : "hidden"}>
        <button
          class="team-share-button"
          type="button"
          data-share-code="${team.code}"
        >
          Compartilhar seleção
        </button>
      </div>

      <div
        class="number-grid"
        id="${stickerListId}"
        aria-label="Figurinhas faltantes de ${team.name}"
        ${expanded ? "" : "hidden"}
      >
        ${stickerList
          .map((number) => {
            const selected = selectedSet.has(number);
            const label = formatStickerNumber(team, number);
            return `
              <button
                class="sticker-button${selected ? " is-selected" : ""}"
                type="button"
                data-code="${team.code}"
                data-number="${number}"
                aria-pressed="${selected ? "true" : "false"}"
                aria-label="${team.name}, figurinha ${label}${selected ? " marcada como tenho" : " marcada como não tenho"}"
              >
                <span class="sticker-number">${label}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function render() {
  renderStats();
  renderTeams();
}

function openExportModal(text = getExportText(), options = {}) {

  if (!text) {
    showToast(options.emptyMessage || "Nenhuma figurinha faltante para exportar.");
    return;
  }

  activeExportText = text;
  activeExportTitle = options.title || "Figurinhas Faltantes - Copa 2026";
  activeExportFileName = options.fileName || fileName;
  dom.exportTitle.textContent = options.modalTitle || "Texto exportado";
  dom.exportText.value = text;
  dom.shareButton.disabled = typeof navigator.share !== "function";
  dom.exportModal.hidden = false;
  document.body.classList.add("modal-open");
  dom.copyButton.focus();
}

function closeExportModal() {
  dom.exportModal.hidden = true;
  document.body.classList.remove("modal-open");
  dom.exportButton.focus();
}

async function copyExportText() {
  const text = activeExportText || getExportText();

  try {
    await navigator.clipboard.writeText(text);
    showToast("Texto copiado.");
  } catch {
    fallbackCopy(text);
    showToast("Texto copiado.");
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function shareExportText() {
  const text = activeExportText || getExportText();

  if (typeof navigator.share !== "function") {
    showToast("Compartilhamento não suportado neste navegador.");
    return;
  }

  try {
    await navigator.share({
      title: activeExportTitle,
      text,
    });
  } catch (error) {
    if (error?.name !== "AbortError") {
      showToast("Não foi possível compartilhar agora.");
    }
  }
}

function downloadExportText() {
  const text = activeExportText || getExportText();
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = activeExportFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Arquivo .txt baixado.");
}

function openTeamExport(code) {
  const team = teams.find((currentTeam) => currentTeam.code === code);

  if (!team) {
    return;
  }

  openExportModal(getTeamExportText(team), {
    emptyMessage: `${team.name} não tem figurinhas faltantes.`,
    fileName: `figurinhas-faltantes-${team.code.toLowerCase()}-copa-2026.txt`,
    modalTitle: `Faltantes do ${team.name}`,
    title: `Faltantes do ${team.name} - Copa 2026`,
  });
}

function clearMarks() {
  const totals = getTotals();

  if (totals.owned === 0) {
    showToast("Nenhuma marcação para limpar.");
    return;
  }

  const confirmed = window.confirm("Tem certeza que deseja apagar todas as marcações?");

  if (!confirmed) {
    return;
  }

  missing = {};
  expandedTeamCode = "";
  saveMissing();
  render();
  showToast("Marcações limpas.");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    dom.toast.hidden = true;
  }, 2400);
}

dom.searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderTeams();
});

dom.filterInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!event.target.checked) {
      return;
    }

    stickerFilter = event.target.value;
    renderTeams();
  });
});

dom.sortInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!event.target.checked) {
      return;
    }

    teamSort = event.target.value;
    renderTeams();
  });
});

dom.teamsList.addEventListener("click", (event) => {
  const expandButton = event.target.closest("[data-expand-code]");

  if (expandButton) {
    toggleTeamExpansion(expandButton.dataset.expandCode);
    return;
  }

  const shareButton = event.target.closest("[data-share-code]");

  if (shareButton) {
    openTeamExport(shareButton.dataset.shareCode);
    return;
  }

  const button = event.target.closest("[data-code][data-number]");

  if (!button) {
    return;
  }

  if (stickerFilter === "missing" && button.getAttribute("aria-pressed") === "false") {
    completeMissingSticker(button);
    return;
  }

  toggleSticker(button.dataset.code, Number(button.dataset.number));
});

dom.teamsList.addEventListener(
  "error",
  (event) => {
    const image = event.target;

    if (!image?.classList?.contains("team-flag-img")) {
      return;
    }

    const identity = image.closest(".team-identity");
    image.closest(".team-flag")?.remove();
    identity?.classList.add("without-flag");
  },
  true,
);

dom.albumScanButton.addEventListener("click", openScanner);
dom.exportButton.addEventListener("click", () => openExportModal());
dom.clearButton.addEventListener("click", clearMarks);
dom.closeExportButton.addEventListener("click", closeExportModal);
dom.copyButton.addEventListener("click", copyExportText);
dom.shareButton.addEventListener("click", shareExportText);
dom.downloadButton.addEventListener("click", downloadExportText);
dom.scanCaptureButton.addEventListener("click", scanStickerNumber);
dom.closeScannerButton.addEventListener("click", closeScanner);
dom.closeScannerSecondaryButton.addEventListener("click", closeScanner);
dom.passwordToggle.addEventListener("click", togglePasswordVisibility);
dom.authForm.addEventListener("submit", handleAuthSubmit);
dom.logoutButton.addEventListener("click", handleLogout);

dom.exportModal.addEventListener("click", (event) => {
  if (event.target === dom.exportModal) {
    closeExportModal();
  }
});

dom.scannerModal.addEventListener("click", (event) => {
  const choiceButton = event.target.closest("[data-scanner-choice-code]");

  if (choiceButton) {
    const team = getTeamByCode(choiceButton.dataset.scannerChoiceCode);
    const number = Number(choiceButton.dataset.scannerChoiceNumber);

    if (team && Number.isInteger(number)) {
      registerScannedSticker(team, number);
      showScannerTeamChoices(number);
    }

    return;
  }

  if (event.target === dom.scannerModal) {
    closeScanner();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dom.scannerModal.hidden) {
    closeScanner();
    return;
  }

  if (event.key === "Escape" && !dom.exportModal.hidden) {
    closeExportModal();
  }
});

initializeApp();
