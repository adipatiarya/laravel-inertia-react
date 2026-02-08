import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/p4n3lb04rd/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::index
* @see app/Http/Controllers/Private/RoleController.php:19
* @route '/p4n3lb04rd/roles'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Private\RoleController::store
* @see app/Http/Controllers/Private/RoleController.php:81
* @route '/p4n3lb04rd/roles'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/p4n3lb04rd/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Private\RoleController::store
* @see app/Http/Controllers/Private/RoleController.php:81
* @route '/p4n3lb04rd/roles'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Private\RoleController::store
* @see app/Http/Controllers/Private/RoleController.php:81
* @route '/p4n3lb04rd/roles'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Private\RoleController::store
* @see app/Http/Controllers/Private/RoleController.php:81
* @route '/p4n3lb04rd/roles'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Private\RoleController::store
* @see app/Http/Controllers/Private/RoleController.php:81
* @route '/p4n3lb04rd/roles'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/p4n3lb04rd/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::create
* @see app/Http/Controllers/Private/RoleController.php:60
* @route '/p4n3lb04rd/roles/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
export const json = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: json.url(options),
    method: 'get',
})

json.definition = {
    methods: ["get","head"],
    url: '/p4n3lb04rd/roles/json',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
json.url = (options?: RouteQueryOptions) => {
    return json.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
json.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: json.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
json.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: json.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
const jsonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: json.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
jsonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: json.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Private\RoleController::json
* @see app/Http/Controllers/Private/RoleController.php:42
* @route '/p4n3lb04rd/roles/json'
*/
jsonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: json.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

json.form = jsonForm

const roles = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    create: Object.assign(create, create),
    json: Object.assign(json, json),
}

export default roles