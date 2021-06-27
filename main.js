import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Sphere } from 'three';

//Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

//Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

//Lights

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// Helpers
/* const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement); */


function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star)

}

Array(200).fill().forEach(addStar);

//background

const spaceTexture = new THREE.TextureLoader().load('shunkang129/portfolio/nice4.jpg');
scene.background = spaceTexture;


//avatar
const kangTexture = new THREE.TextureLoader().load('shunkang129/portfolio/kang.jpg');

const kang = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: kangTexture })
)

scene.add(kang);


//moon
const moonTexture = new THREE.TextureLoader().load('shunkang129/portfolio/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('shunkang129/portfolio/normal.jpg');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
    })
);

scene.add(moon);

moon.position.z = 20;
moon.position.setX(-10);

kang.position.z = -5;
kang.position.x = 2;

//scroll animation
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    kang.rotation.y += 0.01;
    kang.rotation.z += 0.01;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.001;
    camera.position.y = t * -0.002;

}

document.body.onscroll = moveCamera;
moveCamera();

//animation loop
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    moon.rotation.x += 0.01;
    moon.rotation.y += 0.005;
    moon.rotation.z += 0.01;

    kang.rotation.x += 0.01;
    kang.rotation.y += 0.01;
    kang.rotation.z += 0.01;

    renderer.render(scene, camera);
}

animate();