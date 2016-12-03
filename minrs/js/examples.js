window.onload = function () {
    var slider_1    = new MINRS.Slider('rsSlider-1', {
        dual: false,
        end: 400,
        start: 0,
        min: 0,
        max: 0
    });


    var slider_2    = new MINRS.Slider('rsSlider-2', {
        dual: true,
        end: 600,
        start: 200,
        min: 240,
        max: 480,
        ruler: true
    });
};