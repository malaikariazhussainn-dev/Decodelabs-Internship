document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // PLANET DATA
    // =========================================

    const planets = [

        {
            id: "mars",
            name: "Mars",
            tagline: "The Red Planet",
            description:
                "A cold desert world shaped by ancient volcanoes, valleys, and vast dust storms.",
            distance: "225M km",
            temperature: "−63°C",
            moons: "2",

            deepDive: {
                diameter: "6,779 km",
                gravity: "3.71 m/s²",
                day: "24h 37m",
                year: "687 days",
                atmosphere:
                    "A thin atmosphere composed primarily of carbon dioxide, with traces of nitrogen and argon.",
                surface:
                    "Rocky terrain, enormous volcanoes, ancient valleys, impact craters, and extensive dust plains.",
                exploration:
                    "Mars has been explored by orbiters, landers, and rovers, providing extensive information about its geological history."
            },

            missions: [
                {
                    name: "Perseverance",
                    agency: "NASA",
                    year: "2021",
                    status: "ACTIVE",
                    description:
                        "A rover investigating the Martian surface, ancient environments, and signs of past microbial life."
                },
                {
                    name: "Mars Express",
                    agency: "ESA",
                    year: "2003",
                    status: "ACTIVE",
                    description:
                        "An orbiter studying the Martian atmosphere, surface, geology, and subsurface."
                },
                {
                    name: "Curiosity",
                    agency: "NASA",
                    year: "2011",
                    status: "ACTIVE",
                    description:
                        "A rover exploring Gale Crater and investigating whether Mars ever had environments capable of supporting life."
                }
            ]
        },


        {
            id: "moon",
            name: "Moon",
            tagline: "Earth's Natural Satellite",
            description:
                "A silent rocky world that has orbited Earth for billions of years and shaped the rhythm of our planet.",
            distance: "384,400 km",
            temperature: "−173°C to 127°C",
            moons: "0",

            deepDive: {
                diameter: "3,474 km",
                gravity: "1.62 m/s²",
                day: "29.5 Earth days",
                year: "27.3 Earth days",
                atmosphere:
                    "The Moon has an extremely thin exosphere containing small amounts of gases such as helium, neon, and argon.",
                surface:
                    "A heavily cratered rocky surface covered with ancient highlands, dark maria, mountains, and fine lunar dust.",
                exploration:
                    "The Moon has been studied by orbiters, robotic spacecraft, and crewed missions, including the Apollo missions."
            },

            missions: [
                {
                    name: "Apollo 11",
                    agency: "NASA",
                    year: "1969",
                    status: "COMPLETED",
                    description:
                        "The first crewed mission to land humans on the lunar surface."
                },
                {
                    name: "Lunar Reconnaissance Orbiter",
                    agency: "NASA",
                    year: "2009",
                    status: "ACTIVE",
                    description:
                        "An orbiter mapping the Moon in detail and studying its surface environment."
                },
                {
                    name: "Chandrayaan-3",
                    agency: "ISRO",
                    year: "2023",
                    status: "COMPLETED",
                    description:
                        "A lunar mission that successfully achieved a soft landing near the Moon's south polar region."
                }
            ]
        },


        {
            id: "titan",
            name: "Titan",
            tagline: "Moon of Saturn",
            description:
                "A mysterious moon with a thick atmosphere, methane lakes, and an alien landscape.",
            distance: "1.2B km",
            temperature: "−179°C",
            moons: "0",

            deepDive: {
                diameter: "5,150 km",
                gravity: "1.35 m/s²",
                day: "15.9 Earth days",
                year: "29.5 Earth years",
                atmosphere:
                    "Titan has a dense atmosphere dominated by nitrogen, with methane and other complex organic compounds.",
                surface:
                    "Its surface contains methane and ethane lakes, vast dunes, icy mountains, river channels, and organic-rich terrain.",
                exploration:
                    "Titan has been explored primarily through the Cassini spacecraft and the Huygens probe, which landed on its surface."
            },

            missions: [
                {
                    name: "Huygens",
                    agency: "ESA / NASA / ASI",
                    year: "2005",
                    status: "COMPLETED",
                    description:
                        "The first spacecraft to land on a world in the outer Solar System, descending through Titan's atmosphere."
                },
                {
                    name: "Cassini–Huygens",
                    agency: "NASA / ESA / ASI",
                    year: "1997",
                    status: "COMPLETED",
                    description:
                        "A landmark mission that transformed our understanding of Saturn and its moons, including Titan."
                },
                {
                    name: "Dragonfly",
                    agency: "NASA",
                    year: "2028",
                    status: "PLANNED",
                    description:
                        "A planned rotorcraft mission designed to explore Titan's organic chemistry and habitability."
                }
            ]
        }

    ];


    // =========================================
    // SAVED WORLDS
    // =========================================

    let savedWorlds = [];

    try {

        savedWorlds =
            JSON.parse(
                localStorage.getItem("cosmosSavedWorlds")
            ) || [];

        if (!Array.isArray(savedWorlds)) {
            savedWorlds = [];
        }

    } catch (error) {

        savedWorlds = [];

    }


    // =========================================
    // GET ELEMENTS
    // =========================================

    const planetName =
        document.getElementById("planetName");

    const planetTagline =
        document.getElementById("planetTagline");

    const planetDescription =
        document.getElementById("planetDescription");


    const planetDistance =
        document.getElementById("planetDistance");

    const planetTemperature =
        document.getElementById("planetTemperature");

    const planetMoons =
        document.getElementById("planetMoons");


    const planetCounter =
        document.getElementById("planetCounter");


    const planetCards =
        document.querySelectorAll(".planet-card");


    const previousButton =
        document.getElementById("previousButton");


    const nextButton =
        document.getElementById("nextButton");


    const favoriteButton =
        document.getElementById("favoriteButton");


    const favoriteIcon =
        document.getElementById("favoriteIcon");


    const exploreButton =
        document.getElementById("exploreButton");


    const modeToggle =
        document.getElementById("modeToggle");

