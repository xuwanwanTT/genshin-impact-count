import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class Model3d extends React.Component {

  componentDidMount() {
    // new renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // 设置渲染器的像素比例 window.devicePixelRatio 浏览器的像素比例
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置色彩空间，确保 web 呈现和模型一致
    renderer.outputEncoding = THREE.sRGBEncoding;

    this.domWrap.appendChild(renderer.domElement);

    // new scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8d3124);
    this.scene = scene;

    // new camera
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);
    this.camera = camera;

    // new controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    // 右键拖拽
    controls.enablePan = true;
    // damping (阻尼) 缓动效果
    controls.enableDamping = true;
  }

  render() {
    return <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1
    }} ref={refs => this.domWrap = refs} />
  }
};

export default Model3d;