// this
var SuperHeroDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="assets/ryu.png" class="hero">');
  //this.$node = $('<span class="hero"></span>');
};

SuperHeroDancer.prototype = Object.create(makeDancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;
SuperHeroDancer.prototype.oldStep = SuperHeroDancer.prototype.step;
SuperHeroDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  SuperHeroDancer.prototype.$node = $('<img src = assets/zangief.png class="hero">');
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

