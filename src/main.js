import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="logo-group">
      <div class="logo-badge">N</div>
      <span>Nexus<span style="color: var(--accent-primary)">Pro</span></span>
    </div>
    <ul class="nav-links">
      <li><a href="#features">Özellikler</a></li>
      <li><a href="#metrics">Metrikler</a></li>
      <li><a href="#workflow">İş Akışı</a></li>
    </ul>
    <div class="nav-actions">
      <button id="cta-header-btn" class="btn btn-secondary">Dokümanlar</button>
      <button id="live-branch-btn" class="btn btn-primary">Branch: v1.0.0 (main)</button>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <header class="hero">
    <div class="pill-badge">
      <span class="pill-dot"></span>
      <span>Canlı Versiyon Kontrol Simülatörü</span>
    </div>
    <h1>Profesyonel Ekipler İçin <br/><span class="gradient">Modern Git İş Akışı</span></h1>
    <p class="hero-description">
      Bu web sitesi, Git dalları (branches), merge işlemleri ve GitHub Pull Request kültürünü
      canlı olarak test edip pratik yapabileceğin interaktif çalışma ortamındır.
    </p>
    <div class="hero-cta">
      <button id="explore-btn" class="btn btn-primary">
        🚀 Testi Başlat
      </button>
      <button id="counter-btn" class="btn btn-secondary">
        ⚡ Tıklama Sayacı: <span id="count-value" style="font-weight:700; margin-left:4px;">0</span>
      </button>
    </div>
  </header>

  <!-- STATS BANNER -->
  <section id="metrics" class="stats-banner">
    <div class="stat-item">
      <div class="stat-number">100%</div>
      <div class="stat-label">İzole Geliştirme (Branches)</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">0 Dk</div>
      <div class="stat-label">Sıfır Kesinti (Clean Merges)</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">&lt; 1 Sn</div>
      <div class="stat-label">Hızlı Dal Geçişi (Instant Switch)</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">CI/CD</div>
      <div class="stat-label">Canlıya Dağıtım Uyumu</div>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section id="features">
    <div class="section-title">
      <h2>Sektör Standardı Git Kuralları</h2>
      <p>Kurumsal ve modern teknoloji şirketlerinde kod bu mantıkla geliştirilir.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🌿</div>
        <h3>1. Asla Doğrudan Main'e Kod Atma</h3>
        <p>
          Canlı ortamı temsil eden <code>main</code> dalı kutsaldır. Her yeni buton, sayfa veya özellik
          kendi <code>feature/*</code> dalında izole geliştirilir.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔀</div>
        <h3>2. Güvenli Dal Geçişi (Switching)</h3>
        <p>
          Bir dalda çalışırken acil bir hata mı çıktı? İşi <code>stash</code> ile cebe atabilir,
          <code>switch</code> ile başka dala geçip test edebilirsin.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🛡️</div>
        <h3>3. Çakışma Yönetimi (Conflict)</h3>
        <p>
          İki kişi aynı satırı değiştirdiğinde Git paniklemez; sana seçenek sunar.
          Çakışmaları birleştirip temiz bir geçmiş elde etmek standart bir yetenektir.
        </p>
      </div>
    </div>
  </section>

  <!-- WORKFLOW INFO -->
  <section id="workflow" class="branch-status-box">
    <div>
      <span class="git-badge">● Aktif Dal: main</span>
      <span style="color: var(--text-muted); margin-left: 1rem;">Temel sürüm yüklendi. Git ile değişiklikleri takip etmeye hazırsınız.</span>
    </div>
    <div style="color: #6366f1; font-weight: 600;">v1.0.0-stable</div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2026 Nexus Pro Studio. Git & GitHub Uygulama Eğitimi İçin Hazırlanmıştır.</p>
  </footer>
`

// Counter interaction
let count = 0
const counterBtn = document.querySelector('#counter-btn')
const countValue = document.querySelector('#count-value')

if (counterBtn && countValue) {
  counterBtn.addEventListener('click', () => {
    count++
    countValue.textContent = count
  })
}

const exploreBtn = document.querySelector('#explore-btn')
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    alert('Git Laboratuvarına Hoş Geldin! Şimdi terminalden branch oluşturup adımlara başlayalım.')
  })
}
