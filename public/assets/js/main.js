document.addEventListener("DOMContentLoaded", function() {
    // Adjusts the height of the .table according to the contents within it
    const groups = document.querySelectorAll('.table ');
    let maxHeight = 0;
    groups.forEach(g => {
        maxHeight = Math.max(maxHeight, g.offsetHeight);
    });
    groups.forEach(g => {
        g.style.height = maxHeight + "px";
    });

    // Legend Filter
    const alkali = document.querySelector('.filter-alkali_metal');
    const alkalineEarth = document.querySelector('.filter-alkaline_earth_metal');
    const transition = document.querySelector('.filter-transition_metal');
    const postTransition = document.querySelector('.filter-post_transition_metal');
    const nobleGas = document.querySelector('.filter-noble_gas');
    const reactiveNonmetal = document.querySelector('.filter-reactive_nonmetal');
    const metalloid = document.querySelector('.filter-metalloids');
    const lanthanoid = document.querySelector('.filter-lanthanoids');
    const actinoid = document.querySelector('.filter-actinoids');
    const synthetic = document.querySelector('.filter-synthetic_elements');
    const solid = document.querySelector('.filter-solid');
    const liquid = document.querySelector('.filter-liquid');
    const gas = document.querySelector('.filter-gas');
    const solidElements = document.querySelectorAll(".solid");
    const liquidElements = document.querySelectorAll(".liquid");
    const gaseousElements = document.querySelectorAll(".gas");
    const alkaliMetals = document.querySelectorAll(".alkali_metal");
    const metalloids = document.querySelectorAll(".metalloids");
    const lanthanoids = document.querySelectorAll(".lanthanoids");
    const actinoids = document.querySelectorAll(".actinoids");
    const syntheticElements = document.querySelectorAll(".synthetic_elements");
    const reactiveNonmetals = document.querySelectorAll(".reactive_nonmetal");
    const nobleGases = document.querySelectorAll(".noble_gas");
    const alkalineEarthMetals = document.querySelectorAll(".alkaline_earth_metal");
    const transitionMetals = document.querySelectorAll(".transition_metal");
    const postTransitionMetals = document.querySelectorAll(".post_transition_metal");
    const reset = document.querySelector('.filter-reset');
    const allElements = document.querySelectorAll('.element_container');

    alkali.addEventListener("click", alkaliClicked);
    function alkaliClicked(ac) {
        alkaliMetals.forEach(element => {
            element.style.opacity = "1";
        });
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    alkalineEarth.addEventListener("click", alkalineEarthClicked);
    function alkalineEarthClicked(ace) {
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    transition.addEventListener("click", transitionClicked);
    function transitionClicked(tc) {
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    postTransition.addEventListener("click", postTransitionClicked);
    function postTransitionClicked(ptc) {
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    nobleGas.addEventListener("click", nobleGasClicked);
    function nobleGasClicked(ngc) {
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "1";
        });
    }

    reactiveNonmetal.addEventListener("click", reactiveNonmetalClicked);
    function reactiveNonmetalClicked(rnc) {
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    metalloid.addEventListener("click", metalloidClicked);
    function metalloidClicked(mc) { 
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    lanthanoid.addEventListener("click", lanthanoidClicked);
    function lanthanoidClicked(lc) { 
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    actinoid.addEventListener("click", actinoidClicked);
    function actinoidClicked(ac) {
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    synthetic.addEventListener("click", syntheticClicked);
    function syntheticClicked(sc) { 
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
    }

    solid.addEventListener("click", solidClicked);
    function solidClicked(sc) {
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
        solidElements.forEach(element => {
            element.style.opacity = "1";
        });
    }

    liquid.addEventListener("click", liquidClicked);
    function liquidClicked(lc) { 
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
        liquidElements.forEach(element => {
            element.style.opacity = "1";
        });
    }

    gas.addEventListener("click", gasClicked);
    function gasClicked(gc) { 
        console.log("Transition metals clicked");
        alkalineEarthMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        alkaliMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        transitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        postTransitionMetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        metalloids.forEach(element => {
            element.style.opacity = "0.1";
        });
        lanthanoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        actinoids.forEach(element => {
            element.style.opacity = "0.1";
        });
        syntheticElements.forEach(element => {
            element.style.opacity = "0.1";
        });
        reactiveNonmetals.forEach(element => {
            element.style.opacity = "0.1";
        });
        nobleGases.forEach(element => {
            element.style.opacity = "0.1";
        });
        gaseousElements.forEach(element => {
            element.style.opacity = "1";
        });
    }

    reset.addEventListener("click", resetFilters);

    function resetFilters() {
        allElements.forEach(element => {
            element.style.opacity = "1";
        });
    }
});