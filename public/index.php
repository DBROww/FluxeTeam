<?php
// public/index.php  — Front Controller (único ponto de entrada)

declare(strict_types=1);

require_once __DIR__ . '/../config/app.php';
require_once __DIR__ . '/../config/database.php';

session_start();

// ── Regenera ID de sessão para prevenir session fixation ──
if (empty($_SESSION['_iniciada'])) {
    session_regenerate_id(true);
    $_SESSION['_iniciada'] = true;
}

// ── Roteamento ────────────────────────────────────────────
$rotas  = require __DIR__ . '/../config/routes.php';
$metodo = $_SERVER['REQUEST_METHOD'];
$uri    = strtok($_SERVER['REQUEST_URI'], '?'); // ignora query string

// Remove subdiretório se o projeto não estiver na raiz
$base = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
$uri  = '/' . ltrim(substr($uri, strlen($base)), '/');

if (isset($rotas[$metodo][$uri])) {
    [$controllerClass, $action] = $rotas[$metodo][$uri];

    $file = __DIR__ . "/../app/Controllers/{$controllerClass}.php";
    if (!file_exists($file)) {
        http_response_code(500);
        die('Controller não encontrado.');
    }

    require_once $file;
    $controller = new $controllerClass();

    if (!method_exists($controller, $action)) {
        http_response_code(500);
        die('Ação não encontrada.');
    }

    $controller->$action();
} else {
    http_response_code(404);
    require __DIR__ . '/../app/Views/layouts/404.php';
}
