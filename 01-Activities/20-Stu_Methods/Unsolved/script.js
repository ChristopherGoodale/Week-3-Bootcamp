var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift('Canis Major');
console.log(constellations);
planets.pop();
console.log(planets);
let galaxy = constellations.concat(planets);
console.log(galaxy);
console.log(planets[2].toUpperCase())