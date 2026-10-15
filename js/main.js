/**
 * LBL HOSIERIES - SCROLLYTELLING & EDITORIAL ENGINE
 * Tiruppur Direct Undergarment Manufacturing
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollyStageTransitions();
  initSideTracker();
  initNavbarScroll();
  initOrderEstimator();
  initColorSwatches();
});

// Pinned Stage Layer Crossfade Controller
function initScrollyStageTransitions() {
  const steps = document.querySelectorAll('.narrative-chapter-step');
  const layers = document.querySelectorAll('.stage-layer');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stageIndex = entry.target.getAttribute('data-stage');
        if (stageIndex !== null) {
          activateStageLayer(parseInt(stageIndex, 10));
          updateTracker(entry.target.id);
        }
      }
    });
  }, observerOptions);

  steps.forEach(step => observer.observe(step));
}

function activateStageLayer(index) {
  const layers = document.querySelectorAll('.stage-layer');
  layers.forEach((layer, idx) => {
    if (idx === index) {
      layer.classList.add('active');
    } else {
      layer.classList.remove('active');
    }
  });
}

// Side Tracker Navigation
function initSideTracker() {
  const nodes = document.querySelectorAll('.tracker-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const targetId = node.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function updateTracker(activeId) {
  const nodes = document.querySelectorAll('.tracker-node');
  nodes.forEach(node => {
    if (node.getAttribute('data-target') === activeId) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });
}

// Navbar Scroll Blur
function initNavbarScroll() {
  const nav = document.querySelector('.editorial-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Interactive Color Swatches for Garments
function initColorSwatches() {
  const swatchButtons = document.querySelectorAll('.swatch-btn');
  swatchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentCard = btn.closest('.lookbook-item-card');
      if (!parentCard) return;

      // Update active state in current card
      parentCard.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mannequinImg = btn.getAttribute('data-img');
      const targetImg = parentCard.querySelector('.lookbook-main-img');
      if (targetImg && mannequinImg) {
        targetImg.style.opacity = '0.4';
        setTimeout(() => {
          targetImg.src = mannequinImg;
          targetImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// Wholesale Live Order Estimator
function initOrderEstimator() {
  const catSelect = document.getElementById('calc-cat');
  const qtyInput = document.getElementById('calc-dozens');
  const stateSelect = document.getElementById('calc-dest');

  const outCartons = document.getElementById('out-cartons');
  const outWeight = document.getElementById('out-weight');
  const outTransit = document.getElementById('out-transit');
  const waBtn = document.getElementById('procure-wa-btn');

  function calculate() {
    if (!catSelect || !qtyInput) return;

    const cat = catSelect.value;
    const dozens = parseInt(qtyInput.value, 10) || 50;
    const state = stateSelect ? stateSelect.value : 'North India';

    let pcsPerCarton = 240;
    let weightPerCartonKg = 24;
    if (cat === 'cycling') {
      pcsPerCarton = 120;
      weightPerCartonKg = 22;
    }

    const totalPcs = dozens * 12;
    const cartons = Math.ceil(totalPcs / pcsPerCarton);
    const grossWeight = cartons * weightPerCartonKg;

    if (outCartons) outCartons.textContent = `${cartons} Master Cartons`;
    if (outWeight) outWeight.textContent = `~${grossWeight} kg`;

    let transit = '3-5 Days Direct';
    if (['Delhi NCR', 'Uttar Pradesh', 'Punjab', 'Rajasthan'].includes(state)) {
      transit = '4-6 Days (North India Express)';
    } else if (['Maharashtra', 'Gujarat', 'Madhya Pradesh'].includes(state)) {
      transit = '3-4 Days (Central Hub)';
    } else if (['Tamil Nadu', 'Karnataka', 'Andhra Pradesh'].includes(state)) {
      transit = '24-48 Hours (Direct Hub)';
    }
    if (outTransit) outTransit.textContent = transit;

    if (waBtn) {
      const msg = `Hello LBL Hosieries Tiruppur,%0A%0AWe are requesting a Factory Wholesale Quote:%0A- Product Line: ${cat.toUpperCase()}%0A- Volume: ${dozens} Dozens (~${cartons} Master Cartons)%0A- Delivery Region: ${state}%0A%0APlease share your distributor price list and sample availability.`;
      waBtn.href = `https://wa.me/919443000000?text=${msg}`;
    }
  }

  if (catSelect) catSelect.addEventListener('change', calculate);
  if (qtyInput) qtyInput.addEventListener('input', calculate);
  if (stateSelect) stateSelect.addEventListener('change', calculate);

  calculate();
}

// Size Chart Modal
window.openSizeChartModal = function(category) {
  const modal = document.getElementById('size-modal');
  if (!modal) return;

  const titleEl = document.getElementById('size-modal-title');
  const contentEl = document.getElementById('size-modal-content');

  if (category === 'kids') {
    titleEl.textContent = 'Joy, Nicky & Micky Kids Bloomer Sizing (45 – 75)';
    contentEl.innerHTML = `
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Crafted from 100% 30s combed cotton for growing kids and schoolgirls with tender skin.</p>
      <table class="size-table-styled">
        <thead>
          <tr>
            <th>Size Code</th>
            <th>Approx Age</th>
            <th>Chest / Waist (Inches)</th>
            <th>Length (cm)</th>
            <th>Inner Pack</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>45</td><td>1 - 2 Years</td><td>16 - 18"</td><td>20 cm</td><td>10 Pcs Box</td></tr>
          <tr><td>50</td><td>2 - 3 Years</td><td>18 - 20"</td><td>22 cm</td><td>10 Pcs Box</td></tr>
          <tr><td>55</td><td>3 - 4 Years</td><td>20 - 22"</td><td>24 cm</td><td>10 Pcs Box</td></tr>
          <tr><td>60</td><td>5 - 6 Years</td><td>22 - 24"</td><td>26 cm</td><td>10 Pcs Box</td></tr>
          <tr><td>65</td><td>7 - 8 Years</td><td>24 - 26"</td><td>28 cm</td><td>10 Pcs Box</td></tr>
          <tr><td>70</td><td>9 - 10 Years</td><td>26 - 28"</td><td>30 cm</td><td>10 Pcs Box</td></tr>
          <tr><td>75</td><td>11 - 12 Years</td><td>28 - 30"</td><td>32 cm</td><td>10 Pcs Box</td></tr>
        </tbody>
      </table>
    `;
  } else if (category === 'cycling') {
    titleEl.textContent = 'Perfect Cycling Shorts Inclusive Sizing (S – 6XL)';
    contentEl.innerHTML = `
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Heavy-gauge 190 GSM pure cotton stretch engineered with anti-thigh chafing seams and non-roll waistbands.</p>
      <table class="size-table-styled">
        <thead>
          <tr>
            <th>Size</th>
            <th>Waist (Inches)</th>
            <th>Hip Measurement</th>
            <th>Inseam Length</th>
            <th>Master Carton</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S</td><td>28 - 30"</td><td>34 - 36"</td><td>7.5"</td><td>120 Pcs</td></tr>
          <tr><td>M</td><td>30 - 32"</td><td>36 - 38"</td><td>8.0"</td><td>120 Pcs</td></tr>
          <tr><td>L</td><td>32 - 34"</td><td>38 - 40"</td><td>8.5"</td><td>120 Pcs</td></tr>
          <tr><td>XL</td><td>34 - 36"</td><td>40 - 42"</td><td>9.0"</td><td>120 Pcs</td></tr>
          <tr><td>2XL</td><td>36 - 38"</td><td>42 - 44"</td><td>9.5"</td><td>120 Pcs</td></tr>
          <tr><td>3XL</td><td>38 - 42"</td><td>44 - 48"</td><td>10.0"</td><td>120 Pcs</td></tr>
          <tr><td>4XL</td><td>42 - 46"</td><td>48 - 52"</td><td>10.5"</td><td>120 Pcs</td></tr>
          <tr><td>5XL</td><td>46 - 50"</td><td>52 - 56"</td><td>11.0"</td><td>120 Pcs</td></tr>
          <tr><td>6XL</td><td>50 - 54"</td><td>56 - 60"</td><td>11.5"</td><td>120 Pcs</td></tr>
        </tbody>
      </table>
    `;
  } else {
    titleEl.textContent = 'Ladies Bloomers & Panties Sizing (75 – 100)';
    contentEl.innerHTML = `
      <p style="color: var(--text-muted); margin-bottom: 1rem;">MeToo, Nicky & Perfect ladies daily comfort series. Breathable double gusset, 100% combed cotton.</p>
      <table class="size-table-styled">
        <thead>
          <tr>
            <th>Size Code</th>
            <th>Standard Fit</th>
            <th>Waist (Inches)</th>
            <th>Waist (cm)</th>
            <th>Packaging Format</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>75 / 80</td><td>Small (S)</td><td>28 - 30"</td><td>70 - 75 cm</td><td>Single Box & 10-Pack</td></tr>
          <tr><td>85</td><td>Medium (M)</td><td>30 - 32"</td><td>75 - 80 cm</td><td>Single Box & 10-Pack</td></tr>
          <tr><td>90</td><td>Large (L)</td><td>32 - 34"</td><td>80 - 85 cm</td><td>Single Box & 10-Pack</td></tr>
          <tr><td>95</td><td>X-Large (XL)</td><td>34 - 36"</td><td>85 - 90 cm</td><td>Single Box & 10-Pack</td></tr>
          <tr><td>100</td><td>XX-Large (2XL)</td><td>36 - 38"</td><td>90 - 95 cm</td><td>Single Box & 10-Pack</td></tr>
        </tbody>
      </table>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeSizeChartModal = function() {
  const modal = document.getElementById('size-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.handleProcurementSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('pro-name')?.value || 'Wholesale Buyer';
  const phone = document.getElementById('pro-phone')?.value || '';
  const firm = document.getElementById('pro-firm')?.value || '';
  const qty = document.getElementById('calc-dozens')?.value || '100';
  const cat = document.getElementById('calc-cat')?.value || 'Innerwear';
  const state = document.getElementById('calc-dest')?.value || 'India';

  const waText = `Wholesale Inquiry from LBL Website:\nName: ${name}\nFirm: ${firm}\nPhone: ${phone}\nCategory: ${cat}\nVolume: ${qty} Dozens\nState: ${state}`;
  alert(`Thank you, ${name}! Your inquiry has been forwarded to LBL Hosieries Tiruppur Mill dispatch.`);
  window.open(`https://wa.me/919443000000?text=${encodeURIComponent(waText)}`, '_blank');
};
