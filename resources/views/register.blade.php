<!DOCTYPE html>
<html>
<head>
	<link href="{{ asset('css/registro.css') }}" rel="stylesheet" type="text/css"/>
	<title>Formulario de registro</title>
</head>
<body>
	<h2>Registro</h2>
	<form>
		<label for="email">Correo electrónico:</label>
		<input type="email" id="emailreg" name="email" required>
		<br>
		<label for="password">Contraseña:</label>
		<input type="password" id="passwordreg" name="password" required>
		
	</form>
    <button type="submit" id="registro">Registrarse</button>
    <p>¿Ya tienes una cuenta? <a href="{{ url('/') }}">Inicia sesión aquí</a>.</p>
</body>
<script type="module" src="{{ asset('js/register.js') }}"></script>
</html>
