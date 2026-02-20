<?php
namespace Maxsol\LaravelFileManager\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Maxsol\LaravelFileManager\Services\ConfigService\ConfigRepository;
use Illuminate\Support\Facades\Storage;

use function array_key_exists;
use function in_array;

class RequestValidator extends FormRequest
{
    use CustomeErrorMessage;
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $config = resolve(ConfigRepository::class);
        return [
            'disk' => [
                'sometimes',
                'string',
                function ($attribute, $value, $fail) use ($config) {
                    if (!in_array($value, $config->getDiskList()) || !array_key_exists($value, config('filesystems.disks'))) {
                        return $fail('diskNotFound');
                    }
                },
            ],
            'path' => [
                'sometimes',
                'string',
                'nullable',
                function ($attribute, $value, $fail) {
                    if ($value && !Storage::disk($this->input('disk'))->exists($value)) {
                        return $fail('pathNotFound');
                    }
                },
            ],
        ];
    }
}
