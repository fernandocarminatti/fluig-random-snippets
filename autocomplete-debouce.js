function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const debouncedSearch = debounce(function (term, response) {
    if (!term || term.length < 3) {
        response([]);
        return;
    }
    var c1 = DatasetFactory.createConstraint("colleagueName", term, term, ConstraintType.MUST);
    var dataset = DatasetFactory.getDataset(
        "colleague",
        null,
        [c1],
        null
    );
    var data = dataset.values.map(function (item) {
        return {
            value: item.colleagueName,
            label: item.colleagueName
        };
    });
    response(data);
}, 500);

FLUIGC.autocomplete('#userSearch', {
    source: function (request, response) {
        debouncedSearch(request.term, response);
    },
    minLength: 3
});
