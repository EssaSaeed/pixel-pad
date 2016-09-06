function loadPage(numberOfDivs){
    var $container = $('#container');
    var $cube = $('.cube');
    for(var i=0; i<numberOfDivs; i++){
        for(var j=0; j<numberOfDivs; j++){
            $container.append("<div class='cube'></div>");
        }
        $container.append("<br>");
    }
    var dimension = (100.0/numberOfDivs);
            $('.cube').width(dimension + "%");
            $('.cube').height(dimension + "%");
    
    $('.cube').hover(function(){
        $(this).addClass("highlightedCube");
    });
    
};

function refresh(){
    $('.cube').removeClass("highlightedCube");
};

function newGrid(){
    $('#container').empty();
    var gridsize = $("#gridSize").val();
    loadPage(gridsize);
}