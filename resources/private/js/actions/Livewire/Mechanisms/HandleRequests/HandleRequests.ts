import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:125
* @route '/livewire-ff4b31d3/update'
*/
export const handleUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdate.url(options),
    method: 'post',
})

handleUpdate.definition = {
    methods: ["post"],
    url: '/livewire-ff4b31d3/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:125
* @route '/livewire-ff4b31d3/update'
*/
handleUpdate.url = (options?: RouteQueryOptions) => {
    return handleUpdate.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:125
* @route '/livewire-ff4b31d3/update'
*/
handleUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdate.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:125
* @route '/livewire-ff4b31d3/update'
*/
const handleUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleUpdate.url(options),
    method: 'post',
})

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
* @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:125
* @route '/livewire-ff4b31d3/update'
*/
handleUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleUpdate.url(options),
    method: 'post',
})

handleUpdate.form = handleUpdateForm

const HandleRequests = { handleUpdate }

export default HandleRequests