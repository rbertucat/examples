<template>
    <section>
        <input type="file" id="file-input" />
        <p id="properties-text">
            ID: 
            {{ entityData }}
        </p>
        <div id="model" />
    </section>
</template>

<script>
import { IfcViewerAPI } from 'web-ifc-viewer';

export default {
    name: 'Model',
    props: ['token', 'projectId', 'discipline'],
    data() {
        return {
            entityData: '',
        }
    },
    methods: {
    },
    mounted() {

      const container = document.getElementById('model');
      const viewer = new IfcViewerAPI({ container });
      viewer.axes.setAxes();
      viewer.grid.setGrid();
      viewer.IFC.setWasmPath('../IFCjs/');

      const input = document.getElementById("file-input");

      input.addEventListener("change",

          async (changed) => {
            const file = changed.target.files[0];
            const ifcURL = URL.createObjectURL(file);
            await viewer.IFC.loadIfcUrl(ifcURL);
          },

          false
      );
    },
}
</script>

<style>
#model {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100% !important;
    height: 100% !important;
}

#file-input {
    position: absolute;
    left: 0%;
    top: 0%;
    z-index: 100;
}

#properties-text {
    position: absolute;
    left: 0%;
    bottom: 0%;
    z-index: 100;
}
</style>
