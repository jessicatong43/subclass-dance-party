describe('blinkyDancer', function() {

  var blinkyDancer, clock, heroDancer, zangiefDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps); // added the key word new
    heroDancer = new SuperHeroDancer(40, 90, timeBetweenSteps); // added the key word new
    zangiefDancer = new MakeZangiefDancer(10, 20, timeBetweenSteps);
  });


  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });

  });
  describe('Super Hero Dancer', function() {
    it('should call step at least once per second', function() {
      sinon.spy(heroDancer, 'step');
      expect(heroDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(heroDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(heroDancer.step.callCount).to.be.equal(2);
    });

  });

  describe('Zangief Dancer', function() {
    it('should call step at least once per second', function() {
      sinon.spy(zangiefDancer, 'step');
      expect(zangiefDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps);

      expect(zangiefDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(zangiefDancer.step.callCount).to.be.equal(2);
    });

  });
});
