import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see routes/web.php:10
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:10
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:10
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:10
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:10
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:10
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:10
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
export const admin_login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin_login.url(options),
    method: 'get',
})

admin_login.definition = {
    methods: ["get","head"],
    url: '/p4n3lb04rd/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
admin_login.url = (options?: RouteQueryOptions) => {
    return admin_login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
admin_login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin_login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
admin_login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin_login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
const admin_loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin_login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
admin_loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin_login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::admin_login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/p4n3lb04rd/login'
*/
admin_loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin_login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

admin_login.form = admin_loginForm

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
export const admin_dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin_dashboard.url(options),
    method: 'get',
})

admin_dashboard.definition = {
    methods: ["get","head"],
    url: '/p4n3lb04rd/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
admin_dashboard.url = (options?: RouteQueryOptions) => {
    return admin_dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
admin_dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin_dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
admin_dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin_dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
const admin_dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin_dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
admin_dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin_dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\HomeController::admin_dashboard
* @see app/Http/Controllers/Private/HomeController.php:11
* @route '/p4n3lb04rd/dashboard'
*/
admin_dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin_dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

admin_dashboard.form = admin_dashboardForm
