<?php

namespace App\Http\Controllers;

class SampleAPIController extends Controller
{
    public function index()
    {
        sleep(5);
        return ["I'm glad that you waited"];
    }
}
