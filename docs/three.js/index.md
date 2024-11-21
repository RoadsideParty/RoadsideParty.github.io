# three.js

由上至下,由外到里分为

## scene 场景

```js
// 实例化一个场景,背景颜色为白色
const scene = new THREE.Scene()
scene.background = new THREE.Color("white")
```

## camera 相机

```js
// 实例化一个透视相机(相机种类很多,后续更新)参数分别是fov aspect near far
const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100000)
camera.position.set(0, 0, 5000)
// 相机看相哪边
camera.lookAt(0, 0, 0)
```

<Image name="1.webp" />
## light 光源

```js
// 实例化一个平行光源 参数 灯光颜色 灯光强度
const light = new THREE.DirectionalLight("white", 3)
light.position.set(0, 5000, 0)
scene.add(light)
```

## model 模型

模型有很多种,具体根据模型的不同,去找对应的模型加载器

## material 材质 & texture 纹理

<Image name="2.webp"/>

## renderer 渲染器

```js
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.render(scene, camera)
document.querySelector("#my-three").appendChild(renderer.domElement)
```

## 更多

...
