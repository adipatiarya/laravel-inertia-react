import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
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
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
* @route '/file-manager/initialize'
*/
initialize.url = (options?: RouteQueryOptions) => {
    return initialize.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
* @route '/file-manager/initialize'
*/
initialize.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: initialize.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
* @route '/file-manager/initialize'
*/
initialize.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: initialize.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
* @route '/file-manager/initialize'
*/
const initializeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
* @route '/file-manager/initialize'
*/
initializeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: initialize.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::initialize
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:55
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
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
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
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
* @route '/file-manager/content'
*/
content.url = (options?: RouteQueryOptions) => {
    return content.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
* @route '/file-manager/content'
*/
content.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: content.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
* @route '/file-manager/content'
*/
content.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: content.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
* @route '/file-manager/content'
*/
const contentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: content.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
* @route '/file-manager/content'
*/
contentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: content.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::content
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:72
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
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
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
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
* @route '/file-manager/tree'
*/
tree.url = (options?: RouteQueryOptions) => {
    return tree.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
* @route '/file-manager/tree'
*/
tree.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tree.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
* @route '/file-manager/tree'
*/
tree.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tree.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
* @route '/file-manager/tree'
*/
const treeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
* @route '/file-manager/tree'
*/
treeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tree
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:90
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

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
export const selectDisk = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectDisk.url(options),
    method: 'get',
})

selectDisk.definition = {
    methods: ["get","head"],
    url: '/file-manager/select-disk',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
selectDisk.url = (options?: RouteQueryOptions) => {
    return selectDisk.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
selectDisk.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectDisk.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
selectDisk.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: selectDisk.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
const selectDiskForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: selectDisk.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
selectDiskForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: selectDisk.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::selectDisk
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:107
* @route '/file-manager/select-disk'
*/
selectDiskForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: selectDisk.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

selectDisk.form = selectDiskForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::upload
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:126
* @route '/file-manager/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/file-manager/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::upload
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:126
* @route '/file-manager/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::upload
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:126
* @route '/file-manager/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::upload
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:126
* @route '/file-manager/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::upload
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:126
* @route '/file-manager/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::deleteMethod
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:154
* @route '/file-manager/delete'
*/
export const deleteMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteMethod.url(options),
    method: 'post',
})

deleteMethod.definition = {
    methods: ["post"],
    url: '/file-manager/delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::deleteMethod
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:154
* @route '/file-manager/delete'
*/
deleteMethod.url = (options?: RouteQueryOptions) => {
    return deleteMethod.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::deleteMethod
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:154
* @route '/file-manager/delete'
*/
deleteMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteMethod.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::deleteMethod
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:154
* @route '/file-manager/delete'
*/
const deleteMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::deleteMethod
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:154
* @route '/file-manager/delete'
*/
deleteMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(options),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::paste
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:173
* @route '/file-manager/paste'
*/
export const paste = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paste.url(options),
    method: 'post',
})

paste.definition = {
    methods: ["post"],
    url: '/file-manager/paste',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::paste
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:173
* @route '/file-manager/paste'
*/
paste.url = (options?: RouteQueryOptions) => {
    return paste.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::paste
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:173
* @route '/file-manager/paste'
*/
paste.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paste.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::paste
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:173
* @route '/file-manager/paste'
*/
const pasteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: paste.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::paste
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:173
* @route '/file-manager/paste'
*/
pasteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: paste.url(options),
    method: 'post',
})

paste.form = pasteForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::rename
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:193
* @route '/file-manager/rename'
*/
export const rename = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rename.url(options),
    method: 'post',
})

rename.definition = {
    methods: ["post"],
    url: '/file-manager/rename',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::rename
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:193
* @route '/file-manager/rename'
*/
rename.url = (options?: RouteQueryOptions) => {
    return rename.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::rename
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:193
* @route '/file-manager/rename'
*/
rename.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rename.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::rename
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:193
* @route '/file-manager/rename'
*/
const renameForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rename.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::rename
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:193
* @route '/file-manager/rename'
*/
renameForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rename.url(options),
    method: 'post',
})

rename.form = renameForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
export const download = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/file-manager/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
download.url = (options?: RouteQueryOptions) => {
    return download.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
download.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
download.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
const downloadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
downloadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::download
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:213
* @route '/file-manager/download'
*/
downloadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
export const thumbnails = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: thumbnails.url(options),
    method: 'get',
})

