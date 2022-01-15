<template>
  <div>
    <div class="test">
    <h1>hello world</h1>
    </div>

    <div id="canvas">

    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
// import * as THREE from '../build/three.module.js';
import Stats from 'three/examples/jsm/libs/stats.module'
export default {
  data() {
    return {
      // set default
      camera: null,
      scene: null,
      renderer: null,
      container: null,
      stats: null,
      // set mesh / gltf
      mesh: null,
      // set light

    }
  },
  methods: {
    init: function() {




      this.container = document.getElementById( 'canvas' );
      document.body.appendChild( this.container );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( window.innerWidth, window.innerHeight ); 
      this.container.appendChild( this.renderer.domElement );

			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			let geometry = new THREE.BoxGeometry();
			let material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
			this.mesh = new THREE.Mesh( geometry, material );
			this.scene.add( this.mesh );

			this.camera.position.z = 5;
      
        //light
      var pointLight =
        new THREE.PointLight(0xFFFFFF);

      // set its position
      pointLight.position.x = 10;
      pointLight.position.y = 50;
      pointLight.position.z = 130;
      this.scene.add(pointLight)


        //stats
			this.stats = new Stats();
			this.container.appendChild( this.stats.dom );

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
        this.stats.update()
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
}

</script>

<style>
@import '../styles/home.css';
</style>
