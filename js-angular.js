//servizio interval orario + evento click home.html
var app = angular.module('myApp3', []);
app.controller('tempo', function($scope, $interval) {
	$scope.orario = new Date().toLocaleTimeString();
	$interval(function() {
	$scope.orario = new Date().toLocaleTimeString(); }, 1000);
});	
app.controller('conteggio', function($scope) {
	$scope.count = 0;
});

//validazione form di registrazione pagina login.html
var app = angular.module('MyApp', []);
app.controller('ValidaRegistra', function($scope) {
	$scope.name = 'Mario';
	$scope.cogn = 'Rossi';	
	$scope.email = 'example@gmail.com';
});
app.controller('tempo', function($scope, $interval) {
	$scope.orario = new Date().toLocaleTimeString();
	$interval(function() {
	$scope.orario = new Date().toLocaleTimeString(); }, 1000);
});


//evento mostra e nascondi lista al click + servizio $location Orientamento.html 
var app = angular.module('myApp1', []);
app.controller('myCtrl', function($scope) {
	$scope.showMe = false;
	$scope.MyChoice = function() {
		$scope.showMe = !$scope.showMe;
	}
});	
app.controller('tempo', function($scope, $interval) {
	$scope.orario = new Date().toLocaleTimeString();
	$interval(function() {
	$scope.orario = new Date().toLocaleTimeString(); }, 1000);
});
app.controller('service', function($scope, $location) {
	$scope.myUrl = $location.absUrl();
});


//filtro ordina tabella doveStudiare.html 
var app = angular.module('myApp2', []);
app.controller('ordina', function($scope) {
	$scope.sedi = [
	{citta: 'TORINO NORD', luogo: 'Campus Luigi Einaudi (CLE)'},
	{citta: 'TORINO NORD', luogo: 'Complesso "Pier della Francesca"'},
	{citta: 'TORINO CENTRO', luogo: 'Palazzo del Rettorato'},
	{citta: 'TORINO CENTRO', luogo: 'Palazzo Badini Canfalonieri'},
	{citta: 'TORINO CENTRO', luogo: 'Palazzo Lionello Venturi'},
	{citta: 'TORINO CENTRO', luogo: 'Palazzo Campana'},
	{citta: 'TORINO CENTRO', luogo: 'Palazzo Nuovo'},
	{citta: 'TORINO CENTRO', luogo: 'Dipartimento di Scienze della Vita e Biologia dei Sistemi'},
	{citta: 'TORINO SUD', luogo: 'Scuola di Management ed Economia'},
	{citta: 'TORINO SUD', luogo: 'Scuola di Scienze della Natura'},
	{citta: 'TORINO SUD', luogo: 'Scuola di Biotecnologie'},
	{citta: 'TORINO SUD', luogo: 'Scuola di Medicina Molinette'},
	{citta: 'GRUSGLIASCO', luogo: 'Campus Universitario di Grugliasco'},
	{citta: 'ORBASSANO', luogo: 'Scuola di Medicina San Luigi'}
	];
	$scope.ordinamento = function(x) {
	$scope.myOrderBy = x; }
});
app.controller('tempo', function($scope, $interval) {
	$scope.orario = new Date().toLocaleTimeString();
	$interval(function() {
	$scope.orario = new Date().toLocaleTimeString(); }, 1000);
});

	