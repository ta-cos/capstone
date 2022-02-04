import * as THREE from 'https://cdn.skypack.dev/three';

document.addEventListener("DOMContentLoaded", () => {
    canvas.style.opacity = 1;
});

// Texture Loader
const loader = new THREE.TextureLoader()
const blinky = loader.load('./images/blinky.png')
const inky = loader.load('./images/inky.png')
const pinky = loader.load('./images/pinky.png')
const clyde = loader.load('./images/clyde.png')

// Canvas
const canvas = document.getElementById("canvas");

// Scene
const scene = new THREE.Scene()

// Objects or Geometry
// const geometry = new THREE.SphereGeometry(15, 32, 16);/
const blinkyGeometry = new THREE.BufferGeometry;
const inkyGeometry = new THREE.BufferGeometry;
const pinkyGeometry = new THREE.BufferGeometry;
const clydeGeometry = new THREE.BufferGeometry;

const count = 500;
const blinkyPosArray = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++) {
    blinkyPosArray[i] = (Math.random() - 0.5) * 5

}

const inkyPosArr = new Float32Array(count * 3)
for (let i = 0; i < count * 2; i++) {
    inkyPosArr[i] = (Math.random() - 0.5) * 5

}

const pinkyPosArr = new Float32Array(count * 3)
for (let i = 0; i < count * 2; i++) {
    pinkyPosArr[i] = (Math.random() - 0.5) * 5

}

const clydePosArr = new Float32Array(count * 3)
for (let i = 0; i < count * 2; i++) {
    clydePosArr[i] = (Math.random() - 0.5) * 5

}

blinkyGeometry.setAttribute('position', new THREE.BufferAttribute(blinkyPosArray, 3))
inkyGeometry.setAttribute('position', new THREE.BufferAttribute(inkyPosArr, 3))
pinkyGeometry.setAttribute('position', new THREE.BufferAttribute(pinkyPosArr, 3))
clydeGeometry.setAttribute('position', new THREE.BufferAttribute(clydePosArr, 3))




// Materials
const blinkyMaterial = new THREE.PointsMaterial({ size: 0.02, map: blinky, transparent: true })
const inkyMaterial = new THREE.PointsMaterial({ size: 0.02, map: inky, transparent: true })
const pinkyMaterial = new THREE.PointsMaterial({ size: 0.02, map: pinky, transparent: true })
const clydeMaterial = new THREE.PointsMaterial({ size: 0.02, map: clyde, transparent: true })



// Mesh
// const sphere = new THREE.Points(geometry, material)
const blinkyMesh = new THREE.Points(blinkyGeometry, blinkyMaterial)
const inkyMesh = new THREE.Points(inkyGeometry, inkyMaterial)
const pinkyMesh = new THREE.Points(pinkyGeometry, pinkyMaterial)
const clydeMesh = new THREE.Points(clydeGeometry, clydeMaterial)

scene.add(blinkyMesh, inkyMesh, pinkyMesh, clydeMesh)

// Add
// scene.add(sphere)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// ----- Camera -----
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime
    blinkyMesh.rotation.y = .1 * (elapsedTime)
    inkyMesh.rotation.y = .04 * (elapsedTime)
    pinkyMesh.rotation.y = -.04 * (elapsedTime)
    clydeMesh.rotation.y = -.1 * (elapsedTime)



    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
