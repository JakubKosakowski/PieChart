<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChannelRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => 'required|max:255|unique:channels,name'.$this->route('channel'),
            'amount' => 'required|integer|min:1',
        ];
    }

    public function messages(): array
    {
        return [
            'name.unique' => 'The name has already been taken.',
        ];
    }
}
