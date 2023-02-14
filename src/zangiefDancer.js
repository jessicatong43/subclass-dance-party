var MakeZangiefDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="assets/zangief.png" class="zangief">');

};

MakeZangiefDancer.prototype = Object.create(makeDancer.prototype);
MakeZangiefDancer.prototype.constructor = MakeZangiefDancer;
MakeZangiefDancer.prototype.oldStep = MakeZangiefDancer.prototype.step;
MakeZangiefDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

