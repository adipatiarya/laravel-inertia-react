<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" {{ $is_darkmode ? 'data-bs-theme=dark' :''}}>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"> -->

        @viteReactRefresh
        @vite(['resources/private/js/app.tsx', "resources/private/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body>
        @inertia('root')
    </body>
</html>