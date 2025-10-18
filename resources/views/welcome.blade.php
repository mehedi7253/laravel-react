<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React with Laravel</title>
  <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>
    <div id="app"></div>

    <script src="{{ asset('assets/js/bootstrap.js') }}"></script>
</body>
</html>
