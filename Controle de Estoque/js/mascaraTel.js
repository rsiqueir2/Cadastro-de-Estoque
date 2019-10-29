function formataTelefone(inputCelular) {
    function trata(valor, isOnBlur) {
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

        if (isOnBlur) {
            valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
        } else {
            valor = valor.replace(/(\d)(\d{3})$/, "$1-$2");
        }
        return valor;
    }
    inputCelular.onkeypress = function (evt) {
        var code = (window.event) ? window.event.keyCode : evt.which;
        var valor = this.value

        if (code > 57 || (code < 48 && code != 8)) {
            return false;
        } else {
            this.value = trata(valor, false);
        }
    }
    inputCelular.onblur = function () {
        var valor = this.value;
        if (valor.length < 14) {
            this.value = ""
        } else {
            this.value = trata(this.value, true);
        }
    }
}