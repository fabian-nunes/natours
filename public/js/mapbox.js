/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFiaWFubnVuZXMiLCJhIjoiY2swdngweXNoMDhmbzNjcGZmdHk5cGI3NSJ9.Mu8vVgt6W94NFdMm2ek4SQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/fabiannunes/ck0vxkpjg2nkr1cp4giay999i',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      right: 100,
      left: 100
    }
  });
};

