import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
export const initialize = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: initialize.url(options),
    method: 'get',
})

initialize.definition = {
    methods: ["get","head"],
    url: '/file-manager/initialize',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
initialize.url = (options?: RouteQueryOptions) => {
    return initialize.definition.url + queryParams(options)
}

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
initialize.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: initialize.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
initialize.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: initialize.url(options),
    method: 'head',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
const initializeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
initializeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:17
* @route '/file-manager/initialize'
*/
initializeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

initialize.form = initializeForm

const FileManagerController = { initialize }

export default FileManagerController