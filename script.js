document.documentElement.classList.add("js");

const PhD = [
  { name: "Dongheon Lee", email: "dslisleedh@gmail.com", interests: ["Low-level Vision", "Graphics", "Computational Efficiency"], link: "https://github.com/dslisleedh/dslisleedh_cv", photo: "assets/images/members/dongheonlee.jpg" },
  { name: "Jaesung Jun", email: "jasonjun1121@gmail.com", interests: ["MLLM Reinforcement Learning", "Large Language Models", "Domain Generalization"], link: "https://github.com/Jaesung-Jun", photo: "assets/images/members/jaesungjeon.jpg" },
  { name: "Doheon Kwon", email: "littleliar@naver.com", interests: ["Computer Vision", "Low-level Vision"], photo: "assets/images/members/doheonkwon.jpg" },
]

const MS = [
  { name: "Seunghye Chae", email: "tmhey@uos.ac.kr", interests: ["MLLM Reinforcement Learning", "Logical Anomaly Detection", "Domain Generalization"], photo: "assets/images/members/seunghyechae.jpg" },
  { name: "Seongsu Lee", email: "ssulee0206@gmail.com", interests: ["Computer Vision", "Anomaly Detection", "Vision Language Models"], photo: "assets/images/members/seungsulee.jpg" },
  { name: "Seungjae Moon", email: "msj0243@gmail.com", interests: ["Self-evolving MLLMs", "Open-vocabulary Segmentation"], photo: "assets/images/members/seungjaemoon.jpg" },
  { name: "Chanseul Cho", email: "chanseul2001@gmail.com", interests: ["MLLM Agent", "MLLM Reinforcement Learning", "Parameter Efficient Fine-Tuning"], photo: "assets/images/members/chanseulcho.jpg" },
  { name: "Noori Bae", email: "nooribae1115@gmail.com", interests: ["MLLM Reinforcement Learning", "Multi-turn MLLM"], photo: "assets/images/members/nooribae.jpg" },
  { name: "Jaegyun Im", email: "imij0522@gmail.com", interests: ["Multi-modal Large Language Models", "Generative AI"], photo: "assets/images/members/jaegyunim.jpg" },
  { name: "Dongwoo Kim", email: "shanghai110930@gmail.com", interests: ["Computer Vision", "Multi-modal Large Language Models"], photo: "assets/images/members/dongwookim.jpg" },
  { name: "Nari Yun", email: "ynr2472@naver.com", interests: ["Computer Vision"], photo: "assets/images/members/nariyun.jpg" },
  { name: "Eunha Lee", email: "happy.emmy.lee@gmail.com", interests: ["Computer Vision", "Vision Language Models"], photo: "assets/images/members/eunhalee.jpg" },
  { name: "Jeonghyun Kim", email: "kr.jeonghyun.kim@gmail.com", interests: ["Vision Transformer", "DL Backbone"], photo: "assets/images/members/jeonghyunkim.jpg" },
];


const undergraduateInterns = [
  { name: "Yerin Kang", email: "", interests: ["Deep Learning", "Computer Vision"], initials: "YR" },
  // { name: "Gildong Hong", email: "", interests: ["Deep Learning", "Computer Vision"], initials: "GD" },
];

const alumni = [
  { name: "Seokju Yun", current: "Ph.D. Course at KAIST", interests: ["Computer Vision", "Efficient Deep Learning", "Domain Generalization"], photo: "assets/images/members/seokjuyun.jpg" },
  { name: "Seunghyun Oh", email: "osh1795@naver.com", current: "Former MILab Member", interests: ["Computer Vision", "Vision Language Models", "Anomaly Detection"], photo: "assets/images/members/seunghyunoh.jpg" },
  { name: "Taehoon Lim", email: "lth9029@gmail.com", current: "Korea Electronics Technology Institute (KETI)", interests: ["Computer Vision", "Anomaly Detection"], photo: "assets/images/members/taehoonlim.jpg" },
];

