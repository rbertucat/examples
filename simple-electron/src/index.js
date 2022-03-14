import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.axes.setAxes();
viewer.grid.setGrid();

const input = document.getElementById('file-input');

input.onchange = async (changed) => {
	const file = changed.target.files[0];
	const ifcURL = URL.createObjectURL(file);
	const model = await viewer.IFC.loadIfcUrl(ifcURL);
	await viewer.shadowDropper.renderShadow(model.modelID);
};