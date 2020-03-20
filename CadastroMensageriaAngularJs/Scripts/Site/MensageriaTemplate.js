app.controller('MensageriaTemplateController', function ($scope, $http) {
    $scope.FiltrarDados = function () {
        $http.get('/Home/FiltrarDadosTemplate').then(function (result) {
            $scope.templates = result.data;
        });
    };

    $scope.FiltrarDados();

    $scope.Create = function (tempalte, isValid) {

        if (isValid) {
            $scope.arquivo = $scope.file;

            $http.post('/Home/CriarMensageriaTemplate', { 'template': tempalte,'file':$scope.file }).then(function (result) {
                $scope.file = {};
                $scope.template = {};
                $('#ListagemTemplate').slideToggle();
                $('#formTemplate').slideToggle();
                $("#btn-voltar").hide();
                $("#btn-salvar").hide();
                $('#btn-novo').show();
            });
            $scope.FiltrarDados();
        }
    };

    $scope.editarTemplate = function(template){
        $scope.template = template;
        $("#btn-voltar").show();
        $("#btn-salvar").show();
        $('#btn-novo').hide();
        $('#ListagemTemplate').slideToggle();
        $('#formTemplate').slideToggle();
    };


    $scope.uploadFile = function (element) {
        $scope.file = element;
        console.log($scope.user);
    };

    $(document).ready(function () {
        $("#btn-voltar").hide();
        $("#btn-salvar").hide();

        $('#btn-novo').on('click', function () {
            $("#btn-voltar").show();
            $("#btn-salvar").show();
            $('#btn-novo').hide();
            $('#ListagemTemplate').slideToggle();
            $('#formTemplate').slideToggle();
        });

        $('#btn-voltar').on('click', function () {
            $("#btn-voltar").hide();
            $("#btn-salvar").hide();
            $('#btn-novo').show();
            $('#ListagemTemplate').slideToggle();
            $('#formTemplate').slideToggle();
        });
    });
});



app.directive('validFile', [function () {
    return {
        require: 'ngModel',
        scope: { format: '@', upload: '&upload' },
        link: function (scope, el, attrs, ngModel) {
            // change event is fired when file is selected
            el.bind('change', function (event) {
                console.log(event.target.files[0]);
                scope.upload({ file: event.target.files[0] });
                scope.$apply(function () {
                    ngModel.$setViewValue(el.val());
                    ngModel.$render();
                });
            })
        }
    }
}]);




