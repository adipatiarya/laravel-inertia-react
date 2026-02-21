<?php
namespace Maxsol\LaravelFileManager\Controllers;

use Maxsol\LaravelFileManager\LaravelFileManager;
use Maxsol\LaravelFileManager\Events\BeforeInitialization;
use Maxsol\LaravelFileManager\Requests\RequestValidator;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

class FileManagerController extends Controller
{
    private LaravelFileManager $fm;

    public function __construct(LaravelFileManager $fm)
    {
        $this->fm = $fm;
    }

    public function initialize(): JsonResponse
    {
        event(new BeforeInitialization());
        return response()->json($this->fm->initialize());
    }
    public function content(RequestValidator $request): JsonResponse
    {
        return response()->json($this->fm->content($request->input('disk'), $request->input('path')));
    }
    public function tree(RequestValidator $request): JsonResponse
    {
        return response()->json(['success' => true]);
    }
}