thumbnails.definition = {
    methods: ["get","head"],
    url: '/file-manager/thumbnails',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
thumbnails.url = (options?: RouteQueryOptions) => {
    return thumbnails.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
thumbnails.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: thumbnails.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
thumbnails.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: thumbnails.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
const thumbnailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: thumbnails.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
thumbnailsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: thumbnails.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::thumbnails
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:231
* @route '/file-manager/thumbnails'
*/
thumbnailsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: thumbnails.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

thumbnails.form = thumbnailsForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(options),
    method: 'get',
})

preview.definition = {
    methods: ["get","head"],
    url: '/file-manager/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
preview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
preview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: preview.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: preview.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
previewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: preview.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::preview
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:246
* @route '/file-manager/preview'
*/
previewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: preview.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

preview.form = previewForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
export const url = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: url.url(options),
    method: 'get',
})

url.definition = {
    methods: ["get","head"],
    url: '/file-manager/url',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
url.url = (options?: RouteQueryOptions) => {
    return url.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
url.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: url.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
url.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: url.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
const urlForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: url.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
urlForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: url.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::url
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:261
* @route '/file-manager/url'
*/
urlForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: url.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

url.form = urlForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createDirectory
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:278
* @route '/file-manager/create-directory'
*/
export const createDirectory = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createDirectory.url(options),
    method: 'post',
})

createDirectory.definition = {
    methods: ["post"],
    url: '/file-manager/create-directory',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createDirectory
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:278
* @route '/file-manager/create-directory'
*/
createDirectory.url = (options?: RouteQueryOptions) => {
    return createDirectory.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createDirectory
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:278
* @route '/file-manager/create-directory'
*/
createDirectory.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createDirectory.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createDirectory
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:278
* @route '/file-manager/create-directory'
*/
const createDirectoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createDirectory.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createDirectory
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:278
* @route '/file-manager/create-directory'
*/
createDirectoryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createDirectory.url(options),
    method: 'post',
})

createDirectory.form = createDirectoryForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:302
* @route '/file-manager/create-file'
*/
export const createFile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createFile.url(options),
    method: 'post',
})

createFile.definition = {
    methods: ["post"],
    url: '/file-manager/create-file',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:302
* @route '/file-manager/create-file'
*/
createFile.url = (options?: RouteQueryOptions) => {
    return createFile.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:302
* @route '/file-manager/create-file'
*/
createFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createFile.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:302
* @route '/file-manager/create-file'
*/
const createFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createFile.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::createFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:302
* @route '/file-manager/create-file'
*/
createFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createFile.url(options),
    method: 'post',
})

createFile.form = createFileForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::updateFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:326
* @route '/file-manager/update-file'
*/
export const updateFile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateFile.url(options),
    method: 'post',
})

updateFile.definition = {
    methods: ["post"],
    url: '/file-manager/update-file',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::updateFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:326
* @route '/file-manager/update-file'
*/
updateFile.url = (options?: RouteQueryOptions) => {
    return updateFile.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::updateFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:326
* @route '/file-manager/update-file'
*/
updateFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateFile.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::updateFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:326
* @route '/file-manager/update-file'
*/
const updateFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateFile.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::updateFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:326
* @route '/file-manager/update-file'
*/
updateFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateFile.url(options),
    method: 'post',
})

updateFile.form = updateFileForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
export const streamFile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: streamFile.url(options),
    method: 'get',
})

streamFile.definition = {
    methods: ["get","head"],
    url: '/file-manager/stream-file',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
streamFile.url = (options?: RouteQueryOptions) => {
    return streamFile.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
streamFile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: streamFile.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
streamFile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: streamFile.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
const streamFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: streamFile.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
streamFileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: streamFile.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::streamFile
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:346
* @route '/file-manager/stream-file'
*/
streamFileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: streamFile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

streamFile.form = streamFileForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::zip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:362
* @route '/file-manager/zip'
*/
export const zip = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: zip.url(options),
    method: 'post',
})

zip.definition = {
    methods: ["post"],
    url: '/file-manager/zip',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::zip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:362
* @route '/file-manager/zip'
*/
zip.url = (options?: RouteQueryOptions) => {
    return zip.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::zip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:362
* @route '/file-manager/zip'
*/
zip.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: zip.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::zip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:362
* @route '/file-manager/zip'
*/
const zipForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: zip.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::zip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:362
* @route '/file-manager/zip'
*/
zipForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: zip.url(options),
    method: 'post',
})

zip.form = zipForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::unzip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:377
* @route '/file-manager/unzip'
*/
export const unzip = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unzip.url(options),
    method: 'post',
})

