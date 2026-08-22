import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import n8nIcon from '../icons/n8n.png';
import makeIcon from '../icons/make.png';
import supabaseIcon from '../icons/supabase.png';
import airtableIcon from '../icons/airtable.png';
import hubspotIcon from '../icons/hubspot.png';
import pythonIcon from '../icons/python.png';
import claudeIcon from '../icons/claude.png';
import zapierIcon from '../icons/zapier.png';
import ghlIcon from '../icons/gohighlevel.png';
import googleIcon from '../icons/google-color.png';
import codexIcon from '../icons/codex.png';
import antigravityIcon from '../icons/antigravity.png';

const ACCENT = 0xff4103;
const BONE = 0xebf0ff;
const SIGNAL = 0x0055ff;

interface Interactive {
  object: THREE.Object3D;
  baseScale: number;
  current: number;
  floatPhase: number;
  spinSpeed: number;
  isSprite: boolean;
}

const mulberry32 = (seed: number) => {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const ThreeBackground: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x223344, 1.5));
    const key = new THREE.DirectionalLight(0xffe2c0, 1.6);
    key.position.set(4, 6, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(SIGNAL, 0.7);
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    const disposables: Array<{ dispose: () => void }> = [];

    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const sctx = spriteCanvas.getContext('2d');
    if (sctx) {
      const g = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(235, 240, 255, 1)');
      g.addColorStop(0.35, 'rgba(235, 240, 255, 0.55)');
      g.addColorStop(1, 'rgba(235, 240, 255, 0)');
      sctx.fillStyle = g;
      sctx.fillRect(0, 0, 64, 64);
    }
    const dotTexture = new THREE.CanvasTexture(spriteCanvas);
    disposables.push(dotTexture);

    const count = reduced ? 300 : 700;
    const positions = new Float32Array(count * 3);
    const rng = mulberry32(1337);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rng() - 0.5) * 24;
      positions[i * 3 + 1] = (rng() - 0.5) * 15;
      positions[i * 3 + 2] = (rng() - 0.5) * 10;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.07,
      map: dotTexture,
      color: BONE,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);
    disposables.push(pGeo, pMat);

    const interactives: Interactive[] = [];

    const shapeDefs = [
      { geometry: new THREE.IcosahedronGeometry(1.15, 1), color: ACCENT, x: -3.7, y: 1.3, z: -0.6, scale: 1, spin: 0.5 },
      { geometry: new THREE.TorusGeometry(0.85, 0.3, 20, 60), color: SIGNAL, x: 3.8, y: 1.7, z: -1.2, scale: 0.85, spin: 0.7 },
      { geometry: new THREE.OctahedronGeometry(0.95, 0), color: BONE, x: -2.7, y: -2.1, z: -0.2, scale: 0.7, spin: 0.9 },
      { geometry: new THREE.TorusKnotGeometry(0.6, 0.2, 140, 18), color: ACCENT, x: 3.0, y: -2.0, z: -0.6, scale: 0.8, spin: 0.8 },
    ];

    for (const d of shapeDefs) {
      const mat = new THREE.MeshStandardMaterial({
        color: d.color,
        roughness: 0.32,
        metalness: 0.25,
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(d.geometry, mat);
      mesh.position.set(d.x, d.y, d.z);
      mesh.scale.setScalar(d.scale);
      scene.add(mesh);
      disposables.push(d.geometry, mat);
      interactives.push({
        object: mesh,
        baseScale: d.scale,
        current: 1,
        floatPhase: Math.random() * Math.PI * 2,
        spinSpeed: d.spin,
        isSprite: false,
      });
    }

    const loader = new THREE.TextureLoader();
    const iconDefs = [
      { url: n8nIcon,       x: -4.4, y: 2.0, z: 0.5, scale: 0.95 },
      { url: makeIcon,      x: 4.5,  y: 2.0, z: 0.3, scale: 0.95 },
      { url: supabaseIcon,  x: -5.3, y: 0.2, z: -0.2, scale: 1.0 },
      { url: zapierIcon,    x: 5.3,  y: -0.2, z: -0.4, scale: 1.0 },
      { url: hubspotIcon,   x: -4.5, y: -2.0, z: 0.4, scale: 0.95 },
      { url: airtableIcon,  x: 4.6,  y: -2.0, z: 0.3, scale: 0.95 },
      { url: ghlIcon,       x: -2.8, y: 2.6, z: 0.6, scale: 0.85 },
      { url: googleIcon,    x: 2.9,  y: 2.7, z: 0.5, scale: 0.85 },
      { url: claudeIcon,    x: -2.6, y: -2.7, z: 0.2, scale: 0.85 },
      { url: pythonIcon,    x: 2.7,  y: -2.8, z: 0.1, scale: 0.85 },
      { url: codexIcon,     x: -0.3, y: 3.1, z: -0.3, scale: 0.75 },
      { url: antigravityIcon, x: 0.4, y: -3.0, z: -0.5, scale: 0.75 },
    ];

    iconDefs.forEach((d) => {
      loader.load(d.url, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const mat = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
          opacity: 0.9,
        });
        const sprite = new THREE.Sprite(mat);
        sprite.position.set(d.x, d.y, d.z);
        sprite.scale.setScalar(d.scale);
        scene.add(sprite);
        disposables.push(texture, mat);
        interactives.push({
          object: sprite,
          baseScale: d.scale,
          current: 1,
          floatPhase: Math.random() * Math.PI * 2,
          spinSpeed: 0,
          isSprite: true,
        });
      });
    });

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(container);

    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const pointer = new THREE.Vector2();
    const target = new THREE.Vector2();
    let hovered: Interactive | null = null;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1,
      );
      ndc.copy(target);
      raycaster.setFromCamera(ndc, camera);
      const hits = raycaster.intersectObjects(interactives.map((i) => i.object), false);
      hovered = hits.length
        ? interactives.find((i) => i.object === hits[0].object) || null
        : null;
      renderer.domElement.style.cursor = hovered ? 'pointer' : '';
    };

    const onPointerLeave = () => {
      target.set(0, 0);
      hovered = null;
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerleave', onPointerLeave);

    const timer = new THREE.Timer();
    let raf = 0;
    let dead = false;

    const animate = () => {
      if (dead) return;
      raf = requestAnimationFrame(animate);
      if (!visible) return;
      timer.update();
      const t = timer.getElapsed();

      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;
      camera.position.x = pointer.x * 0.9;
      camera.position.y = -pointer.y * 0.7;
      camera.lookAt(0, 0, 0);

      points.rotation.y = t * 0.02;
      points.position.y = Math.sin(t * 0.28) * 0.35;

      for (const item of interactives) {
        const hoverScale = item === hovered ? 1.18 : 1;
        item.current += (hoverScale - item.current) * 0.1;
        const float = 1 + Math.sin(t * 0.8 + item.floatPhase) * 0.06;
        item.object.scale.setScalar(item.baseScale * item.current * float);
        if (!item.isSprite) {
          const mesh = item.object as THREE.Mesh;
          mesh.rotation.y = t * item.spinSpeed * 0.35 + item.floatPhase;
          mesh.rotation.x = t * item.spinSpeed * 0.2 + item.floatPhase * 2;
        }
      }

      renderer.render(scene, camera);
    };

    if (reduced) {
      renderer.render(scene, camera);
    } else {
      timer.update();
      raf = requestAnimationFrame(animate);
    }

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      resizeObserver.disconnect();
      io.disconnect();
      for (const d of disposables) d.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0 }}
    />
  );
};

export default ThreeBackground;