const publications = [
  { year: 2026, title: "StAR: Segment Anything Reasoner", authors: "Seokju Yun, Dongheon Lee, Noori Bae, Jaesung Jun, Chanseul Cho, Youngmin Ro", venue: "ECCV", detail: "European Conference on Computer Vision · 2026", link: "https://arxiv.org/abs/2603.14382", image: "assets/images/publications/star.png" },
  { year: 2026, title: "Partial Large Kernel CNNs for Efficient Super-Resolution", authors: "Dongheon Lee, Seokju Yun, Youngmin Ro", venue: "IEEE Access", detail: "April 2026", link: "https://ieeexplore.ieee.org/document/11493906", image: "assets/images/publications/plksr.png" },
  { year: 2026, title: "GroupLoRA: Enhancing Rank Effectiveness Through Group-Wise Decomposition for Low-Rank Adaptation", authors: "Jaesung Jun, Youngmin Ro", venue: "IEEE Access", detail: "March 2026", link: "https://ieeexplore.ieee.org/document/11424420", image: "assets/images/publications/grouplora.png" },
  { year: 2026, title: "OV-Stitcher: A Global Context-Aware Framework for Training-Free Open-Vocabulary Semantic Segmentation", authors: "Seungjae Moon, Seunghyun Oh, Youngmin Ro", venue: "CVPR Findings", detail: "IEEE/CVF CVPR Findings · 2026", link: "https://openaccess.thecvf.com/content/CVPR2026F/papers/Moon_OV-Stitcher_A_Global_Context-Aware_Framework_for_Training-Free_Open_Vocabulary_Semantic_CVPRF_2026_paper.pdf", image: "assets/images/publications/ov-stitcher.png" },
  { year: 2026, title: "RecycleLoRA: Rank-Revealing QR-Based Dual-LoRA Subspace Adaptation for Domain Generalized Semantic Segmentation", authors: "Chanseul Cho, Seokju Yun, Jaesung Jun, Seungjae Moon, Youngmin Ro", venue: "CVPR Findings", detail: "IEEE/CVF CVPR Findings · 2026", link: "https://arxiv.org/abs/2603.28142", image: "assets/images/publications/recyclelora.png" },
  { year: 2025, title: "AULoRA: Anomaly Understanding With Low-Rank Adaptation for Zero-Shot Anomaly Detection", authors: "Seunghyun Oh, Seongsu Lee, Seunghye Chae, Youngmin Ro", venue: "IEEE Access", detail: "October 2025", link: "https://doi.org/10.1109/ACCESS.2025.3614713", image: "assets/images/publications/aulora.png" },
  { year: 2025, title: "Emulating Self-attention with Convolution for Efficient Image Super-Resolution", authors: "Dongheon Lee, Seokju Yun, Youngmin Ro", venue: "ICCV", detail: "IEEE/CVF ICCV · 2025", link: "https://openaccess.thecvf.com/content/ICCV2025/html/Lee_Emulating_Self-attention_with_Convolution_for_Efficient_Image_Super-Resolution_ICCV_2025_paper.html", note: "Highlight paper", image: "assets/images/publications/esc.png" },
  { year: 2025, title: "SoMA: Singular Value Decomposed Minor Components Adaptation for Domain Generalizable Representation Learning", authors: "Seokju Yun, Seunghye Chae, Dongheon Lee, Youngmin Ro", venue: "CVPR", detail: "IEEE/CVF CVPR · 2025", link: "https://arxiv.org/abs/2412.04077", note: "Highlight paper", image: "assets/images/publications/soma.png" },
  { year: 2024, title: "Arbitrary-Scale Downscaling of Tidal Current Data Using Implicit Continuous Representation", authors: "Dongheon Lee, Seungmyong Jeong, Youngmin Ro", venue: "IEEE Access", detail: "October 2024", link: "https://arxiv.org/abs/2401.15893", image: "assets/images/publications/tidal-downscaling.png" },
  { year: 2024, title: "Instance-Dependent Multi-Label Noise Generation for Multi-Label Remote Sensing Image Classification", authors: "Youngwook Kim, Sehwan Kim, Youngmin Ro*, Jungwoo Lee*", venue: "IEEE JSTARS", detail: "September 2024", link: "https://ieeexplore.ieee.org/abstract/document/10663835", image: "assets/images/publications/multilabel-noise.png" },
  { year: 2024, title: "Self-supervised Scheme for Generalizing GAN Image Detection", authors: "Yonghyun Jeong, Doyeon Kim, Pyounggeon Kim, Youngmin Ro, Jongwon Choi", venue: "Pattern Recognition Letters", detail: "August 2024", link: "https://www.sciencedirect.com/science/article/abs/pii/S0167865524002009", image: "assets/images/publications/gan-detection.png" },
  { year: 2024, title: "Adversarial Deep Energy Method for Solving Saddle Point Problems Involving Dielectric Elastomers", authors: "Seung-Woo Lee, Chien Truong-Quoc, Youngmin Ro, Do-Nyun Kim", venue: "CMAME", detail: "March 2024", link: "https://www.sciencedirect.com/science/article/abs/pii/S0045782524000811", image: "assets/images/publications/deep-energy.png" },
  { year: 2024, title: "SHViT: Single-Head Vision Transformer with Memory Efficient Macro Design", authors: "Seokju Yun, Youngmin Ro", venue: "CVPR", detail: "IEEE/CVF CVPR · 2024", link: "https://arxiv.org/abs/2401.16456", image: "assets/images/publications/shvit.png" },
  { year: 2024, title: "Strengthening Dynamic Convolution With Attention and Residual Connection in Kernel Space", authors: "Seokju Yun, Youngmin Ro", venue: "IEEE Access", detail: "January 2024", link: "https://ieeexplore.ieee.org/abstract/document/10409154", image: "assets/images/publications/dynamic-conv.png" },
  { year: 2022, title: "FingerprintNet: Synthesized Fingerprints for Generated Image Detection", authors: "Yonghyun Jeong, Doyeon Kim, Youngmin Ro, Pyounggeon Kim, Jongwon Choi", venue: "ECCV", detail: "European Conference on Computer Vision · 2022", link: "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136740071.pdf", image: "assets/images/publications/fingerprintnet.png" },
  { year: 2022, title: "Differentially Private Normalizing Flows for Synthetic Tabular Data Generation", authors: "Jaewoo Lee, Minjung Kim, Yonghyun Jeong, Youngmin Ro", venue: "AAAI", detail: "AAAI Conference on Artificial Intelligence · 2022", link: "https://ojs.aaai.org/index.php/AAAI/article/view/20697", image: "assets/images/publications/dp-flows.png" },
  { year: 2022, title: "FrePGAN: Robust Deepfake Detection Using Frequency-level Perturbations", authors: "Yonghyun Jeong, Doyeon Kim, Youngmin Ro, Jongwon Choi", venue: "AAAI", detail: "AAAI Conference on Artificial Intelligence · 2022", link: "https://ojs.aaai.org/index.php/AAAI/article/view/19990", image: "assets/images/publications/frepgan.png" },
  { year: 2021, title: "Rollback Ensemble with Multiple Local Minima in Fine-tuning Deep Learning Networks", authors: "Youngmin Ro, Jongwon Choi, Byeongho Heo, Jin Young Choi", venue: "IEEE TNNLS", detail: "March 2021", link: "https://ieeexplore.ieee.org/document/9369098", image: "assets/images/publications/rollback.png" },
  { year: 2021, title: "Layer-wise Pruning and Auto-tuning of Layer-wise Learning Rates in Fine-tuning of Deep Networks", authors: "Youngmin Ro, Jin Young Choi", venue: "AAAI", detail: "Thirty-Fifth AAAI Conference · 2021", link: "https://www.aaai.org/AAAI21Papers/AAAI-1633.RoY.pdf", image: "assets/images/publications/layerwise-pruning.png" },
  { year: 2020, title: "Heterogeneous Double-head Ensemble for Deep Metric Learning", authors: "Youngmin Ro, Jin Young Choi", venue: "IEEE Access", detail: "2020", link: "https://ieeexplore.ieee.org/document/9123761", image: "assets/images/publications/double-head.png" },
  { year: 2019, title: "Backbone Can Not be Trained at Once: Rolling Back to Pre-trained Network for Person Re-Identification", authors: "Youngmin Ro, Jongwon Choi, Dae Ung Jo, Byeongho Heo, Jongin Lim, Jin Young Choi", venue: "AAAI", detail: "Thirty-Third AAAI Conference · 2019", link: "https://www.aaai.org/ojs/index.php/AAAI/article/view/4913", image: "assets/images/publications/backbone-rollback.png" },
];