// =========================================
    // COMPARISON ELEMENTS
    // =========================================

    const compareWorldOne =
        document.getElementById("compareWorldOne");


    const compareWorldTwo =
        document.getElementById("compareWorldTwo");


    const comparisonTable =
        document.getElementById("comparisonTable");


    // =========================================
    // DEEP DIVE ELEMENTS
    // =========================================

    const deepDiameter =
        document.getElementById("deepDiameter");


    const deepGravity =
        document.getElementById("deepGravity");


    const deepDay =
        document.getElementById("deepDay");


    const deepYear =
        document.getElementById("deepYear");


    const deepAtmosphere =
        document.getElementById("deepAtmosphere");


    const deepSurface =
        document.getElementById("deepSurface");


    const deepExploration =
        document.getElementById("deepExploration");


    // =========================================
    // CURRENT PLANET
    // =========================================

    let currentPlanet = 0;


    // =========================================
    // UPDATE DEEP DIVE
    // =========================================

    function updateDeepDive(planet) {

        if (!planet || !planet.deepDive) {
            return;
        }


        if (deepDiameter) {
            deepDiameter.textContent =
                planet.deepDive.diameter;
        }


        if (deepGravity) {
            deepGravity.textContent =
                planet.deepDive.gravity;
        }


        if (deepDay) {
            deepDay.textContent =
                planet.deepDive.day;
        }


        if (deepYear) {
            deepYear.textContent =
                planet.deepDive.year;
        }


        if (deepAtmosphere) {
            deepAtmosphere.textContent =
                planet.deepDive.atmosphere;
        }


        if (deepSurface) {
            deepSurface.textContent =
                planet.deepDive.surface;
        }


        if (deepExploration) {
            deepExploration.textContent =
                planet.deepDive.exploration;
        }

    }


    // =========================================
    // MISSION DETAIL PANEL
    // =========================================

    const missionModal =
        document.getElementById("missionModal");


    const missionModalClose =
        document.getElementById("missionModalClose");


    const missionModalBackdrop =
        document.getElementById("missionModalBackdrop");


    const missionModalName =
        document.getElementById("missionModalName");


    const missionModalAgency =
        document.getElementById("missionModalAgency");


    const missionModalYear =
        document.getElementById("missionModalYear");


    const missionModalStatus =
        document.getElementById("missionModalStatus");


    const missionModalDescription =
        document.getElementById("missionModalDescription");


    // =========================================
    // OPEN MISSION
    // =========================================

    function openMissionDetails(mission) {

        if (!missionModal || !mission) {
            return;
        }


        if (missionModalName) {
            missionModalName.textContent =
                mission.name;
        }


        if (missionModalAgency) {
            missionModalAgency.textContent =
                mission.agency;
        }


        if (missionModalYear) {
            missionModalYear.textContent =
                mission.year;
        }


        if (missionModalStatus) {
            missionModalStatus.textContent =
                mission.status;
        }


        if (missionModalDescription) {
            missionModalDescription.textContent =
                mission.description;
        }


        missionModal.classList.add("is-open");


        document.body.classList.add("modal-open");

    }


    // =========================================
    // CLOSE MISSION
    // =========================================

    function closeMissionDetails() {

        if (!missionModal) {
            return;
        }


        missionModal.classList.remove(
            "is-open"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    // =========================================
    // CLOSE BUTTON
    // =========================================

    if (missionModalClose) {

        missionModalClose.addEventListener(
            "click",
            closeMissionDetails
        );

    }


    // =========================================
    // CLOSE BACKDROP
    // =========================================

    if (missionModalBackdrop) {

        missionModalBackdrop.addEventListener(
            "click",
            closeMissionDetails
        );

    }

// =========================================
    // ESC KEY
    // =========================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                missionModal &&
                missionModal.classList.contains("is-open")
            ) {

                closeMissionDetails();

            }

        }
    );


    // =========================================
    // MISSION ARCHIVE
    // =========================================

    function updateMissions(planet) {

        const missionTrack =
            document.getElementById("missionTrack");


        if (
            !missionTrack ||
            !planet ||
            !planet.missions
        ) {
            return;
        }


        missionTrack.innerHTML = "";


        planet.missions.forEach(
            (mission, index) => {

                const article =
                    document.createElement("article");


                article.className =
                    "mission-card";


                article.addEventListener(
                    "click",
                    () => {

                        openMissionDetails(
                            mission
                        );

                    }
                );


                article.innerHTML = `

                    <div class="mission-card-top">

                        <span class="mission-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <span class="mission-status">
                            ${mission.status}
                        </span>

                    </div>


                    <div class="mission-year">
                        ${mission.year}
                    </div>


                    <h3>
                        ${mission.name}
                    </h3>


                    <span class="mission-agency">
                        ${mission.agency}
                    </span>


                    <p>
                        ${mission.description}
                    </p>

                `;


                missionTrack.appendChild(
                    article
                );

            }
        );

    }


    // =========================================
    // WORLD COMPARISON
    // =========================================

    function updateComparison() {

        if (
            !compareWorldOne ||
            !compareWorldTwo ||
            !comparisonTable
        ) {
            return;
        }


        const worldOne =
            planets.find(
                planet =>
                    planet.id ===
                    compareWorldOne.value
            );


        const worldTwo =
            planets.find(
                planet =>
                    planet.id ===
                    compareWorldTwo.value
            );


        if (!worldOne || !worldTwo) {
            return;
        }


        const rows = [

            {
                label: "Diameter",
                one: worldOne.deepDive.diameter,
                two: worldTwo.deepDive.diameter
            },

            {
                label: "Gravity",
                one: worldOne.deepDive.gravity,
                two: worldTwo.deepDive.gravity
            },

            {
                label: "Day Length",
                one: worldOne.deepDive.day,
                two: worldTwo.deepDive.day
            },

            {
                label: "Year Length",
                one: worldOne.deepDive.year,
                two: worldTwo.deepDive.year
            },

            {
                label: "Temperature",
                one: worldOne.temperature,
                two: worldTwo.temperature
            },

            {
                label: "Distance",
                one: worldOne.distance,
                two: worldTwo.distance
            },

            {
                label: "Moons",
                one: worldOne.moons,
                two: worldTwo.moons
            }

        ];


        comparisonTable.innerHTML = `

            <div class="comparison-world-header">

                <div class="comparison-world">

                    <span>
                        WORLD 01
                    </span>

                    <h3>
                        ${worldOne.name}
                    </h3>

                </div>


                <div class="comparison-vs">
                    VS
                </div>


                <div class="comparison-world">

                    <span>
                        WORLD 02
                    </span>

                    <h3>
                        ${worldTwo.name}
                    </h3>

                </div>

            </div>


            <div class="comparison-rows">

                ${rows.map(row => `

                    <div class="comparison-row">

                        <span class="comparison-label">
                            ${row.label}
                        </span>

                        <strong>
                            ${row.one}
                        </strong>

                        <strong>
                            ${row.two}
                        </strong>

                    </div>

                `).join("")}

            </div>

        `;

    }


    if (compareWorldOne) {

        compareWorldOne.addEventListener(
            "change",
            updateComparison
        );

    }


    if (compareWorldTwo) {

        compareWorldTwo.addEventListener(
            "change",
            updateComparison
        );

    }


