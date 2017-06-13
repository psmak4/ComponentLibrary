var Modal = (function () {
    function Modal(modalId) {
        var _this = this;
        this.RegisterClosers = function (modalId) {
            var closers = document.querySelectorAll(modalId + ' [data-modal-close]');
            for (var i = 0; i < closers.length; i++) {
                closers[i].addEventListener('click', _this.Close, false);
            }
        };
        this.RegisterOpeners = function (modalId) {
            var openers = document.querySelectorAll('[data-modal-open="' + modalId + '"]');
            for (var i = 0; i < openers.length; i++) {
                openers[i].addEventListener('click', _this.Open, false);
            }
        };
        this.Open = function (event) {
            if (event)
                event.preventDefault();
            _this.modalDom.classList.remove('modal--hidden');
        };
        this.Close = function (event) {
            if (event)
                event.preventDefault();
            _this.modalDom.classList.add('modal--hidden');
        };
        this.modalDom = document.querySelector(modalId);
        this.RegisterClosers(modalId);
        this.RegisterOpeners(modalId);
    }
    return Modal;
}());
//# sourceMappingURL=cl.js.map