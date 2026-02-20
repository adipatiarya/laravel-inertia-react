<?php
namespace Maxsol\LaravelFileManager\Requests;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

trait CustomeErrorMessage
{
    protected function failedValidation(Validator $validator)
    {
        $message = method_exists($this, 'message') ? $this->container->call([$this, 'message']) : 'The given data was invalid.';

        throw new HttpResponseException(
            response()->json(
                [
                    'errors' => $validator->errors(),
                    'message' => $message,
                ],
                422,
            ),
        );
    }
}
