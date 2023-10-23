let lastModifiedString = new Date(document.lastModified);
oLastModif = lastModifiedString.toUTCString();
document.getElementById('lastModified').innerHTML = `Last modified: ${oLastModif}`;

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);



