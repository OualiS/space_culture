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
import Stats from 'three/examples/jsm/libs/stats.module'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
      earth: null,
      // set light

    }
  },
  methods: {
    init: function() {



        //setup
      this.container = document.getElementById( 'canvas' );
      document.body.appendChild( this.container );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( window.innerWidth, window.innerHeight ); 
      this.container.appendChild( this.renderer.domElement );

			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			this.camera.position.z = 5;

// /* ////////////////////////////////////////////////////////////////////////// */
        // green prototype mesh
			let geometry = new THREE.BoxGeometry();
			let material = new THREE.MeshLambertMaterial( { color: 0x00ff005a } );
			this.mesh = new THREE.Mesh( geometry, material );
			this.scene.add( this.mesh );


// /* ////////////////////////////////////////////////////////////////////////// */
        //light
      var pointLight =
        new THREE.PointLight(0xFFFFFF);

// /* ////////////////////////////////////////////////////////////////////////// */
      // set its position
      pointLight.position.x = 10;
      pointLight.position.y = 50;
      pointLight.position.z = 130;
      this.scene.add(pointLight)

// /* ////////////////////////////////////////////////////////////////////////// */
        //stats
      this.stats = new Stats();
			this.container.appendChild( this.stats.dom );

// /* ////////////////////////////////////////////////////////////////////////// */
        //gltf loader
            // let loader = new GLTFLoader();
            // loader.load( '../assets/earth.gltf', function ( gltf ) {

            //   this.scene.add( gltf.scene );
            //   gltf.scene.scale.set(2, 2 , 2)
            //   }, 
            // );





      // let loader = new GLTFLoader();
      // loader.crossOrigin = true;
      // loader.load(
      //   "../chair.glb",
      //   //https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf",
      //   function (gltf) {
      //     let object = gltf.scene;
      //     object.traverse((e) => {
      //       if (e.isMesh === true) {
      //         e.castShadow = true;
      //         e.recieveShadow = true;
      //       }
      //     });
      //     object.scale.set(2, 2, 2);
      //     object.position.set(0, -1, 0);
      //     object.rotation.y = Math.PI;

      //     for (let obj of INITIAL_MAP) {
      //       initColor(object, obj.childID, obj.mtl);
      //     }

      //     scene.add(object);
      //   }
      // );



    },
  
// /* ////////////////////////////////////////////////////////////////////////// */
      //animate
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.001;
        this.mesh.rotation.y += 0.00
        1;
        this.renderer.render(this.scene, this.camera);
        this.stats.update()
    },
    gltf: function() {
      var loader = new GLTFLoader();
      loader.load( '../assets/earth.gltf', function ( gltf )
        {
          console.log(gltf)
          console.log(gltf.scene)
          var earth = gltf.scene;  // earth 3D object is loaded
          earth.scale.set(2, 2, 2);
          earth.position.y = 4;
          this.scene.add(earth);
          console.log('log for earth =>' +earth)
      
        } 
      );
    }

  },
  mounted() {
    this.init()
    this.animate()
    this.gltf()
  },
}

</script>

<style>
@import '../styles/home.css';
</style>
