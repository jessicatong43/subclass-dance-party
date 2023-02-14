$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log('this,data', this);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log('dancerMakerFunction', dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addHeroButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    console.log('this in addHeroButton', this)
    var heroMakerFunctionName = $(this).data('hero-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var heroMakerFunction = window[heroMakerFunctionName];
    console.log('heroMakerFunction', heroMakerFunction);
    // make a dancer with a random position

    var hero = new heroMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(hero.$node);
  });

  $('.addZangiefButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var zangiefMakerFunctionName = $(this).data('zangief-maker-function-name');

    // get the maker function for the kind of zangief we're supposed to make
    var zangiefMakerFunction = window[zangiefMakerFunctionName];
    // make a zangief with a random position

    var zangief = new zangiefMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log('zangief.$node', zangief.$node);
    $('body').append(zangief.$node);
  });
});

