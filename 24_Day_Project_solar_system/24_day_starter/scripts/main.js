document.addEventListener("DOMContentLoaded", function () {
    const massInput = document.getElementById("mass");
    const planetSelect = document.querySelector("select");
    const planetImage = document.querySelector(".planet-image");
    const description = document.querySelector(".description");
    const calculateButton = document.querySelector("button");

    // Gravitational acceleration on various planets (in m/s^2)
    const gravitationalAcceleration = {
        mercury: 3.7,
        venus: 8.87,
        earth: 9.81,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.69,
        neptune: 11.15,
    };

    // Planet details (name and image URL)
    const planetDetails = {
        mercury: { name: "Mercury", image: "images/mercury.png" },
        venus: { name: "Venus", image: "images/venus.png" },
        earth: { name: "Earth", image: "images/earth.png" },
        mars: { name: "Mars", image: "images/mars.png" },
        jupiter: { name: "Jupiter", image: "images/jupiter.png" },
        saturn: { name: "Saturn", image: "images/saturn.png" },
        uranus: { name: "Uranus", image: "images/uranus.png" },
        neptune: { name: "Neptune", image: "images/neptune.png" },
    };

    calculateButton.addEventListener("click", () => {
        const mass = parseFloat(massInput.value);
        const selectedPlanet = planetSelect.value;

        if (!isNaN(mass) && selectedPlanet !== "none") {
            const weightOnPlanet = (mass * gravitationalAcceleration[selectedPlanet]).toFixed(2);
            const planetInfo = planetDetails[selectedPlanet];

            planetImage.src = planetInfo.image;
            description.textContent = `The weight of the object on ${planetInfo.name} is approximately ${weightOnPlanet} N`; // Corrected the description text
        } else {
            description.textContent = "Please enter a valid mass and select a planet.";
        }
    });
});