function getInitials(name) {
  return name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function profileTemplate(person) {
  const photo = person.photo
    ? `<img src="${person.photo}" alt="${person.name}" loading="lazy" width="150" height="150">`
    : `<span aria-hidden="true">${person.initials || getInitials(person.name)}</span>`;
  const name = person.link
    ? `<a href="${person.link}" target="_blank" rel="noopener noreferrer">${person.name} ↗</a>`
    : person.name;
  const email = person.email
    ? `<div class="profile-email"><a href="mailto:${person.email}">${person.email.replace("@", "@")}</a></div>`
    : "";
  const current = person.current ? `<div class="profile-current">Current: ${person.current}</div>` : "";
  const tags = (person.interests || []).filter(Boolean).map((interest) => `<span class="profile-tag">${interest}</span>`).join("");

  return `<article class="profile"><div class="profile-photo">${photo}</div><div class="profile-body"><div class="profile-name-row"><span class="profile-name">${name}</span></div>${current}${email}<div class="profile-research">${tags}</div></div></article>`;
}

function renderMembers() {
  const phdGrid = document.querySelector("#phd-grid");
  const msGrid = document.querySelector("#ms-grid");
  const internGrid = document.querySelector("#intern-grid");
  const alumniGrid = document.querySelector("#alumni-grid");
  if (!PhD || !MS || !internGrid || !alumniGrid) return;
  phdGrid.innerHTML = PhD.map(profileTemplate).join("");
  msGrid.innerHTML = MS.map(profileTemplate).join("");
  internGrid.innerHTML = undergraduateInterns.map(profileTemplate).join("");
  alumniGrid.innerHTML = alumni.map(profileTemplate).join("");
}

function renderPublications() {
  const target = document.querySelector("#publication-list");
  if (!target) return;
  const years = [...new Set(publications.map((publication) => publication.year))];
  target.innerHTML = years.map((year) => {
    const entries = publications.filter((publication) => publication.year === year).map((publication) => `
      <article class="pub-item">
        <div class="pub-item__thumb"><img src="${publication.image}" alt="" loading="lazy" width="366" height="209"></div>
        <div>
          <div class="pub-item__title">${publication.title}<a class="pub-link" href="${publication.link}" target="_blank" rel="noopener noreferrer">Paper</a></div>
          <div class="pub-item__authors">${publication.authors}</div>
          <div class="pub-item__venue">${publication.venue} · ${publication.detail}${publication.note ? ` <span class="pub-note">(${publication.note})</span>` : ""}</div>
        </div>
      </article>`).join("");
    return `<section><h3 class="pub-year">${year}</h3><div class="pub-list">${entries}</div></section>`;
  }).join("");
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    if (!nav.contains(event.target) && !toggle.contains(event.target)) close();
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  window.addEventListener("resize", () => { if (window.innerWidth > 860) close(); });
}

function initHeroCarousel() {
  const carousel = document.querySelector(".hero-carousel");
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll(".hero-carousel__slide")];
  const dots = [...carousel.querySelectorAll(".hero-carousel__dot")];
  const previous = carousel.querySelector(".hero-carousel__btn--prev");
  const next = carousel.querySelector(".hero-carousel__btn--next");
  const viewport = carousel.querySelector(".hero-carousel__viewport");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer;

  const show = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };
  const stop = () => { if (timer) window.clearInterval(timer); };
  const start = () => {
    stop();
    if (carousel.dataset.autoplay === "true" && !reducedMotion) {
      timer = window.setInterval(() => show(index + 1), Number(carousel.dataset.interval || 5500));
    }
  };

  previous?.addEventListener("click", () => { show(index - 1); start(); });
  next?.addEventListener("click", () => { show(index + 1); start(); });
  dots.forEach((dot, dotIndex) => dot.addEventListener("click", () => { show(dotIndex); start(); }));
  viewport?.addEventListener("mouseenter", stop);
  viewport?.addEventListener("mouseleave", start);
  viewport?.addEventListener("focusin", stop);
  viewport?.addEventListener("focusout", start);
  show(0);
  start();
}

