<template>
  <div>

    <h1>hello world</h1>

    <div id="canvas">
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( this.renderer.domElement );

			let geometry = new THREE.BoxGeometry();
			let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			this.mesh = new THREE.Mesh( geometry, material );
			this.scene.add( this.mesh );

			this.camera.position.z = 5;
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
}


</script>