suite('Deputat', function() {
    test('Should be present', function() {
        assert.ok(window.Deputat);
    });
    test('Deputat view exists', function() {
        assert.ok(window.Deputat.views.deputat)
    });
});