function initIdentityNetwork() {
  const slide = document.querySelector(".hero-carousel__slide--identity");
  const canvas = slide?.querySelector(".hero-identity__network");
  const context = canvas?.getContext("2d");
  if (!slide || !canvas || !context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const canInteract = finePointer && !reducedMotion;
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, presence: 0, active: false };
  let width = 0;
  let height = 0;
  let nodes = [];

  const seededRandom = (seed) => {
    const value = Math.sin(seed * 932.17) * 43758.5453;
    return value - Math.floor(value);
  };

  const createNodes = () => {
    const count = Math.max(16, Math.min(34, Math.round((width * height) / 18000)));
    nodes = Array.from({ length: count }, (_, index) => ({
      x: seededRandom(index + 11) * width,
      y: seededRandom(index + 47) * height,
      phase: seededRandom(index + 83) * Math.PI * 2,
      speed: 0.45 + seededRandom(index + 131) * 0.45,
    }));
  };

  const draw = (timestamp = 0) => {
    context.clearRect(0, 0, width, height);
    const time = reducedMotion ? 0 : timestamp / 1000;
    const points = nodes.map((node) => {
      let x = node.x + Math.sin(time * node.speed + node.phase) * 5;
      let y = node.y + Math.cos(time * node.speed * 0.8 + node.phase) * 5;
      const dx = pointer.x - x;
      const dy = pointer.y - y;
      const distance = Math.hypot(dx, dy) || 1;

      if (pointer.presence > 0.01 && distance < 210) {
        const pull = (1 - distance / 210) * 12 * pointer.presence;
        x += (dx / distance) * pull;
        y += (dy / distance) * pull;
      }
      return { x, y };
    });

    for (let first = 0; first < points.length; first += 1) {
      for (let second = first + 1; second < points.length; second += 1) {
        const distance = Math.hypot(points[first].x - points[second].x, points[first].y - points[second].y);
        if (distance > 135) continue;
        context.beginPath();
        context.moveTo(points[first].x, points[first].y);
        context.lineTo(points[second].x, points[second].y);
        context.strokeStyle = `rgba(23, 105, 194, ${0.12 * (1 - distance / 135)})`;
        context.lineWidth = 1;
        context.stroke();
      }
    }

    if (pointer.presence > 0.01) {
      const nearby = points
        .map((point) => ({ ...point, distance: Math.hypot(point.x - pointer.x, point.y - pointer.y) }))
        .filter((point) => point.distance < 205)
        .sort((first, second) => Math.atan2(first.y - pointer.y, first.x - pointer.x) - Math.atan2(second.y - pointer.y, second.x - pointer.x))
        .slice(0, 9);

      nearby.forEach((point) => {
        context.beginPath();
        context.moveTo(pointer.x, pointer.y);
        context.lineTo(point.x, point.y);
        context.strokeStyle = `rgba(23, 105, 194, ${(0.3 * (1 - point.distance / 205)) * pointer.presence})`;
        context.lineWidth = 1;
        context.stroke();
      });

      if (nearby.length > 2) {
        context.beginPath();
        context.moveTo(nearby[0].x, nearby[0].y);
        nearby.slice(1).forEach((point) => context.lineTo(point.x, point.y));
        context.closePath();
        context.strokeStyle = `rgba(23, 105, 194, ${0.1 * pointer.presence})`;
        context.stroke();
      }

      context.beginPath();
      context.arc(pointer.x, pointer.y, 2.2, 0, Math.PI * 2);
      context.fillStyle = `rgba(23, 105, 194, ${0.55 * pointer.presence})`;
      context.fill();
    }

    points.forEach((point) => {
      const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
      const emphasis = pointer.presence > 0 && distance < 205 ? 0.18 * (1 - distance / 205) : 0;
      context.beginPath();
      context.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
      context.fillStyle = `rgba(23, 105, 194, ${0.2 + emphasis})`;
      context.fill();
    });
  };

  const resize = () => {
    const bounds = slide.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    pointer.x = pointer.targetX = width * 0.78;
    pointer.y = pointer.targetY = height * 0.42;
    createNodes();
    draw();
  };

  if (canInteract) {
    slide.addEventListener("pointermove", (event) => {
      const bounds = slide.getBoundingClientRect();
      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
      pointer.active = true;
      slide.style.setProperty("--network-x", `${(pointer.targetX / width) * 100}%`);
      slide.style.setProperty("--network-y", `${(pointer.targetY / height) * 100}%`);
    });

    slide.addEventListener("pointerleave", () => {
      pointer.active = false;
      slide.style.removeProperty("--network-x");
      slide.style.removeProperty("--network-y");
    });
  }

  const animate = (timestamp) => {
    pointer.x += (pointer.targetX - pointer.x) * 0.11;
    pointer.y += (pointer.targetY - pointer.y) * 0.11;
    pointer.presence += ((pointer.active ? 1 : 0) - pointer.presence) * 0.08;
    if (slide.classList.contains("is-active") && !document.hidden) draw(timestamp);
    window.requestAnimationFrame(animate);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(slide);
  resize();
  if (canInteract) window.requestAnimationFrame(animate);
}

function initGalleryCarousels() {
  document.querySelectorAll(".gallery-carousel").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".gallery-slide")];
    const dotsContainer = carousel.querySelector(".gallery-dots");
    const previous = carousel.querySelector(".gallery-btn--prev");
    const next = carousel.querySelector(".gallery-btn--next");
    if (!slides.length || !dotsContainer) return;

    let index = 0;
    const dots = slides.map((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `gallery-dot${dotIndex === 0 ? " is-active" : ""}`;
      dot.setAttribute("aria-label", `사진 ${dotIndex + 1} 보기`);
      dotsContainer.appendChild(dot);
      return dot;
    });

    const show = (newIndex) => {
      index = (newIndex + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
      dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
    };

    if (slides.length === 1) {
      dotsContainer.hidden = true;
      previous?.remove();
      next?.remove();
      return;
    }

    previous?.addEventListener("click", () => show(index - 1));
    next?.addEventListener("click", () => show(index + 1));
    dots.forEach((dot, dotIndex) => dot.addEventListener("click", () => show(dotIndex)));
  });
}

function initGalleryLightbox() {
  const dialog = document.querySelector("[data-gallery-lightbox]");
  const dialogImage = dialog?.querySelector("[data-gallery-lightbox-image]");
  const caption = dialog?.querySelector("[data-gallery-lightbox-caption]");
  const closeButton = dialog?.querySelector("[data-gallery-lightbox-close]");
  if (!dialog || !dialogImage || !caption || !closeButton) return;

  const openImage = (image) => {
    const galleryTitle = image.closest(".gallery-tile")?.querySelector(".gallery-caption")?.textContent?.trim() || "Gallery";
    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
    caption.textContent = galleryTitle;
    dialog.showModal();
  };

  document.querySelectorAll(".gallery-img").forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt} 크게 보기`);
    image.addEventListener("click", () => openImage(image));
    image.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openImage(image);
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
  });
}

document.querySelectorAll("#year").forEach((year) => { year.textContent = new Date().getFullYear(); });
renderMembers();
renderPublications();
initNavigation();
initHeroCarousel();
initIdentityNetwork();
initGalleryCarousels();
initGalleryLightbox();
