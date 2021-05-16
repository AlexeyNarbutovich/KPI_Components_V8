const Tailor = require('./modules/Tailor');
const assert = require('assert');



describe('Taylor series', function(){
    let t = Tailor(5,4);
    it('should have a Taylor function defined', function(){
        assert.strictEqual(typeof Tailor, "function");
    });

    it('has to be equal to -5.6666', function(){
        assert.strictEqual(Tailor(5,4), -5.666666666666666);
    });
});