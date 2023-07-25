<template>
  <div ref="canvasContainer" style="width: 100%; height: 100vh;"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvasContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  initScene();
});

const initScene = () => {
  // 获取容器元素
  const container = canvasContainer.value;
  if (!container) return;

  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // 添加灯光（可选）
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  // 导入并添加模型
  const loader = new GLTFLoader();
  const modelPath = 'models/youting.glb'; // 替换为实际模型文件路径
  loader.load(modelPath, (gltf) => {
    const model = gltf.scene;
    scene.add(model); // Use 'model' instead of 'ModelPage'
  });

  // 调整渲染器尺寸以适应整个容器
  const resizeRendererToDisplaySize = () => {
    const canvas = renderer.domElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  };

  // 添加交互控制器
  const controls = new OrbitControls(camera, renderer.domElement);

  // 渲染场景
  const animate = () => {
    requestAnimationFrame(animate);
    resizeRendererToDisplaySize(); // 确保渲染器尺寸适应容器
    controls.update(); // 更新相机控制
    renderer.render(scene, camera);
  };
  animate();
};
</script>

