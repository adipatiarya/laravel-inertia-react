import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
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
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
* @route '/file-manager/initialize'
*/
initialize.url = (options?: RouteQueryOptions) => {
    return initialize.definition.url + queryParams(options)
}

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
* @route '/file-manager/initialize'
*/
initialize.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: initialize.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
* @route '/file-manager/initialize'
*/
initialize.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: initialize.url(options),
    method: 'head',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
* @route '/file-manager/initialize'
*/
const initializeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
* @route '/file-manager/initialize'
*/
initializeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:20
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

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
export const content = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: content.url(options),
    method: 'get',
})

content.definition = {
    methods: ["get","head"],
    url: '/file-manager/content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
content.url = (options?: RouteQueryOptions) => {
    return content.definition.url + queryParams(options)
}

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
content.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: content.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
content.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: content.url(options),
    method: 'head',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
const contentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: content.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
contentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: content.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:25
* @route '/file-manager/content'
*/
contentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: content.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

content.form = contentForm

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
export const tree = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tree.url(options),
    method: 'get',
})

tree.definition = {
    methods: ["get","head"],
    url: '/file-manager/tree',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
tree.url = (options?: RouteQueryOptions) => {
    return tree.definition.url + queryParams(options)
}

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
tree.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tree.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
tree.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tree.url(options),
    method: 'head',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
const treeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
treeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url(options),
    method: 'get',
})

/**
* @see \Maxsol\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/maxsol/laravel-file-manager/src/Controllers/FileManagerController.php:29
* @route '/file-manager/tree'
*/
treeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tree.form = treeForm

const FileManagerController = { initialize, content, tree }

export default FileManagerController