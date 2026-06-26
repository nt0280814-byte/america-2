/* ==========================================================================
   Hero 3D scene — an open book, pages gently curved, with loose pages and
   amber "ink-light" particles drifting around it. Mouse moves give parallax.
   Built on three.js r128 (no OrbitControls / no newer-only geometries).
   ========================================================================== */
(function () {
  const container = document.getElementById("hero-canvas");
  if (!container || typeof THREE === "undefined") return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w = container.clientWidth || 600;
  let h = container.clientHeight || 600;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  camera.position.set(0, 1.0, 10.5);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  container.appendChild(renderer.domElement);

  // ---------- lighting ----------
  scene.add(new THREE.AmbientLight(0xfff1d8, 0.7));
  const key = new THREE.DirectionalLight(0xffe2b0, 1.15);
  key.position.set(4, 6, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xe2776b, 0.55);
  rim.position.set(-5, -1.5, -3);
  scene.add(rim);

  // ---------- book group ----------
  const book = new THREE.Group();
  book.scale.setScalar(0.74);
  scene.add(book);

  function curvedPageGeo(dir) {
    const geo = new THREE.PlaneGeometry(2.9, 3.9, 20, 20);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const bulge = Math.pow(Math.abs(x) / 1.45, 2) * 0.22;
      pos.setZ(i, pos.getZ(i) + bulge * dir);
    }
    geo.computeVertexNormals();
    return geo;
  }

  const pageMat = new THREE.MeshStandardMaterial({
    color: 0xf3ede0,
    roughness: 0.88,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  const leftPage = new THREE.Mesh(curvedPageGeo(1), pageMat);
  leftPage.position.x = -1.46;
  leftPage.rotation.y = THREE.MathUtils.degToRad(17);
  book.add(leftPage);

  const rightPage = new THREE.Mesh(curvedPageGeo(1), pageMat.clone());
  rightPage.position.x = 1.46;
  rightPage.rotation.y = THREE.MathUtils.degToRad(-17);
  book.add(rightPage);

  // spine
  const spine = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 3.95, 0.07),
    new THREE.MeshStandardMaterial({ color: 0x1b2238, roughness: 0.6 })
  );
  book.add(spine);

  // suggested ink lines (text) on each page
  function addInkLines(parent, side) {
    for (let i = 0; i < 7; i++) {
      const lineWidth = 1.55 - Math.random() * 0.7;
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(lineWidth, 0.022, 0.01),
        new THREE.MeshBasicMaterial({ color: 0x2b2418, transparent: true, opacity: 0.28 })
      );
      line.position.set(side * (0.78 - lineWidth / 2), 1.45 - i * 0.36, 0.12);
      parent.add(line);
    }
  }
  addInkLines(leftPage, -1);
  addInkLines(rightPage, 1);

  // ---------- loose drifting pages ----------
  const loosePages = [];
  for (let i = 0; i < 5; i++) {
    const geo = new THREE.PlaneGeometry(0.55, 0.74);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xfbf8f1,
      roughness: 0.9,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const page = new THREE.Mesh(geo, mat);
    page.position.set((Math.random() - 0.5) * 6.4, (Math.random() - 0.4) * 3.8 + 0.6, (Math.random() - 0.5) * 3 - 1);
    page.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    page.userData.spin = 0.001 + Math.random() * 0.003;
    page.userData.bob = Math.random() * Math.PI * 2;
    scene.add(page);
    loosePages.push(page);
  }

  // ---------- ember particles ----------
  const COUNT = 140;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 9.5;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xe3a23c,
    size: 0.05,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ---------- mouse parallax ----------
  let mouseX = 0,
    mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
  });

  function renderStatic() {
    renderer.render(scene, camera);
  }

  if (reducedMotion) {
    book.rotation.y = 0.08;
    renderStatic();
    return;
  }

  let t = 0;
  function animate() {
    t += 0.012;
    book.rotation.y = THREE.MathUtils.lerp(book.rotation.y, mouseX * 0.45, 0.05);
    book.rotation.x = THREE.MathUtils.lerp(book.rotation.x, -mouseY * 0.18, 0.05);
    book.position.y = Math.sin(t * 0.6) * 0.09;

    loosePages.forEach((p) => {
      p.rotation.x += p.userData.spin;
      p.rotation.y += p.userData.spin * 1.4;
      p.position.y += Math.sin(t + p.userData.bob) * 0.0016;
    });

    const pos = particleGeo.attributes.position;
    for (let i = 0; i < COUNT; i++) {
      let y = pos.getY(i) + 0.0042;
      if (y > 3.2) y = -3.2;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    particles.rotation.y += 0.0007;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    w = container.clientWidth;
    h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
