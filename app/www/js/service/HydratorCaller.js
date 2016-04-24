var HydratorCaller = {
    hydrate: function (elem, appender, template, toHide, onSuccess) {
        if(elem.length == 0) {
            appender.append($('<div>').load("./views/" + template, onSuccess));
        }

        toHide.hide();
        elem.show();
    }
};