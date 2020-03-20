app.controller('MensageriaController', function ($scope,$http) {
    $scope.FiltrarDados = function () {
        $http.get('/Home/FiltrarDadosMensageria').then(function (result) {
            $scope.mensagens = [];
            $scope.mensagens = result.data;
        });
    };

    $scope.ObterTemplates = function () {
        $http.get('/Home/FiltrarDadosTemplate').then(function (result) {
            $scope.templates = result.data;
        });
    };

    $scope.FiltrarDados();
    $scope.ObterTemplates();

    $scope.editarMensageria = function (mensagem) {
        $scope.mensagem = mensagem;
        $("#btn-voltar").show();
        $("#btn-salvar").show();
        $('#btn-novo').hide();
        $('#ListagemMensageria').slideToggle();
        $('#formMensageria').slideToggle();
    };

    $scope.Create = function (mensagem,isValid) {
        if (isValid) {
            $http.post('/Home/CriarMensageria', { 'mensagem': mensagem }).then(function (result) {
                $scope.mensagens = result.data;
                $scope.FiltrarDados();
                $scope.mensagem = {};
                $('#ListagemMensageria').slideToggle();
                $('#formMensageria').slideToggle();
                $("#btn-voltar").hide();
                $("#btn-salvar").hide();
                $('#btn-novo').show();
            });
        };
    };

    $(document).ready(function () {
        $("#btn-voltar").hide();
        $("#btn-salvar").hide();

        $('#btn-novo').on('click', function () {
            $("#btn-voltar").show();
            $("#btn-salvar").show();
            $('#btn-novo').hide();
            $('#ListagemMensageria').slideToggle();
            $('#formMensageria').slideToggle();
        });

        $('#btn-voltar').on('click', function () {
            $("#btn-voltar").hide();
            $("#btn-salvar").hide();
            $('#btn-novo').show();
            $('#ListagemMensageria').slideToggle();
            $('#formMensageria').slideToggle();
        });
    });
});





