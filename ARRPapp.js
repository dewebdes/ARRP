'use strict';

const ipozalApp = {};

/**
 * Toggles the visibility of the add location dialog box.
 */
function toggleAddDialog() {
//  weatherApp.addDialogContainer.classList.toggle('visible');
}

function init() {
  // Get the location list, and update the UI.
  weatherApp.selectedLocations = loadLocationList();
  updateData();

  // Set up the event handlers for all of the buttons.
  document.getElementById('butRefresh').addEventListener('click', updateData);
  document.getElementById('butAdd').addEventListener('click', toggleAddDialog);
  document.getElementById('butDialogCancel')
      .addEventListener('click', toggleAddDialog);
  document.getElementById('butDialogAdd')
      .addEventListener('click', addLocation);
}

//init();
navigator.serviceWorker.register('/arrp-service-worker.js', { scope: '/' })
        .then(function (registration)
        {
          console.log('Service worker registered successfully');
        }).catch(function (e)
        {
          console.error('Error during service worker registration:', e);
        });