// =========================================
    // SAVE BUTTON STATE
    // =========================================

    function updateSaveButton(planet) {

        if (!favoriteButton || !planet) {
            return;
        }


        const isSaved =
            savedWorlds.includes(
                planet.id
            );


        favoriteButton.dataset.saved =
            isSaved ? "true" : "false";


        favoriteButton.classList.toggle(
            "is-saved",
            isSaved
        );


        favoriteButton.setAttribute(
            "aria-pressed",
            String(isSaved)
        );


        if (favoriteIcon) {

            favoriteIcon.textContent =
                isSaved ? "♥" : "♡";

        }


        const text =
            favoriteButton.querySelector(
                "span:last-child"
            );


        if (text) {

            text.textContent =
                isSaved
                    ? "Saved to archive"
                    : "Save to archive";

        }

    }


    // =========================================
    // TOGGLE SAVE
    // =========================================

    function toggleSave() {

        const planet =
            planets[currentPlanet];


        if (!planet) {
            return;
        }


        const existingIndex =
            savedWorlds.indexOf(
                planet.id
            );


        if (existingIndex === -1) {

            savedWorlds.push(
                planet.id
            );

        } else {

            savedWorlds.splice(
                existingIndex,
                1
            );

        }


        localStorage.setItem(
            "cosmosSavedWorlds",
            JSON.stringify(savedWorlds)
        );


        updateSaveButton(
            planet
        );

    }


    // =========================================
    // UPDATE MAIN INFORMATION
    // =========================================

    function updatePlanet(index) {

        // Loop around

        if (index < 0) {
            index =
                planets.length - 1;
        }


        if (index >= planets.length) {
            index = 0;
        }


        const planet =
            planets[index];


        currentPlanet =
            index;


        // -------------------------------------
        // Main content
        // -------------------------------------

        if (planetName) {

            planetName.textContent =
                planet.name;

        }


        if (planetTagline) {

            planetTagline.textContent =
                planet.tagline;

        }


        if (planetDescription) {

            planetDescription.textContent =
                planet.description;

        }


        // -------------------------------------
        // Statistics
        // -------------------------------------

        if (planetDistance) {

            planetDistance.textContent =
                planet.distance;

        }


        if (planetTemperature) {

            planetTemperature.textContent =
                planet.temperature;

        }


        if (planetMoons) {

            planetMoons.textContent =
                planet.moons;

        }


        // -------------------------------------
        // Counter
        // -------------------------------------

        if (planetCounter) {

            planetCounter.textContent =
                `${String(index + 1).padStart(2, "0")} / ${String(planets.length).padStart(2, "0")}`;

        }


        // -------------------------------------
        // Active destination
        // -------------------------------------

        planetCards.forEach(
            (card) => {

                const cardPlanet =
                    card.dataset.planet;


                card.classList.toggle(
                    "active",
                    cardPlanet === planet.id
                );

            }
        );


        // -------------------------------------
        // DEEP DIVE
        // -------------------------------------

        updateDeepDive(
            planet
        );


        // -------------------------------------
        // MISSION ARCHIVE
        // -------------------------------------

        updateMissions(
            planet
        );


        // -------------------------------------
        // SAVE STATE
        // -------------------------------------

        updateSaveButton(
            planet
        );

    }


    // =========================================
    // PLANET SELECTION
    // =========================================

    planetCards.forEach(
        (card) => {

            card.addEventListener(
                "click",
                () => {

                    const selectedId =
                        card.dataset.planet;


                    const selectedIndex =
                        planets.findIndex(
                            planet =>
                                planet.id ===
                                selectedId
                        );


                    if (selectedIndex !== -1) {

                        updatePlanet(
                            selectedIndex
                        );

                    }

                }
            );

        }
    );


    // =========================================
    // PREVIOUS
    // =========================================

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                updatePlanet(
                    currentPlanet - 1
                );

            }
        );

    }


    // =========================================
    // NEXT
    // =========================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                updatePlanet(
                    currentPlanet + 1
                );

            }
        );

    }


    // =========================================
    // SAVE TO ARCHIVE
    // =========================================

    if (favoriteButton) {

        favoriteButton.addEventListener(
            "click",
            toggleSave
        );

    }


    // =========================================
    // EXPLORE WORLD
    // =========================================

    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            () => {

                const archive =
                    document.getElementById(
                        "archive"
                    );


                if (archive) {

                    archive.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }

// =========================================
// DAY / NIGHT MODE
// =========================================

if (modeToggle) {

    const savedMode = localStorage.getItem("cosmosMode");

    if (savedMode === "day") {
        document.documentElement.classList.add("day-mode");
    } else {
        document.documentElement.classList.remove("day-mode");
    }

    function updateModeIcon() {

        const isDay =
            document.documentElement.classList.contains("day-mode");

        modeToggle.innerHTML = isDay
            ? '<span aria-hidden="true">☀</span>'
            : '<span aria-hidden="true">☾</span>';

        modeToggle.setAttribute(
            "aria-label",
            isDay ? "Switch to night mode" : "Switch to day mode"
        );

        modeToggle.setAttribute(
            "title",
            isDay ? "Switch to night mode" : "Switch to day mode"
        );
    }

    updateModeIcon();

    modeToggle.addEventListener("click", () => {

        const isDay =
            document.documentElement.classList.toggle("day-mode");

        localStorage.setItem(
            "cosmosMode",
            isDay ? "day" : "night"
        );

        updateModeIcon();
    });
}


    // =========================================
    // KEYBOARD PLANET NAVIGATION
    // =========================================

    document.addEventListener(
        "keydown",
        (event) => {

            // Don't interfere while typing

            const tag =
                document.activeElement
                    ?.tagName
                    ?.toLowerCase();


            if (
                tag === "input" ||
                tag === "textarea" ||
                tag === "select"
            ) {
                return;
            }


            if (event.key === "ArrowLeft") {

                updatePlanet(
                    currentPlanet - 1
                );

            }


            if (event.key === "ArrowRight") {

                updatePlanet(
                    currentPlanet + 1
                );

            }

        }
    );


    // =========================================
    // INITIALIZE
    // =========================================

    updatePlanet(0);

    updateComparison();

});

