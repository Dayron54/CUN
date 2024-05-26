<!DOCTYPE html>
<html>
<head>
    <link href="{{ asset('css/login.css') }}" rel="stylesheet" type="text/css"/>
	<title>Formulario de inicio de sesión</title>
</head>
<body>
	<h2>Inicio de sesión</h2>
	<form>
        <label for="username">Correo:</label>
        <input type="text" id="emaillog" name="username" required>
        <br>
        <label for="password">Contraseña:</label>
        <input type="password" id="passwordlog" name="password" required>
        <br>
      </form>
      <center>
      <button type="submit" id="login">Ingresar</button>  <button type="submit" id="cerrar">Cerrar Sesion</button>
        <p>¿No tienes una cuenta? <a href="{{ url('/register') }}">Regístrate aquí</a>.</p></center>
</body>
<script type="module" src="{{ asset('js/login.js') }}"></script>
</html>