unzip.definition = {
    methods: ["post"],
    url: '/file-manager/unzip',
} satisfies RouteDefinition<["post"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::unzip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:377
* @route '/file-manager/unzip'
*/
unzip.url = (options?: RouteQueryOptions) => {
    return unzip.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::unzip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:377
* @route '/file-manager/unzip'
*/
unzip.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unzip.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::unzip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:377
* @route '/file-manager/unzip'
*/
const unzipForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unzip.url(options),
    method: 'post',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::unzip
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:377
* @route '/file-manager/unzip'
*/
unzipForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unzip.url(options),
    method: 'post',
})

unzip.form = unzipForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
export const ckeditor = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ckeditor.url(options),
    method: 'get',
})

ckeditor.definition = {
    methods: ["get","head"],
    url: '/file-manager/ckeditor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
ckeditor.url = (options?: RouteQueryOptions) => {
    return ckeditor.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
ckeditor.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ckeditor.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
ckeditor.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ckeditor.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
const ckeditorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckeditor.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
ckeditorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckeditor.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::ckeditor
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:389
* @route '/file-manager/ckeditor'
*/
ckeditorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckeditor.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ckeditor.form = ckeditorForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
export const tinymce = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tinymce.url(options),
    method: 'get',
})

tinymce.definition = {
    methods: ["get","head"],
    url: '/file-manager/tinymce',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
tinymce.url = (options?: RouteQueryOptions) => {
    return tinymce.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
tinymce.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tinymce.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
tinymce.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tinymce.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
const tinymceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tinymce.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
tinymceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tinymce.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:399
* @route '/file-manager/tinymce'
*/
tinymceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tinymce.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tinymce.form = tinymceForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
export const tinymce5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tinymce5.url(options),
    method: 'get',
})

tinymce5.definition = {
    methods: ["get","head"],
    url: '/file-manager/tinymce5',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
tinymce5.url = (options?: RouteQueryOptions) => {
    return tinymce5.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
tinymce5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tinymce5.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
tinymce5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tinymce5.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
const tinymce5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tinymce5.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
tinymce5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tinymce5.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::tinymce5
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:409
* @route '/file-manager/tinymce5'
*/
tinymce5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tinymce5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tinymce5.form = tinymce5Form

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
export const summernote = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summernote.url(options),
    method: 'get',
})

summernote.definition = {
    methods: ["get","head"],
    url: '/file-manager/summernote',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
summernote.url = (options?: RouteQueryOptions) => {
    return summernote.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
summernote.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summernote.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
summernote.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: summernote.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
const summernoteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summernote.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
summernoteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summernote.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::summernote
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:419
* @route '/file-manager/summernote'
*/
summernoteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summernote.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

summernote.form = summernoteForm

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
export const fmButton = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fmButton.url(options),
    method: 'get',
})

fmButton.definition = {
    methods: ["get","head"],
    url: '/file-manager/fm-button',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
fmButton.url = (options?: RouteQueryOptions) => {
    return fmButton.definition.url + queryParams(options)
}

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
fmButton.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fmButton.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
fmButton.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fmButton.url(options),
    method: 'head',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
const fmButtonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fmButton.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
fmButtonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fmButton.url(options),
    method: 'get',
})

/**
* @see \Alexusmai\LaravelFileManager\Controllers\FileManagerController::fmButton
* @see packages/alexusmai/laravel-file-manager/src/Controllers/FileManagerController.php:429
* @route '/file-manager/fm-button'
*/
fmButtonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fmButton.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fmButton.form = fmButtonForm

const fm = {
    initialize: Object.assign(initialize, initialize),
    content: Object.assign(content, content),
    tree: Object.assign(tree, tree),
    selectDisk: Object.assign(selectDisk, selectDisk),
    upload: Object.assign(upload, upload),
    delete: Object.assign(deleteMethod, deleteMethod),
    paste: Object.assign(paste, paste),
    rename: Object.assign(rename, rename),
    download: Object.assign(download, download),
    thumbnails: Object.assign(thumbnails, thumbnails),
    preview: Object.assign(preview, preview),
    url: Object.assign(url, url),
    createDirectory: Object.assign(createDirectory, createDirectory),
    createFile: Object.assign(createFile, createFile),
    updateFile: Object.assign(updateFile, updateFile),
    streamFile: Object.assign(streamFile, streamFile),
    zip: Object.assign(zip, zip),
    unzip: Object.assign(unzip, unzip),
    ckeditor: Object.assign(ckeditor, ckeditor),
    tinymce: Object.assign(tinymce, tinymce),
    tinymce5: Object.assign(tinymce5, tinymce5),
    summernote: Object.assign(summernote, summernote),
    fmButton: Object.assign(fmButton, fmButton),
}

export default fm